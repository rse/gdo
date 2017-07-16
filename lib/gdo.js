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
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(e){this._groups=e}},{key:"element",value:function(e){this._elements.push(e)}},{key:"order",value:function(){var e=this,r={};this._elements.forEach(function(e){if(r[e.name])throw new Error('element named "'+e.name+'" occurs multiple times (has to be unique)');r[e.name]=!0});var t={},n={},o={},i={},a={};this._groups.forEach(function(e){if(o[e])throw new Error('group named "'+e+'" occurs multiple times (has to be unique)');o[e]=["@@@"+e],r["@@@"+e]=!0});var u=function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e instanceof Array?e:"string"==typeof e?[e]:[]};this._elements.forEach(function(r){var t=r.name,s=u(r.tag),f=u(r.before),c=u(r.after),l=r.group;if(i[t]=[].concat(f),a[t]=[].concat(c),s.forEach(function(o){if(e._groups.indexOf(o)>-1)throw new Error('element "'+r.name+'" has invalid tag "'+o+'" (tag cannot have same name as existing group)');void 0===n[o]&&(n[o]=[]),n[o].push(t)}),void 0!==l){var h=e._groups.indexOf(l);if(-1===h)throw new Error('element "'+r.name+'" has invalid group "'+l+'" (group has to be explicitly defined)');o[l].push(t),h<e._groups.length-1&&i[t].push(e._groups[h+1]),h>0&&a[t].push(e._groups[h-1])}});var s=function(e,i,a){i.forEach(function(i){var u=void 0,s=void 0;void 0!==n[i]?(u=n[i],s="tag-based"):void 0!==o[i]?(u=o[i],s="group-based"):(u=[i],s="direct"),u.forEach(function(n){var o=a(e,n),i=_slicedToArray(o,2),u=i[0],f=i[1];if(void 0===r[u])throw new Error('element "'+e+'" has invalid '+s+' before-reference to unknown element "'+u+'"');if(void 0===r[f])throw new Error('element "'+e+'" has invalid '+s+' after-reference to unknown element "'+f+'"');void 0===t[u]&&(t[u]={}),t[u][f]=!0})})};this._elements.forEach(function(e){var r=e.name,t=i[r],n=a[r];s(r,n,function(e,r){return[e,r]}),s(r,t,function(e,r){return[r,e]})});var f=[];Object.keys(t).forEach(function(e){Object.keys(t[e]).forEach(function(r){f.push([e,r])})});var c=_toposort2.default.array(Object.keys(r),f).reverse();return c=c.filter(function(e){return!e.match(/^@@@.+/)})}}]),e}();module.exports=GDO;
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map