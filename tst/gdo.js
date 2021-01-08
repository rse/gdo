/*
**  GDO -- Group- and Dependency-based Ordering
**  Copyright (c) 2015-2020 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

const GDO = require("../lib/gdo.js")

describe("GDO Library", function () {
    it("base API availability", function () {
        const gdo = new GDO()
        expect(gdo).to.respondTo("reset")
        expect(gdo).to.respondTo("groups")
        expect(gdo).to.respondTo("element")
        expect(gdo).to.respondTo("order")
    })
    it("basic ordering with dependencies only", function () {
        const gdo = new GDO()
        gdo.element({ name: "1" })
        gdo.element({ name: "2", after: "1" })
        gdo.element({ name: "3", after: "2" })
        expect(gdo.order()).to.be.deep.equal([ "1", "2", "3" ])
    })
    it("basic ordering with groups only", function () {
        const gdo = new GDO()
        gdo.groups([ "A", "B", "C" ])
        gdo.element({ name: "1", group: "A" })
        gdo.element({ name: "2", group: "B" })
        gdo.element({ name: "3", group: "C" })
        expect(gdo.order()).to.be.deep.equal([ "1", "2", "3" ])
    })
    it("basic ordering with tags only", function () {
        const gdo = new GDO()
        gdo.element({ name: "1",  tag: "A" })
        gdo.element({ name: "2a", tag: "B", after: "A", before: [ "C", "2b" ] })
        gdo.element({ name: "2b", tag: "B", after: [ "A", "2a" ], before: "C" })
        gdo.element({ name: "3",  tag: "C" })
        expect(gdo.order()).to.be.deep.equal([ "1", "2a", "2b", "3" ])
    })
    it("basic ordering with groups and dependencies", function () {
        const gdo = new GDO()
        gdo.groups([ "A", "B", "C" ])
        gdo.element({ name: "1", group: "A" })
        gdo.element({ name: "2a", group: "B" })
        gdo.element({ name: "2b", group: "B", after: "2a" })
        gdo.element({ name: "2c", group: "B", after: "2b" })
        gdo.element({ name: "3", group: "C" })
        expect(gdo.order()).to.be.deep.equal([ "1", "2a", "2b", "2c", "3" ])
    })
    it("basic ordering with groups, tags and dependencies", function () {
        const gdo = new GDO()
        gdo.groups([ "A", "B", "C" ])
        gdo.element({ name: "1",  group: "A" })
        gdo.element({ name: "2a", group: "B", tag: "TWO-A" })
        gdo.element({ name: "2b", group: "B", after: "TWO-A", before: "2c" })
        gdo.element({ name: "2c", group: "B" })
        gdo.element({ name: "3",  group: "C" })
        expect(gdo.order()).to.be.deep.equal([ "1", "2a", "2b", "2c", "3" ])
    })
})

