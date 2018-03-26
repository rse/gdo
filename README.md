
GDO
===

Group- and Dependency-based Ordering

<p/>
<img src="https://nodei.co/npm/gdo.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/gdo.png" alt=""/>

About
-----

GDO (Group-and Dependency-based Ordering) is a small JavaScript
library for ordering named elements by taking into account tags
(multiple non-unique aliases for an element), groups (single
non-unique assignments of an element) and dependencies (inter-group
"after"/"before" dependencies of elements). It is intended to solve the
element ordering problem in dependency management.

Installation
------------

```shell
$ npm install gdo
```

Usage
-----

```js
var GDO = require("gdo")
var gdo = new GDO()
gdo.groups([ "A", "B", "C" ])
gdo.element({ name: "1",  group: "A" })
gdo.element({ name: "2a", group: "B", tag: "TWO-A" })
gdo.element({ name: "2b", group: "B", after: "TWO-A", before: "2c" })
gdo.element({ name: "2c", group: "B" })
gdo.element({ name: "3",  group: "C" })
gdo.order() // -> [ "1", "2a", "2b", "2c", "3" ]
```

License
-------

Copyright (c) 2015-2018 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

