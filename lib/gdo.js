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

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GDO = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";var _interopRequireWildcard=function(r){return r&&r.__esModule?r:{"default":r}},_slicedToArray=function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r)){var n=[],e=!0,o=!1,i=void 0;try{for(var u,a=r[Symbol.iterator]();!(e=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{!e&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},_classCallCheck=function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function r(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _toposort=_dereq_("toposort"),_toposort2=_interopRequireWildcard(_toposort),GDO=function(){function r(){_classCallCheck(this,r),this.reset()}return _createClass(r,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(r){function t(t){return r.apply(this,arguments)}return t.toString=function(){return r.toString()},t}(function(r){this._groups=r})},{key:"element",value:function(r){function t(t){return r.apply(this,arguments)}return t.toString=function(){return r.toString()},t}(function(r){this._elements.push(r)})},{key:"order",value:function(r){function t(){return r.apply(this,arguments)}return t.toString=function(){return r.toString()},t}(function(){var r=this,t={};this._elements.forEach(function(r){t[r.name]=!0});var n={},e={},o={},i={},u={};this._groups.forEach(function(r){o[r]=["@@@"+r],t["@@@"+r]=!0});var a=function(r){return"object"==typeof r&&r instanceof Array?r:"string"==typeof r?[r]:[]};this._elements.forEach(function(t){var n=t.name,c=a(t.tag),s=a(t.before),f=a(t.after),l=t.group;if(i[n]=[].concat(s),u[n]=[].concat(f),c.forEach(function(t){var o=r._groups.indexOf(t);if(o>-1)throw new Error('invalid tag (cannot be same name as group): "'+t+'"');void 0===e[t]&&(e[t]=[]),e[t].push(n)}),void 0!==l){var p=r._groups.indexOf(l);if(-1===p)throw new Error('unknown group: "'+l+'"');o[l].push(n),p<r._groups.length-1&&i[n].push(r._groups[p+1]),p>0&&u[n].push(r._groups[p-1])}});var c=function(r,i){r.forEach(function(r){var u=void 0;u=void 0!==e[r]?e[r]:void 0!==o[r]?o[r]:[r],u.forEach(function(r){var e=i(r),o=_slicedToArray(e,2),u=o[0],a=o[1];if(void 0===t[u])throw new Error("unknown element: "+u);if(void 0===t[a])throw new Error("unknown element: "+a);void 0===n[u]&&(n[u]={}),n[u][a]=!0})})};this._elements.forEach(function(r){var t=r.name,n=i[t],e=u[t];c(e,function(r){return[t,r]}),c(n,function(r){return[r,t]})});var s=[];Object.keys(n).forEach(function(r){Object.keys(n[r]).forEach(function(t){s.push([r,t])})});var f=_toposort2["default"].array(Object.keys(t),s).reverse();return f=f.filter(function(r){return!r.match(/^@@@.+/)})})}]),r}();exports["default"]=GDO,module.exports=exports["default"];
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map