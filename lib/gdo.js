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
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(e){this._groups=e}},{key:"element",value:function(e){this._elements.push(e)}},{key:"order",value:function(){var e=this,t={};this._elements.forEach(function(e){if(t[e.name])throw new Error('element named "'+e.name+'" occurs multiple times (has to be unique)');t[e.name]=!0});var r={},n={},o={},i={},a={};this._groups.forEach(function(e){if(o[e])throw new Error('group named "'+e+'" occurs multiple times (has to be unique)');o[e]=["@@@"+e],t["@@@"+e]=!0});var u=function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e instanceof Array?e:"string"==typeof e?[e]:[]};this._elements.forEach(function(t){var r=t.name,f=u(t.tag),s=u(t.before),c=u(t.after),l=t.group;if(i[r]=[].concat(s),a[r]=[].concat(c),f.forEach(function(o){if(e._groups.indexOf(o)>-1)throw new Error('element "'+t.name+'" has invalid tag "'+o+'" (tag cannot have same name as existing group)');void 0===n[o]&&(n[o]=[]),n[o].push(r)}),void 0!==l){var h=e._groups.indexOf(l);if(-1===h)throw new Error('element "'+t.name+'" has invalid group "'+l+'" (group has to be explicitly defined)');o[l].push(r),h<e._groups.length-1&&i[r].push(e._groups[h+1]),h>0&&a[r].push(e._groups[h-1])}});var f=function(e,i,a){i.forEach(function(i){var u=void 0,f=void 0;void 0!==n[i]?(u=n[i],f="tag-based"):void 0!==o[i]?(u=o[i],f="group-based"):(u=[i],f="direct"),u.forEach(function(n){var o=a(e,n),i=_slicedToArray(o,2),u=i[0],s=i[1];if(void 0===t[u])throw new Error('element "'+e+'" has invalid '+f+' before-reference to unknown element "'+u+'"');if(void 0===t[s])throw new Error('element "'+e+'" has invalid '+f+' after-reference to unknown element "'+s+'"');void 0===r[u]&&(r[u]={}),r[u][s]=!0})})};this._elements.forEach(function(e){var t=e.name,r=i[t],n=a[t];f(t,n,function(e,t){return[t,e]}),f(t,r,function(e,t){return[e,t]})});var s=[];Object.keys(r).forEach(function(e){Object.keys(r[e]).forEach(function(t){s.push([e,t])})});var c=_toposort2.default.array(Object.keys(t),s);return c=c.filter(function(e){return!e.match(/^@@@.+/)})}}]),e}();module.exports=GDO;
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map