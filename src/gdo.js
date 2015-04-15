/*
**  GDO -- Group- and Dependency-based Ordering
**  Copyright (c) 2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import toposort from "toposort"

/*  the API class  */
export default class GDO {
    constructor () {
        this.reset()
    }

    /*  reset the instance  */
    reset () {
        this._groups   = []
        this._elements = []
    }

    /*  configure all groups  */
    groups (groups) {
        this._groups = groups
    }

    /*  configure one element  */
    element (element) {
        this._elements.push(element)
    }

    /*  topologically order the elements by taking account
        of tags, groups and dependencies  */
    order () {
        /*  determine all graph nodes  */
        let nodes = {}
        this._elements.forEach((element) => {
            nodes[element.name] = true
        })

        /*  internal helper data structures  */
        let DAG    = {}
        let TAG    = {}
        let GRP    = {}
        let BEFORE = {}
        let AFTER  = {}

        /*  pre-fill all groups with sentinel elements to ensure that
            a group dependency always has at least one element it can be
            expanded to  */
        this._groups.forEach((group) => {
            GRP[group] = [ `@@@${group}` ]
            nodes[`@@@${group}`] = true
        })

        /*  helper function for taking zero or more strings out of a field  */
        let takeField = (field) => {
            if (typeof field === "object" && field instanceof Array)
                return field
            else if (typeof field === "string")
                return [ field ]
            else
                return []
        }

        /*  pass 1: iterate over all elements and pre-process information  */
        this._elements.forEach((element) => {
            /*  take information of element  */
            let name   = element.name
            let tag    = takeField(element.tag)
            let before = takeField(element.before)
            let after  = takeField(element.after)
            let group  = element.group

            /*  remember (a mutable copy of) after/before information  */
            BEFORE[name] = [].concat(before)
            AFTER[name]  = [].concat(after)

            /*  remember mapping of tag to element  */
            tag.forEach((tag) => {
                let idx = this._groups.indexOf(tag)
                if (idx > -1)
                    throw new Error(`invalid tag (cannot be same name as group): "${tag}"`)
                if (TAG[tag] === undefined)
                    TAG[tag] = []
                TAG[tag].push(name)
            })

            /*  remember group of module  */
            if (group !== undefined) {
                let idx = this._groups.indexOf(group)
                if (idx === -1)
                    throw new Error(`unknown group: "${group}"`)
                GRP[group].push(name)
                if (idx < this._groups.length - 1)
                    BEFORE[name].push(this._groups[idx + 1])
                if (idx > 0)
                    AFTER[name].push(this._groups[idx - 1])
            }
        })

        /*  helper function: insert edge into DAG  */
        let insertDAG = (list, order) => {
            list.forEach((element) => {
                let elements
                if (TAG[element] !== undefined)
                    elements = TAG[element]
                else if (GRP[element] !== undefined)
                    elements = GRP[element]
                else
                    elements = [ element ]
                elements.forEach((element) => {
                    let [ before, after ] = order(element)
                    if (nodes[before] === undefined)
                        throw new Error(`unknown element: ${before}`)
                    if (nodes[after] === undefined)
                        throw new Error(`unknown element: ${after}`)
                    if (DAG[before] === undefined)
                        DAG[before] = {}
                    DAG[before][after] = true
                })
            })
        }

        /*  pass 2: iterate over all elements and process "after" and "before" information  */
        this._elements.forEach((element) => {
            /*  take information of module  */
            let name   = element.name
            let before = BEFORE[name]
            let after  = AFTER[name]

            /*  insert all "after" dependencies into DAG
                (as standard "after" dependencies)  */
            insertDAG(after,  (element) => [ name, element ])

            /*  insert all "before" dependencies into DAG
                (as inverse "after" dependencies)  */
            insertDAG(before, (element) => [ element, name ])
        })

        /*  determine resulting graph edges  */
        let edges = []
        Object.keys(DAG).forEach((before) => {
            Object.keys(DAG[before]).forEach((after) => {
                edges.push([ before, after ])
            })
        })

        /*  perform a topological sorting of the graph  */
        let order = toposort.array(Object.keys(nodes), edges).reverse()

        /*  remove group sentinel values again  */
        order = order.filter((element) => !element.match(/^@@@.+/))

        /*  return the final ordered list of elements  */
        return order
    }
}

