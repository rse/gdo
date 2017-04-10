/*
**  GDO -- Group- and Dependency-based Ordering
**  Copyright (c) 2015-2017 Ralf S. Engelschall <rse@engelschall.com>
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
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}function _classCallCheck(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function r(r,t){var e=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,u=r}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_createClass=function(){function r(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function r(){_classCallCheck(this,r),this.reset()}return _createClass(r,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(r){this._groups=r}},{key:"element",value:function(r){this._elements.push(r)}},{key:"order",value:function(){var r=this,t={};this._elements.forEach(function(r){t[r.name]=!0});var e={},n={},o={},u={},i={};this._groups.forEach(function(r){o[r]=["@@@"+r],t["@@@"+r]=!0});var a=function(r){return"object"===(void 0===r?"undefined":_typeof(r))&&r instanceof Array?r:"string"==typeof r?[r]:[]};this._elements.forEach(function(t){var e=t.name,f=a(t.tag),c=a(t.before),s=a(t.after),l=t.group;if(u[e]=[].concat(c),i[e]=[].concat(s),f.forEach(function(t){if(r._groups.indexOf(t)>-1)throw new Error('invalid tag (cannot be same name as group): "'+t+'"');void 0===n[t]&&(n[t]=[]),n[t].push(e)}),void 0!==l){var p=r._groups.indexOf(l);if(-1===p)throw new Error('unknown group: "'+l+'"');o[l].push(e),p<r._groups.length-1&&u[e].push(r._groups[p+1]),p>0&&i[e].push(r._groups[p-1])}});var f=function(r,u){r.forEach(function(r){var i=void 0;i=void 0!==n[r]?n[r]:void 0!==o[r]?o[r]:[r],i.forEach(function(r){var n=u(r),o=_slicedToArray(n,2),i=o[0],a=o[1];if(void 0===t[i])throw new Error("unknown element: "+i);if(void 0===t[a])throw new Error("unknown element: "+a);void 0===e[i]&&(e[i]={}),e[i][a]=!0})})};this._elements.forEach(function(r){var t=r.name,e=u[t],n=i[t];f(n,function(r){return[t,r]}),f(e,function(r){return[r,t]})});var c=[];Object.keys(e).forEach(function(r){Object.keys(e[r]).forEach(function(t){c.push([r,t])})});var s=_toposort2.default.array(Object.keys(t),c).reverse();return s=s.filter(function(r){return!r.match(/^@@@.+/)})}}]),r}();module.exports=GDO;
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map