
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.ShareButton = factory();
  }
}(this, function(require, exports, module) {

"use strict";(function e(t, n, r){function s(o, u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return a(o, !0);if(i)return i(o, !0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports, function(e){var n=t[o][1][e];return s(n?n:e);}, l, l.exports, e, t, n, r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0; o < r.length; o++) s(r[o]);return s;})({1:[function(require, module, exports){(function(global){"use strict";require("core-js/shim");require("regenerator/runtime");if(global._babelPolyfill){throw new Error("only one instance of babel/polyfill is allowed");}global._babelPolyfill = true;}).call(this, typeof global !== "undefined"?global:typeof self !== "undefined"?self:typeof window !== "undefined"?window:{});}, {"core-js/shim":79, "regenerator/runtime":80}], 2:[function(require, module, exports){var process=module.exports = {};var queue=[];var draining=false;function drainQueue(){if(draining){return;}draining = true;var currentQueue;var len=queue.length;while(len) {currentQueue = queue;queue = [];var i=-1;while(++i < len) {currentQueue[i]();}len = queue.length;}draining = false;}process.nextTick = function(fun){queue.push(fun);if(!draining){setTimeout(drainQueue, 0);}};process.title = "browser";process.browser = true;process.env = {};process.argv = [];process.version = "";process.versions = {};function noop(){}process.on = noop;process.addListener = noop;process.once = noop;process.off = noop;process.removeListener = noop;process.removeAllListeners = noop;process.emit = noop;process.binding = function(name){throw new Error("process.binding is not supported");};process.cwd = function(){return "/";};process.chdir = function(dir){throw new Error("process.chdir is not supported");};process.umask = function(){return 0;};}, {}], 3:[function(require, module, exports){"use strict";var $=require("./$");module.exports = function(IS_INCLUDES){return function(el){var O=$.toObject(this), length=$.toLength(O.length), index=$.toIndex(arguments[1], length), value;if(IS_INCLUDES && el != el)while(length > index) {value = O[index++];if(value != value)return true;}else for(; length > index; index++) if(IS_INCLUDES || index in O){if(O[index] === el)return IS_INCLUDES || index;}return !IS_INCLUDES && -1;};};}, {"./$":22}], 4:[function(require, module, exports){"use strict";var $=require("./$"), ctx=require("./$.ctx");module.exports = function(TYPE){var IS_MAP=TYPE == 1, IS_FILTER=TYPE == 2, IS_SOME=TYPE == 3, IS_EVERY=TYPE == 4, IS_FIND_INDEX=TYPE == 6, NO_HOLES=TYPE == 5 || IS_FIND_INDEX;return function(callbackfn){var O=Object($.assertDefined(this)), self=$.ES5Object(O), f=ctx(callbackfn, arguments[1], 3), length=$.toLength(self.length), index=0, result=IS_MAP?Array(length):IS_FILTER?[]:undefined, val, res;for(; length > index; index++) if(NO_HOLES || index in self){val = self[index];res = f(val, index, O);if(TYPE){if(IS_MAP)result[index] = res;else if(res)switch(TYPE){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val);}else if(IS_EVERY)return false;}}return IS_FIND_INDEX?-1:IS_SOME || IS_EVERY?IS_EVERY:result;};};}, {"./$":22, "./$.ctx":12}], 5:[function(require, module, exports){var $=require("./$");function assert(condition, msg1, msg2){if(!condition)throw TypeError(msg2?msg1 + msg2:msg1);}assert.def = $.assertDefined;assert.fn = function(it){if(!$.isFunction(it))throw TypeError(it + " is not a function!");return it;};assert.obj = function(it){if(!$.isObject(it))throw TypeError(it + " is not an object!");return it;};assert.inst = function(it, Constructor, name){if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");return it;};module.exports = assert;}, {"./$":22}], 6:[function(require, module, exports){var $=require("./$"), enumKeys=require("./$.enum-keys");module.exports = Object.assign || function assign(target, source){var T=Object($.assertDefined(target)), l=arguments.length, i=1;while(l > i) {var S=$.ES5Object(arguments[i++]), keys=enumKeys(S), length=keys.length, j=0, key;while(length > j) T[key = keys[j++]] = S[key];}return T;};}, {"./$":22, "./$.enum-keys":14}], 7:[function(require, module, exports){var $=require("./$"), TAG=require("./$.wks")("toStringTag"), toString=({}).toString;function cof(it){return toString.call(it).slice(8, -1);}cof.classof = function(it){var O, T;return it == undefined?it === undefined?"Undefined":"Null":typeof (T = (O = Object(it))[TAG]) == "string"?T:cof(O);};cof.set = function(it, tag, stat){if(it && !$.has(it = stat?it:it.prototype, TAG))$.hide(it, TAG, tag);};module.exports = cof;}, {"./$":22, "./$.wks":33}], 8:[function(require, module, exports){"use strict";var $=require("./$"), ctx=require("./$.ctx"), safe=require("./$.uid").safe, assert=require("./$.assert"), forOf=require("./$.for-of"), step=require("./$.iter").step, has=$.has, set=$.set, isObject=$.isObject, hide=$.hide, isFrozen=Object.isFrozen || $.core.Object.isFrozen, ID=safe("id"), O1=safe("O1"), LAST=safe("last"), FIRST=safe("first"), ITER=safe("iter"), SIZE=$.DESC?safe("size"):"size", id=0;function fastKey(it, create){if(!isObject(it))return (typeof it == "string"?"S":"P") + it;if(isFrozen(it))return "F";if(!has(it, ID)){if(!create)return "E";hide(it, ID, ++id);}return "O" + it[ID];}function getEntry(that, key){var index=fastKey(key), entry;if(index != "F")return that[O1][index];for(entry = that[FIRST]; entry; entry = entry.n) {if(entry.k == key)return entry;}}module.exports = {getConstructor:function getConstructor(NAME, IS_MAP, ADDER){function C(){var that=assert.inst(this, C, NAME), iterable=arguments[0];set(that, O1, $.create(null));set(that, SIZE, 0);set(that, LAST, undefined);set(that, FIRST, undefined);if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);}$.mix(C.prototype, {clear:function clear(){for(var that=this, data=that[O1], entry=that[FIRST]; entry; entry = entry.n) {entry.r = true;if(entry.p)entry.p = entry.p.n = undefined;delete data[entry.i];}that[FIRST] = that[LAST] = undefined;that[SIZE] = 0;}, "delete":function _delete(key){var that=this, entry=getEntry(that, key);if(entry){var next=entry.n, prev=entry.p;delete that[O1][entry.i];entry.r = true;if(prev)prev.n = next;if(next)next.p = prev;if(that[FIRST] == entry)that[FIRST] = next;if(that[LAST] == entry)that[LAST] = prev;that[SIZE]--;}return !!entry;}, forEach:function forEach(callbackfn){var f=ctx(callbackfn, arguments[1], 3), entry;while(entry = entry?entry.n:this[FIRST]) {f(entry.v, entry.k, this);while(entry && entry.r) entry = entry.p;}}, has:function has(key){return !!getEntry(this, key);}});if($.DESC)$.setDesc(C.prototype, "size", {get:function get(){return assert.def(this[SIZE]);}});return C;}, def:function def(that, key, value){var entry=getEntry(that, key), prev, index;if(entry){entry.v = value;}else {that[LAST] = entry = {i:index = fastKey(key, true), k:key, v:value, p:prev = that[LAST], n:undefined, r:false};if(!that[FIRST])that[FIRST] = entry;if(prev)prev.n = entry;that[SIZE]++;if(index != "F")that[O1][index] = entry;}return that;}, getEntry:getEntry, setIter:function setIter(C, NAME, IS_MAP){require("./$.iter-define")(C, NAME, function(iterated, kind){set(this, ITER, {o:iterated, k:kind});}, function(){var iter=this[ITER], kind=iter.k, entry=iter.l;while(entry && entry.r) entry = entry.p;if(!iter.o || !(iter.l = entry = entry?entry.n:iter.o[FIRST])){iter.o = undefined;return step(1);}if(kind == "keys")return step(0, entry.k);if(kind == "values")return step(0, entry.v);return step(0, [entry.k, entry.v]);}, IS_MAP?"entries":"values", !IS_MAP, true);}};}, {"./$":22, "./$.assert":5, "./$.ctx":12, "./$.for-of":15, "./$.iter":21, "./$.iter-define":19, "./$.uid":31}], 9:[function(require, module, exports){var $def=require("./$.def"), forOf=require("./$.for-of");module.exports = function(NAME){$def($def.P, NAME, {toJSON:function toJSON(){var arr=[];forOf(this, false, arr.push, arr);return arr;}});};}, {"./$.def":13, "./$.for-of":15}], 10:[function(require, module, exports){"use strict";var $=require("./$"), safe=require("./$.uid").safe, assert=require("./$.assert"), forOf=require("./$.for-of"), _has=$.has, isObject=$.isObject, hide=$.hide, isFrozen=Object.isFrozen || $.core.Object.isFrozen, id=0, ID=safe("id"), WEAK=safe("weak"), LEAK=safe("leak"), method=require("./$.array-methods"), find=method(5), findIndex=method(6);function findFrozen(store, key){return find.call(store.array, function(it){return it[0] === key;});}function leakStore(that){return that[LEAK] || hide(that, LEAK, {array:[], get:function get(key){var entry=findFrozen(this, key);if(entry)return entry[1];}, has:function has(key){return !!findFrozen(this, key);}, set:function set(key, value){var entry=findFrozen(this, key);if(entry)entry[1] = value;else this.array.push([key, value]);}, "delete":function _delete(key){var index=findIndex.call(this.array, function(it){return it[0] === key;});if(~index)this.array.splice(index, 1);return !! ~index;}})[LEAK];}module.exports = {getConstructor:function getConstructor(NAME, IS_MAP, ADDER){function C(){$.set(assert.inst(this, C, NAME), ID, id++);var iterable=arguments[0];if(iterable != undefined)forOf(iterable, IS_MAP, this[ADDER], this);}$.mix(C.prototype, {"delete":function _delete(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this)["delete"](key);return _has(key, WEAK) && _has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];}, has:function has(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this).has(key);return _has(key, WEAK) && _has(key[WEAK], this[ID]);}});return C;}, def:function def(that, key, value){if(isFrozen(assert.obj(key))){leakStore(that).set(key, value);}else {_has(key, WEAK) || hide(key, WEAK, {});key[WEAK][that[ID]] = value;}return that;}, leakStore:leakStore, WEAK:WEAK, ID:ID};}, {"./$":22, "./$.array-methods":4, "./$.assert":5, "./$.for-of":15, "./$.uid":31}], 11:[function(require, module, exports){"use strict";var $=require("./$"), $def=require("./$.def"), BUGGY=require("./$.iter").BUGGY, forOf=require("./$.for-of"), species=require("./$.species"), assertInstance=require("./$.assert").inst;module.exports = function(NAME, methods, common, IS_MAP, IS_WEAK){var Base=$.g[NAME], C=Base, ADDER=IS_MAP?"set":"add", proto=C && C.prototype, O={};function fixMethod(KEY, CHAIN){var method=proto[KEY];if($.FW)proto[KEY] = function(a, b){var result=method.call(this, a === 0?0:a, b);return CHAIN?this:result;};}if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){C = common.getConstructor(NAME, IS_MAP, ADDER);$.mix(C.prototype, methods);}else {var inst=new C(), chain=inst[ADDER](IS_WEAK?{}:-0, 1), buggyZero;if(!require("./$.iter-detect")(function(iter){new C(iter);})){C = function(){assertInstance(this, C, NAME);var that=new Base(), iterable=arguments[0];if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);return that;};C.prototype = proto;if($.FW)proto.constructor = C;}IS_WEAK || inst.forEach(function(val, key){buggyZero = 1 / key === -Infinity;});if(buggyZero){fixMethod("delete");fixMethod("has");IS_MAP && fixMethod("get");}if(buggyZero || chain !== inst)fixMethod(ADDER, true);}require("./$.cof").set(C, NAME);O[NAME] = C;$def($def.G + $def.W + $def.F * (C != Base), O);species(C);species($.core[NAME]);if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);return C;};}, {"./$":22, "./$.assert":5, "./$.cof":7, "./$.def":13, "./$.for-of":15, "./$.iter":21, "./$.iter-detect":20, "./$.species":28}], 12:[function(require, module, exports){var assertFunction=require("./$.assert").fn;module.exports = function(fn, that, length){assertFunction(fn);if(~length && that === undefined)return fn;switch(length){case 1:return function(a){return fn.call(that, a);};case 2:return function(a, b){return fn.call(that, a, b);};case 3:return function(a, b, c){return fn.call(that, a, b, c);};}return function(){return fn.apply(that, arguments);};};}, {"./$.assert":5}], 13:[function(require, module, exports){var $=require("./$"), global=$.g, core=$.core, isFunction=$.isFunction;function ctx(fn, that){return function(){return fn.apply(that, arguments);};}global.core = core;$def.F = 1;$def.G = 2;$def.S = 4;$def.P = 8;$def.B = 16;$def.W = 32;function $def(type, name, source){var key, own, out, exp, isGlobal=type & $def.G, target=isGlobal?global:type & $def.S?global[name]:(global[name] || {}).prototype, exports=isGlobal?core:core[name] || (core[name] = {});if(isGlobal)source = name;for(key in source) {own = !(type & $def.F) && target && key in target;out = (own?target:source)[key];if(type & $def.B && own)exp = ctx(out, global);else exp = type & $def.P && isFunction(out)?ctx(Function.call, out):out;if(target && !own){if(isGlobal)target[key] = out;else delete target[key] && $.hide(target, key, out);}if(exports[key] != out)$.hide(exports, key, exp);}}module.exports = $def;}, {"./$":22}], 14:[function(require, module, exports){var $=require("./$");module.exports = function(it){var keys=$.getKeys(it), getDesc=$.getDesc, getSymbols=$.getSymbols;if(getSymbols)$.each.call(getSymbols(it), function(key){if(getDesc(it, key).enumerable)keys.push(key);});return keys;};}, {"./$":22}], 15:[function(require, module, exports){var ctx=require("./$.ctx"), get=require("./$.iter").get, call=require("./$.iter-call");module.exports = function(iterable, entries, fn, that){var iterator=get(iterable), f=ctx(fn, that, entries?2:1), step;while(!(step = iterator.next()).done) {if(call(iterator, f, step.value, entries) === false){return call.close(iterator);}}};}, {"./$.ctx":12, "./$.iter":21, "./$.iter-call":18}], 16:[function(require, module, exports){module.exports = function($){$.FW = true;$.path = $.g;return $;};}, {}], 17:[function(require, module, exports){module.exports = function(fn, args, that){var un=that === undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that, args[0]);case 2:return un?fn(args[0], args[1]):fn.call(that, args[0], args[1]);case 3:return un?fn(args[0], args[1], args[2]):fn.call(that, args[0], args[1], args[2]);case 4:return un?fn(args[0], args[1], args[2], args[3]):fn.call(that, args[0], args[1], args[2], args[3]);case 5:return un?fn(args[0], args[1], args[2], args[3], args[4]):fn.call(that, args[0], args[1], args[2], args[3], args[4]);}return fn.apply(that, args);};}, {}], 18:[function(require, module, exports){var assertObject=require("./$.assert").obj;function close(iterator){var ret=iterator["return"];if(ret !== undefined)assertObject(ret.call(iterator));}function call(iterator, fn, value, entries){try{return entries?fn(assertObject(value)[0], value[1]):fn(value);}catch(e) {close(iterator);throw e;}}call.close = close;module.exports = call;}, {"./$.assert":5}], 19:[function(require, module, exports){var $def=require("./$.def"), $=require("./$"), cof=require("./$.cof"), $iter=require("./$.iter"), SYMBOL_ITERATOR=require("./$.wks")("iterator"), FF_ITERATOR="@@iterator", VALUES="values", Iterators=$iter.Iterators;module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){$iter.create(Constructor, NAME, next);function createMethod(kind){return function(){return new Constructor(this, kind);};}var TAG=NAME + " Iterator", proto=Base.prototype, _native=proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], _default=_native || createMethod(DEFAULT), methods, key;if(_native){var IteratorPrototype=$.getProto(_default.call(new Base()));cof.set(IteratorPrototype, TAG, true);if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);}if($.FW)$iter.set(proto, _default);Iterators[NAME] = _default;Iterators[TAG] = $.that;if(DEFAULT){methods = {keys:IS_SET?_default:createMethod("keys"), values:DEFAULT == VALUES?_default:createMethod(VALUES), entries:DEFAULT != VALUES?_default:createMethod("entries")};if(FORCE)for(key in methods) {if(!(key in proto))$.hide(proto, key, methods[key]);}else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);}};}, {"./$":22, "./$.cof":7, "./$.def":13, "./$.iter":21, "./$.wks":33}], 20:[function(require, module, exports){var SYMBOL_ITERATOR=require("./$.wks")("iterator"), SAFE_CLOSING=false;try{var riter=[7][SYMBOL_ITERATOR]();riter["return"] = function(){SAFE_CLOSING = true;};Array.from(riter, function(){throw 2;});}catch(e) {}module.exports = function(exec){if(!SAFE_CLOSING)return false;var safe=false;try{var arr=[7], iter=arr[SYMBOL_ITERATOR]();iter.next = function(){safe = true;};arr[SYMBOL_ITERATOR] = function(){return iter;};exec(arr);}catch(e) {}return safe;};}, {"./$.wks":33}], 21:[function(require, module, exports){"use strict";var $=require("./$"), cof=require("./$.cof"), assertObject=require("./$.assert").obj, SYMBOL_ITERATOR=require("./$.wks")("iterator"), FF_ITERATOR="@@iterator", Iterators={}, IteratorPrototype={};setIterator(IteratorPrototype, $.that);function setIterator(O, value){$.hide(O, SYMBOL_ITERATOR, value);if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);}module.exports = {BUGGY:"keys" in [] && !("next" in [].keys()), Iterators:Iterators, step:function step(done, value){return {value:value, done:!!done};}, is:function is(it){var O=Object(it), Symbol=$.g.Symbol, SYM=Symbol && Symbol.iterator || FF_ITERATOR;return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));}, get:function get(it){var Symbol=$.g.Symbol, ext=it[Symbol && Symbol.iterator || FF_ITERATOR], getIter=ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];return assertObject(getIter.call(it));}, set:setIterator, create:function create(Constructor, NAME, next, proto){Constructor.prototype = $.create(proto || IteratorPrototype, {next:$.desc(1, next)});cof.set(Constructor, NAME + " Iterator");}};}, {"./$":22, "./$.assert":5, "./$.cof":7, "./$.wks":33}], 22:[function(require, module, exports){"use strict";var global=typeof self != "undefined"?self:Function("return this")(), core={}, defineProperty=Object.defineProperty, hasOwnProperty=({}).hasOwnProperty, ceil=Math.ceil, floor=Math.floor, max=Math.max, min=Math.min;var DESC=!!(function(){try{return defineProperty({}, "a", {get:function get(){return 2;}}).a == 2;}catch(e) {}})();var hide=createDefiner(1);function toInteger(it){return isNaN(it = +it)?0:(it > 0?floor:ceil)(it);}function desc(bitmap, value){return {enumerable:!(bitmap & 1), configurable:!(bitmap & 2), writable:!(bitmap & 4), value:value};}function simpleSet(object, key, value){object[key] = value;return object;}function createDefiner(bitmap){return DESC?function(object, key, value){return $.setDesc(object, key, desc(bitmap, value));}:simpleSet;}function isObject(it){return it !== null && (typeof it == "object" || typeof it == "function");}function isFunction(it){return typeof it == "function";}function assertDefined(it){if(it == undefined)throw TypeError("Can't call method on  " + it);return it;}var $=module.exports = require("./$.fw")({g:global, core:core, html:global.document && document.documentElement, isObject:isObject, isFunction:isFunction, it:function it(_it){return _it;}, that:function that(){return this;}, toInteger:toInteger, toLength:function toLength(it){return it > 0?min(toInteger(it), 9007199254740991):0;}, toIndex:function toIndex(index, length){index = toInteger(index);return index < 0?max(index + length, 0):min(index, length);}, has:function has(it, key){return hasOwnProperty.call(it, key);}, create:Object.create, getProto:Object.getPrototypeOf, DESC:DESC, desc:desc, getDesc:Object.getOwnPropertyDescriptor, setDesc:defineProperty, setDescs:Object.defineProperties, getKeys:Object.keys, getNames:Object.getOwnPropertyNames, getSymbols:Object.getOwnPropertySymbols, assertDefined:assertDefined, ES5Object:Object, toObject:function toObject(it){return $.ES5Object(assertDefined(it));}, hide:hide, def:createDefiner(0), set:global.Symbol?simpleSet:hide, mix:function mix(target, src){for(var key in src) hide(target, key, src[key]);return target;}, each:[].forEach});if(typeof __e != "undefined")__e = core;if(typeof __g != "undefined")__g = global;}, {"./$.fw":16}], 23:[function(require, module, exports){var $=require("./$");module.exports = function(object, el){var O=$.toObject(object), keys=$.getKeys(O), length=keys.length, index=0, key;while(length > index) if(O[key = keys[index++]] === el)return key;};}, {"./$":22}], 24:[function(require, module, exports){var $=require("./$"), assertObject=require("./$.assert").obj;module.exports = function ownKeys(it){assertObject(it);var keys=$.getNames(it), getSymbols=$.getSymbols;return getSymbols?keys.concat(getSymbols(it)):keys;};}, {"./$":22, "./$.assert":5}], 25:[function(require, module, exports){"use strict";var $=require("./$"), invoke=require("./$.invoke"), assertFunction=require("./$.assert").fn;module.exports = function(){var fn=assertFunction(this), length=arguments.length, pargs=Array(length), i=0, _=$.path._, holder=false;while(length > i) if((pargs[i] = arguments[i++]) === _)holder = true;return function(){var that=this, _length=arguments.length, j=0, k=0, args;if(!holder && !_length)return invoke(fn, pargs, that);args = pargs.slice();if(holder)for(; length > j; j++) if(args[j] === _)args[j] = arguments[k++];while(_length > k) args.push(arguments[k++]);return invoke(fn, args, that);};};}, {"./$":22, "./$.assert":5, "./$.invoke":17}], 26:[function(require, module, exports){"use strict";module.exports = function(regExp, replace, isStatic){var replacer=replace === Object(replace)?function(part){return replace[part];}:replace;return function(it){return String(isStatic?it:this).replace(regExp, replacer);};};}, {}], 27:[function(require, module, exports){var $=require("./$"), assert=require("./$.assert");function check(O, proto){assert.obj(O);assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");}module.exports = {set:Object.setPrototypeOf || ("__proto__" in {}?(function(buggy, set){try{set = require("./$.ctx")(Function.call, $.getDesc(Object.prototype, "__proto__").set, 2);set({}, []);}catch(e) {buggy = true;}return function setPrototypeOf(O, proto){check(O, proto);if(buggy)O.__proto__ = proto;else set(O, proto);return O;};})():undefined), check:check};}, {"./$":22, "./$.assert":5, "./$.ctx":12}], 28:[function(require, module, exports){var $=require("./$"), SPECIES=require("./$.wks")("species");module.exports = function(C){if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {configurable:true, get:$.that});};}, {"./$":22, "./$.wks":33}], 29:[function(require, module, exports){"use strict";var $=require("./$");module.exports = function(TO_STRING){return function(pos){var s=String($.assertDefined(this)), i=$.toInteger(pos), l=s.length, a, b;if(i < 0 || i >= l)return TO_STRING?"":undefined;a = s.charCodeAt(i);return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i, i + 2):(a - 55296 << 10) + (b - 56320) + 65536;};};}, {"./$":22}], 30:[function(require, module, exports){"use strict";var $=require("./$"), ctx=require("./$.ctx"), cof=require("./$.cof"), invoke=require("./$.invoke"), global=$.g, isFunction=$.isFunction, html=$.html, document=global.document, process=global.process, setTask=global.setImmediate, clearTask=global.clearImmediate, postMessage=global.postMessage, addEventListener=global.addEventListener, MessageChannel=global.MessageChannel, counter=0, queue={}, ONREADYSTATECHANGE="onreadystatechange", defer, channel, port;function run(){var id=+this;if($.has(queue, id)){var fn=queue[id];delete queue[id];fn();}}function listner(event){run.call(event.data);}if(!isFunction(setTask) || !isFunction(clearTask)){setTask = function(fn){var args=[], i=1;while(arguments.length > i) args.push(arguments[i++]);queue[++counter] = function(){invoke(isFunction(fn)?fn:Function(fn), args);};defer(counter);return counter;};clearTask = function(id){delete queue[id];};if(cof(process) == "process"){defer = function(id){process.nextTick(ctx(run, id, 1));};}else if(addEventListener && isFunction(postMessage) && !global.importScripts){defer = function(id){postMessage(id, "*");};addEventListener("message", listner, false);}else if(isFunction(MessageChannel)){channel = new MessageChannel();port = channel.port2;channel.port1.onmessage = listner;defer = ctx(port.postMessage, port, 1);}else if(document && ONREADYSTATECHANGE in document.createElement("script")){defer = function(id){html.appendChild(document.createElement("script"))[ONREADYSTATECHANGE] = function(){html.removeChild(this);run.call(id);};};}else {defer = function(id){setTimeout(ctx(run, id, 1), 0);};}}module.exports = {set:setTask, clear:clearTask};}, {"./$":22, "./$.cof":7, "./$.ctx":12, "./$.invoke":17}], 31:[function(require, module, exports){var sid=0;function uid(key){return "Symbol(" + key + ")_" + (++sid + Math.random()).toString(36);}uid.safe = require("./$").g.Symbol || uid;module.exports = uid;}, {"./$":22}], 32:[function(require, module, exports){var $=require("./$"), UNSCOPABLES=require("./$.wks")("unscopables");if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});module.exports = function(key){if($.FW)[][UNSCOPABLES][key] = true;};}, {"./$":22, "./$.wks":33}], 33:[function(require, module, exports){var global=require("./$").g, store={};module.exports = function(name){return store[name] || (store[name] = global.Symbol && global.Symbol[name] || require("./$.uid").safe("Symbol." + name));};}, {"./$":22, "./$.uid":31}], 34:[function(require, module, exports){var $=require("./$"), cof=require("./$.cof"), $def=require("./$.def"), invoke=require("./$.invoke"), arrayMethod=require("./$.array-methods"), IE_PROTO=require("./$.uid").safe("__proto__"), assert=require("./$.assert"), assertObject=assert.obj, ObjectProto=Object.prototype, A=[], slice=A.slice, indexOf=A.indexOf, classof=cof.classof, has=$.has, defineProperty=$.setDesc, getOwnDescriptor=$.getDesc, defineProperties=$.setDescs, isFunction=$.isFunction, toObject=$.toObject, toLength=$.toLength, IE8_DOM_DEFINE=false;if(!$.DESC){try{IE8_DOM_DEFINE = defineProperty(document.createElement("div"), "x", {get:function get(){return 8;}}).x == 8;}catch(e) {}$.setDesc = function(O, P, Attributes){if(IE8_DOM_DEFINE)try{return defineProperty(O, P, Attributes);}catch(e) {}if("get" in Attributes || "set" in Attributes)throw TypeError("Accessors not supported!");if("value" in Attributes)assertObject(O)[P] = Attributes.value;return O;};$.getDesc = function(O, P){if(IE8_DOM_DEFINE)try{return getOwnDescriptor(O, P);}catch(e) {}if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);};$.setDescs = defineProperties = function(O, Properties){assertObject(O);var keys=$.getKeys(Properties), length=keys.length, i=0, P;while(length > i) $.setDesc(O, P = keys[i++], Properties[P]);return O;};}$def($def.S + $def.F * !$.DESC, "Object", {getOwnPropertyDescriptor:$.getDesc, defineProperty:$.setDesc, defineProperties:defineProperties});var keys1=("constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable," + "toLocaleString,toString,valueOf").split(","), keys2=keys1.concat("length", "prototype"), keysLen1=keys1.length;var _createDict=function createDict(){var iframe=document.createElement("iframe"), i=keysLen1, gt=">", iframeDocument;iframe.style.display = "none";$.html.appendChild(iframe);iframe.src = "javascript:";iframeDocument = iframe.contentWindow.document;iframeDocument.open();iframeDocument.write("<script>document.F=Object</script" + gt);iframeDocument.close();_createDict = iframeDocument.F;while(i--) delete _createDict.prototype[keys1[i]];return _createDict();};function createGetKeys(names, length){return function(object){var O=toObject(object), i=0, result=[], key;for(key in O) if(key != IE_PROTO)has(O, key) && result.push(key);while(length > i) if(has(O, key = names[i++])){~indexOf.call(result, key) || result.push(key);}return result;};}function isPrimitive(it){return !$.isObject(it);}function Empty(){}$def($def.S, "Object", {getPrototypeOf:$.getProto = $.getProto || function(O){O = Object(assert.def(O));if(has(O, IE_PROTO))return O[IE_PROTO];if(isFunction(O.constructor) && O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;}, getOwnPropertyNames:$.getNames = $.getNames || createGetKeys(keys2, keys2.length, true), create:$.create = $.create || function(O, Properties){var result;if(O !== null){Empty.prototype = assertObject(O);result = new Empty();Empty.prototype = null;result[IE_PROTO] = O;}else result = _createDict();return Properties === undefined?result:defineProperties(result, Properties);}, keys:$.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false), seal:$.it, freeze:$.it, preventExtensions:$.it, isSealed:isPrimitive, isFrozen:isPrimitive, isExtensible:$.isObject});$def($def.P, "Function", {bind:function bind(that){var fn=assert.fn(this), partArgs=slice.call(arguments, 1);function bound(){var args=partArgs.concat(slice.call(arguments));return invoke(fn, args, this instanceof bound?$.create(fn.prototype):that);}if(fn.prototype)bound.prototype = fn.prototype;return bound;}});function arrayMethodFix(fn){return function(){return fn.apply($.ES5Object(this), arguments);};}if(!(0 in Object("z") && "z"[0] == "z")){$.ES5Object = function(it){return cof(it) == "String"?it.split(""):Object(it);};}$def($def.P + $def.F * ($.ES5Object != Object), "Array", {slice:arrayMethodFix(slice), join:arrayMethodFix(A.join)});$def($def.S, "Array", {isArray:function isArray(arg){return cof(arg) == "Array";}});function createArrayReduce(isRight){return function(callbackfn, memo){assert.fn(callbackfn);var O=toObject(this), length=toLength(O.length), index=isRight?length - 1:0, i=isRight?-1:1;if(arguments.length < 2)for(;;) {if(index in O){memo = O[index];index += i;break;}index += i;assert(isRight?index >= 0:length > index, "Reduce of empty array with no initial value");}for(; isRight?index >= 0:length > index; index += i) if(index in O){memo = callbackfn(memo, O[index], index, this);}return memo;};}$def($def.P, "Array", {forEach:$.each = $.each || arrayMethod(0), map:arrayMethod(1), filter:arrayMethod(2), some:arrayMethod(3), every:arrayMethod(4), reduce:createArrayReduce(false), reduceRight:createArrayReduce(true), indexOf:indexOf = indexOf || require("./$.array-includes")(false), lastIndexOf:function lastIndexOf(el, fromIndex){var O=toObject(this), length=toLength(O.length), index=length - 1;if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));if(index < 0)index = toLength(length + index);for(; index >= 0; index--) if(index in O)if(O[index] === el)return index;return -1;}});$def($def.P, "String", {trim:require("./$.replacer")(/^\s*([\s\S]*\S)?\s*$/, "$1")});$def($def.S, "Date", {now:function now(){return +new Date();}});function lz(num){return num > 9?num:"0" + num;}var date=new Date(-50000000000000 - 1), brokenDate=!(date.toISOString && date.toISOString() == "0385-07-25T07:06:39.999Z");$def($def.P + $def.F * brokenDate, "Date", {toISOString:function toISOString(){if(!isFinite(this))throw RangeError("Invalid time value");var d=this, y=d.getUTCFullYear(), m=d.getUTCMilliseconds(), s=y < 0?"-":y > 9999?"+":"";return s + ("00000" + Math.abs(y)).slice(s?-6:-4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99?m:"0" + lz(m)) + "Z";}});if(classof((function(){return arguments;})()) == "Object")cof.classof = function(it){var tag=classof(it);return tag == "Object" && isFunction(it.callee)?"Arguments":tag;};}, {"./$":22, "./$.array-includes":3, "./$.array-methods":4, "./$.assert":5, "./$.cof":7, "./$.def":13, "./$.invoke":17, "./$.replacer":26, "./$.uid":31}], 35:[function(require, module, exports){"use strict";var $=require("./$"), $def=require("./$.def"), toIndex=$.toIndex;$def($def.P, "Array", {copyWithin:function copyWithin(target, start){var O=Object($.assertDefined(this)), len=$.toLength(O.length), to=toIndex(target, len), from=toIndex(start, len), end=arguments[2], fin=end === undefined?len:toIndex(end, len), count=Math.min(fin - from, len - to), inc=1;if(from < to && to < from + count){inc = -1;from = from + count - 1;to = to + count - 1;}while(count-- > 0) {if(from in O)O[to] = O[from];else delete O[to];to += inc;from += inc;}return O;}});require("./$.unscope")("copyWithin");}, {"./$":22, "./$.def":13, "./$.unscope":32}], 36:[function(require, module, exports){"use strict";var $=require("./$"), $def=require("./$.def"), toIndex=$.toIndex;$def($def.P, "Array", {fill:function fill(value){var O=Object($.assertDefined(this)), length=$.toLength(O.length), index=toIndex(arguments[1], length), end=arguments[2], endPos=end === undefined?length:toIndex(end, length);while(endPos > index) O[index++] = value;return O;}});require("./$.unscope")("fill");}, {"./$":22, "./$.def":13, "./$.unscope":32}], 37:[function(require, module, exports){var $def=require("./$.def");$def($def.P, "Array", {findIndex:require("./$.array-methods")(6)});require("./$.unscope")("findIndex");}, {"./$.array-methods":4, "./$.def":13, "./$.unscope":32}], 38:[function(require, module, exports){var $def=require("./$.def");$def($def.P, "Array", {find:require("./$.array-methods")(5)});require("./$.unscope")("find");}, {"./$.array-methods":4, "./$.def":13, "./$.unscope":32}], 39:[function(require, module, exports){var $=require("./$"), ctx=require("./$.ctx"), $def=require("./$.def"), $iter=require("./$.iter"), call=require("./$.iter-call");$def($def.S + $def.F * !require("./$.iter-detect")(function(iter){Array.from(iter);}), "Array", {from:function from(arrayLike){var O=Object($.assertDefined(arrayLike)), mapfn=arguments[1], mapping=mapfn !== undefined, f=mapping?ctx(mapfn, arguments[2], 2):undefined, index=0, length, result, step, iterator;if($iter.is(O)){iterator = $iter.get(O);result = new (typeof this == "function"?this:Array)();for(; !(step = iterator.next()).done; index++) {result[index] = mapping?call(iterator, f, [step.value, index], true):step.value;}}else {result = new (typeof this == "function"?this:Array)(length = $.toLength(O.length));for(; length > index; index++) {result[index] = mapping?f(O[index], index):O[index];}}result.length = index;return result;}});}, {"./$":22, "./$.ctx":12, "./$.def":13, "./$.iter":21, "./$.iter-call":18, "./$.iter-detect":20}], 40:[function(require, module, exports){var $=require("./$"), setUnscope=require("./$.unscope"), ITER=require("./$.uid").safe("iter"), $iter=require("./$.iter"), step=$iter.step, Iterators=$iter.Iterators;require("./$.iter-define")(Array, "Array", function(iterated, kind){$.set(this, ITER, {o:$.toObject(iterated), i:0, k:kind});}, function(){var iter=this[ITER], O=iter.o, kind=iter.k, index=iter.i++;if(!O || index >= O.length){iter.o = undefined;return step(1);}if(kind == "keys")return step(0, index);if(kind == "values")return step(0, O[index]);return step(0, [index, O[index]]);}, "values");Iterators.Arguments = Iterators.Array;setUnscope("keys");setUnscope("values");setUnscope("entries");}, {"./$":22, "./$.iter":21, "./$.iter-define":19, "./$.uid":31, "./$.unscope":32}], 41:[function(require, module, exports){var $def=require("./$.def");$def($def.S, "Array", {of:function of(){var index=0, length=arguments.length, result=new (typeof this == "function"?this:Array)(length);while(length > index) result[index] = arguments[index++];result.length = length;return result;}});}, {"./$.def":13}], 42:[function(require, module, exports){require("./$.species")(Array);}, {"./$.species":28}], 43:[function(require, module, exports){"use strict";var $=require("./$"), NAME="name", setDesc=$.setDesc, FunctionProto=Function.prototype;NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {configurable:true, get:function get(){var match=String(this).match(/^\s*function ([^ (]*)/), name=match?match[1]:"";$.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));return name;}, set:function set(value){$.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));}});}, {"./$":22}], 44:[function(require, module, exports){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Map", {get:function get(key){var entry=strong.getEntry(this, key);return entry && entry.v;}, set:function set(key, value){return strong.def(this, key === 0?0:key, value);}}, strong, true);}, {"./$.collection":11, "./$.collection-strong":8}], 45:[function(require, module, exports){var Infinity=1 / 0, $def=require("./$.def"), E=Math.E, pow=Math.pow, abs=Math.abs, exp=Math.exp, log=Math.log, sqrt=Math.sqrt, ceil=Math.ceil, floor=Math.floor, EPSILON=pow(2, -52), EPSILON32=pow(2, -23), MAX32=pow(2, 127) * (2 - EPSILON32), MIN32=pow(2, -126);function roundTiesToEven(n){return n + 1 / EPSILON - 1 / EPSILON;}function sign(x){return (x = +x) == 0 || x != x?x:x < 0?-1:1;}function asinh(x){return !isFinite(x = +x) || x == 0?x:x < 0?-asinh(-x):log(x + sqrt(x * x + 1));}function expm1(x){return (x = +x) == 0?x:x > -0.000001 && x < 0.000001?x + x * x / 2:exp(x) - 1;}$def($def.S, "Math", {acosh:function acosh(x){return (x = +x) < 1?NaN:isFinite(x)?log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1:x;}, asinh:asinh, atanh:function atanh(x){return (x = +x) == 0?x:log((1 + x) / (1 - x)) / 2;}, cbrt:function cbrt(x){return sign(x = +x) * pow(abs(x), 1 / 3);}, clz32:function clz32(x){return (x >>>= 0)?31 - floor(log(x + 0.5) * Math.LOG2E):32;}, cosh:function cosh(x){return (exp(x = +x) + exp(-x)) / 2;}, expm1:expm1, fround:function fround(x){var $abs=abs(x), $sign=sign(x), a, result;if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;a = (1 + EPSILON32 / EPSILON) * $abs;result = a - (a - $abs);if(result > MAX32 || result != result)return $sign * Infinity;return $sign * result;}, hypot:function hypot(value1, value2){var sum=0, len1=arguments.length, len2=len1, args=Array(len1), larg=-Infinity, arg;while(len1--) {arg = args[len1] = +arguments[len1];if(arg == Infinity || arg == -Infinity)return Infinity;if(arg > larg)larg = arg;}larg = arg || 1;while(len2--) sum += pow(args[len2] / larg, 2);return larg * sqrt(sum);}, imul:function imul(x, y){var UInt16=65535, xn=+x, yn=+y, xl=UInt16 & xn, yl=UInt16 & yn;return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);}, log1p:function log1p(x){return (x = +x) > -1e-8 && x < 1e-8?x - x * x / 2:log(1 + x);}, log10:function log10(x){return log(x) / Math.LN10;}, log2:function log2(x){return log(x) / Math.LN2;}, sign:sign, sinh:function sinh(x){return abs(x = +x) < 1?(expm1(x) - expm1(-x)) / 2:(exp(x - 1) - exp(-x - 1)) * (E / 2);}, tanh:function tanh(x){var a=expm1(x = +x), b=expm1(-x);return a == Infinity?1:b == Infinity?-1:(a - b) / (exp(x) + exp(-x));}, trunc:function trunc(it){return (it > 0?floor:ceil)(it);}});}, {"./$.def":13}], 46:[function(require, module, exports){"use strict";var $=require("./$"), isObject=$.isObject, isFunction=$.isFunction, NUMBER="Number", Number=$.g[NUMBER], Base=Number, proto=Number.prototype;function toPrimitive(it){var fn, val;if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;throw TypeError("Can't convert object to number");}function toNumber(it){if(isObject(it))it = toPrimitive(it);if(typeof it == "string" && it.length > 2 && it.charCodeAt(0) == 48){var binary=false;switch(it.charCodeAt(1)){case 66:case 98:binary = true;case 79:case 111:return parseInt(it.slice(2), binary?2:8);}}return +it;}if($.FW && !(Number("0o1") && Number("0b1"))){Number = function Number(it){return this instanceof Number?new Base(toNumber(it)):toNumber(it);};$.each.call($.DESC?$.getNames(Base):("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY," + "EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER," + "MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger").split(","), function(key){if($.has(Base, key) && !$.has(Number, key)){$.setDesc(Number, key, $.getDesc(Base, key));}});Number.prototype = proto;proto.constructor = Number;$.hide($.g, NUMBER, Number);}}, {"./$":22}], 47:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), abs=Math.abs, floor=Math.floor, _isFinite=$.g.isFinite, MAX_SAFE_INTEGER=9007199254740991;function isInteger(it){return !$.isObject(it) && _isFinite(it) && floor(it) === it;}$def($def.S, "Number", {EPSILON:Math.pow(2, -52), isFinite:function isFinite(it){return typeof it == "number" && _isFinite(it);}, isInteger:isInteger, isNaN:function isNaN(number){return number != number;}, isSafeInteger:function isSafeInteger(number){return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;}, MAX_SAFE_INTEGER:MAX_SAFE_INTEGER, MIN_SAFE_INTEGER:-MAX_SAFE_INTEGER, parseFloat:parseFloat, parseInt:parseInt});}, {"./$":22, "./$.def":13}], 48:[function(require, module, exports){var $def=require("./$.def");$def($def.S, "Object", {assign:require("./$.assign")});}, {"./$.assign":6, "./$.def":13}], 49:[function(require, module, exports){var $def=require("./$.def");$def($def.S, "Object", {is:function is(x, y){return x === y?x !== 0 || 1 / x === 1 / y:x != x && y != y;}});}, {"./$.def":13}], 50:[function(require, module, exports){var $def=require("./$.def");$def($def.S, "Object", {setPrototypeOf:require("./$.set-proto").set});}, {"./$.def":13, "./$.set-proto":27}], 51:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), isObject=$.isObject, toObject=$.toObject;function wrapObjectMethod(METHOD, MODE){var fn=($.core.Object || {})[METHOD] || Object[METHOD], f=0, o={};o[METHOD] = MODE == 1?function(it){return isObject(it)?fn(it):it;}:MODE == 2?function(it){return isObject(it)?fn(it):true;}:MODE == 3?function(it){return isObject(it)?fn(it):false;}:MODE == 4?function getOwnPropertyDescriptor(it, key){return fn(toObject(it), key);}:MODE == 5?function getPrototypeOf(it){return fn(Object($.assertDefined(it)));}:function(it){return fn(toObject(it));};try{fn("z");}catch(e) {f = 1;}$def($def.S + $def.F * f, "Object", o);}wrapObjectMethod("freeze", 1);wrapObjectMethod("seal", 1);wrapObjectMethod("preventExtensions", 1);wrapObjectMethod("isFrozen", 2);wrapObjectMethod("isSealed", 2);wrapObjectMethod("isExtensible", 3);wrapObjectMethod("getOwnPropertyDescriptor", 4);wrapObjectMethod("getPrototypeOf", 5);wrapObjectMethod("keys");wrapObjectMethod("getOwnPropertyNames");}, {"./$":22, "./$.def":13}], 52:[function(require, module, exports){"use strict";var $=require("./$"), cof=require("./$.cof"), tmp={};tmp[require("./$.wks")("toStringTag")] = "z";if($.FW && cof(tmp) != "z")$.hide(Object.prototype, "toString", function toString(){return "[object " + cof.classof(this) + "]";});}, {"./$":22, "./$.cof":7, "./$.wks":33}], 53:[function(require, module, exports){"use strict";var $=require("./$"), ctx=require("./$.ctx"), cof=require("./$.cof"), $def=require("./$.def"), assert=require("./$.assert"), forOf=require("./$.for-of"), setProto=require("./$.set-proto").set, species=require("./$.species"), SPECIES=require("./$.wks")("species"), RECORD=require("./$.uid").safe("record"), PROMISE="Promise", global=$.g, process=global.process, asap=process && process.nextTick || require("./$.task").set, P=global[PROMISE], isFunction=$.isFunction, isObject=$.isObject, assertFunction=assert.fn, assertObject=assert.obj, test;var useNative=isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test;function P2(x){var self=new P(x);setProto(self, P2.prototype);return self;}if(useNative){try{setProto(P2, P);P2.prototype = $.create(P.prototype, {constructor:{value:P2}});if(!(P2.resolve(5).then(function(){}) instanceof P2)){useNative = false;}}catch(e) {useNative = false;}}function getConstructor(C){var S=assertObject(C)[SPECIES];return S != undefined?S:C;}function isThenable(it){var then;if(isObject(it))then = it.then;return isFunction(then)?then:false;}function notify(record){var chain=record.c;if(chain.length)asap(function(){var value=record.v, ok=record.s == 1, i=0;while(chain.length > i) !(function(react){var cb=ok?react.ok:react.fail, ret, then;try{if(cb){if(!ok)record.h = true;ret = cb === true?value:cb(value);if(ret === react.P){react.rej(TypeError("Promise-chain cycle"));}else if(then = isThenable(ret)){then.call(ret, react.res, react.rej);}else react.res(ret);}else react.rej(value);}catch(err) {react.rej(err);}})(chain[i++]);chain.length = 0;});}function isUnhandled(promise){var record=promise[RECORD], chain=record.a, i=0, react;if(record.h)return false;while(chain.length > i) {react = chain[i++];if(react.fail || !isUnhandled(react.P))return false;}return true;}function $reject(value){var record=this, promise;if(record.d)return;record.d = true;record = record.r || record;record.v = value;record.s = 2;asap(function(){setTimeout(function(){if(isUnhandled(promise = record.p)){if(cof(process) == "process"){process.emit("unhandledRejection", value, promise);}else if(global.console && isFunction(console.error)){console.error("Unhandled promise rejection", value);}}}, 1);});notify(record);}function $resolve(value){var record=this, then, wrapper;if(record.d)return;record.d = true;record = record.r || record;try{if(then = isThenable(value)){wrapper = {r:record, d:false};then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));}else {record.v = value;record.s = 1;notify(record);}}catch(err) {$reject.call(wrapper || {r:record, d:false}, err);}}if(!useNative){P = function Promise(executor){assertFunction(executor);var record={p:assert.inst(this, P, PROMISE), c:[], a:[], s:0, d:false, v:undefined, h:false};$.hide(this, RECORD, record);try{executor(ctx($resolve, record, 1), ctx($reject, record, 1));}catch(err) {$reject.call(record, err);}};$.mix(P.prototype, {then:function then(onFulfilled, onRejected){var S=assertObject(assertObject(this).constructor)[SPECIES];var react={ok:isFunction(onFulfilled)?onFulfilled:true, fail:isFunction(onRejected)?onRejected:false};var promise=react.P = new (S != undefined?S:P)(function(res, rej){react.res = assertFunction(res);react.rej = assertFunction(rej);});var record=this[RECORD];record.a.push(react);record.c.push(react);record.s && notify(record);return promise;}, "catch":function _catch(onRejected){return this.then(undefined, onRejected);}});}$def($def.G + $def.W + $def.F * !useNative, {Promise:P});cof.set(P, PROMISE);species(P);species($.core[PROMISE]);$def($def.S + $def.F * !useNative, PROMISE, {reject:function reject(r){return new (getConstructor(this))(function(res, rej){rej(r);});}, resolve:function resolve(x){return isObject(x) && RECORD in x && $.getProto(x) === this.prototype?x:new (getConstructor(this))(function(res){res(x);});}});$def($def.S + $def.F * !(useNative && require("./$.iter-detect")(function(iter){P.all(iter)["catch"](function(){});})), PROMISE, {all:function all(iterable){var C=getConstructor(this), values=[];return new C(function(res, rej){forOf(iterable, false, values.push, values);var remaining=values.length, results=Array(remaining);if(remaining)$.each.call(values, function(promise, index){C.resolve(promise).then(function(value){results[index] = value;--remaining || res(results);}, rej);});else res(results);});}, race:function race(iterable){var C=getConstructor(this);return new C(function(res, rej){forOf(iterable, false, function(promise){C.resolve(promise).then(res, rej);});});}});}, {"./$":22, "./$.assert":5, "./$.cof":7, "./$.ctx":12, "./$.def":13, "./$.for-of":15, "./$.iter-detect":20, "./$.set-proto":27, "./$.species":28, "./$.task":30, "./$.uid":31, "./$.wks":33}], 54:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), setProto=require("./$.set-proto"), $iter=require("./$.iter"), ITER=require("./$.uid").safe("iter"), step=$iter.step, assert=require("./$.assert"), isObject=$.isObject, getDesc=$.getDesc, setDesc=$.setDesc, getProto=$.getProto, apply=Function.apply, assertObject=assert.obj, _isExtensible=Object.isExtensible || $.it;function Enumerate(iterated){$.set(this, ITER, {o:iterated, k:undefined, i:0});}$iter.create(Enumerate, "Object", function(){var iter=this[ITER], keys=iter.k, key;if(keys == undefined){iter.k = keys = [];for(key in iter.o) keys.push(key);}do {if(iter.i >= keys.length)return step(1);}while(!((key = keys[iter.i++]) in iter.o));return step(0, key);});function wrap(fn){return function(it){assertObject(it);try{fn.apply(undefined, arguments);return true;}catch(e) {return false;}};}function get(_x, _x2){var _arguments=arguments;var _again=true;_function: while(_again) {var target=_x, propertyKey=_x2;receiver = desc = proto = undefined;_again = false;var receiver=_arguments.length < 3?target:_arguments[2], desc=getDesc(assertObject(target), propertyKey), proto;if(desc)return $.has(desc, "value")?desc.value:desc.get === undefined?undefined:desc.get.call(receiver);if(isObject(proto = getProto(target))){_arguments = [_x = proto, _x2 = propertyKey, receiver];_again = true;continue _function;}else {return undefined;}}}function set(_x3, _x4, _x5){var _arguments2=arguments;var _again2=true;_function2: while(_again2) {var target=_x3, propertyKey=_x4, V=_x5;receiver = ownDesc = existingDescriptor = proto = undefined;_again2 = false;var receiver=_arguments2.length < 4?target:_arguments2[3], ownDesc=getDesc(assertObject(target), propertyKey), existingDescriptor, proto;if(!ownDesc){if(isObject(proto = getProto(target))){_arguments2 = [_x3 = proto, _x4 = propertyKey, _x5 = V, receiver];_again2 = true;continue _function2;}ownDesc = $.desc(0);}if($.has(ownDesc, "value")){if(ownDesc.writable === false || !isObject(receiver))return false;existingDescriptor = getDesc(receiver, propertyKey) || $.desc(0);existingDescriptor.value = V;setDesc(receiver, propertyKey, existingDescriptor);return true;}return ownDesc.set === undefined?false:(ownDesc.set.call(receiver, V), true);}}var reflect={apply:require("./$.ctx")(Function.call, apply, 3), construct:function construct(target, argumentsList){var proto=assert.fn(arguments.length < 3?target:arguments[2]).prototype, instance=$.create(isObject(proto)?proto:Object.prototype), result=apply.call(target, instance, argumentsList);return isObject(result)?result:instance;}, defineProperty:wrap(setDesc), deleteProperty:function deleteProperty(target, propertyKey){var desc=getDesc(assertObject(target), propertyKey);return desc && !desc.configurable?false:delete target[propertyKey];}, enumerate:function enumerate(target){return new Enumerate(assertObject(target));}, get:get, getOwnPropertyDescriptor:function getOwnPropertyDescriptor(target, propertyKey){return getDesc(assertObject(target), propertyKey);}, getPrototypeOf:function getPrototypeOf(target){return getProto(assertObject(target));}, has:function has(target, propertyKey){return propertyKey in target;}, isExtensible:function isExtensible(target){return !!_isExtensible(assertObject(target));}, ownKeys:require("./$.own-keys"), preventExtensions:wrap(Object.preventExtensions || $.it), set:set};if(setProto)reflect.setPrototypeOf = function setPrototypeOf(target, proto){setProto.check(target, proto);try{setProto.set(target, proto);return true;}catch(e) {return false;}};$def($def.G, {Reflect:{}});$def($def.S, "Reflect", reflect);}, {"./$":22, "./$.assert":5, "./$.ctx":12, "./$.def":13, "./$.iter":21, "./$.own-keys":24, "./$.set-proto":27, "./$.uid":31}], 55:[function(require, module, exports){var $=require("./$"), cof=require("./$.cof"), RegExp=$.g.RegExp, Base=RegExp, proto=RegExp.prototype;function regExpBroken(){try{var a=/a/g;if(a === new RegExp(a)){return true;}return RegExp(/a/g, "i") != "/a/i";}catch(e) {return true;}}if($.FW && $.DESC){if(regExpBroken()){RegExp = function RegExp(pattern, flags){return new Base(cof(pattern) == "RegExp"?pattern.source:pattern, flags === undefined?pattern.flags:flags);};$.each.call($.getNames(Base), function(key){key in RegExp || $.setDesc(RegExp, key, {configurable:true, get:function get(){return Base[key];}, set:function set(it){Base[key] = it;}});});proto.constructor = RegExp;RegExp.prototype = proto;$.hide($.g, "RegExp", RegExp);}if(/./g.flags != "g")$.setDesc(proto, "flags", {configurable:true, get:require("./$.replacer")(/^.*\/(\w*)$/, "$1")});}require("./$.species")(RegExp);}, {"./$":22, "./$.cof":7, "./$.replacer":26, "./$.species":28}], 56:[function(require, module, exports){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Set", {add:function add(value){return strong.def(this, value = value === 0?0:value, value);}}, strong);}, {"./$.collection":11, "./$.collection-strong":8}], 57:[function(require, module, exports){var $def=require("./$.def");$def($def.P, "String", {codePointAt:require("./$.string-at")(false)});}, {"./$.def":13, "./$.string-at":29}], 58:[function(require, module, exports){"use strict";var $=require("./$"), cof=require("./$.cof"), $def=require("./$.def"), toLength=$.toLength;$def($def.P, "String", {endsWith:function endsWith(searchString){if(cof(searchString) == "RegExp")throw TypeError();var that=String($.assertDefined(this)), endPosition=arguments[1], len=toLength(that.length), end=endPosition === undefined?len:Math.min(toLength(endPosition), len);searchString += "";return that.slice(end - searchString.length, end) === searchString;}});}, {"./$":22, "./$.cof":7, "./$.def":13}], 59:[function(require, module, exports){var $def=require("./$.def"), toIndex=require("./$").toIndex, fromCharCode=String.fromCharCode;$def($def.S, "String", {fromCodePoint:function fromCodePoint(x){var res=[], len=arguments.length, i=0, code;while(len > i) {code = +arguments[i++];if(toIndex(code, 1114111) !== code)throw RangeError(code + " is not a valid code point");res.push(code < 65536?fromCharCode(code):fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));}return res.join("");}});}, {"./$":22, "./$.def":13}], 60:[function(require, module, exports){"use strict";var $=require("./$"), cof=require("./$.cof"), $def=require("./$.def");$def($def.P, "String", {includes:function includes(searchString){if(cof(searchString) == "RegExp")throw TypeError();return !! ~String($.assertDefined(this)).indexOf(searchString, arguments[1]);}});}, {"./$":22, "./$.cof":7, "./$.def":13}], 61:[function(require, module, exports){var set=require("./$").set, at=require("./$.string-at")(true), ITER=require("./$.uid").safe("iter"), $iter=require("./$.iter"), step=$iter.step;require("./$.iter-define")(String, "String", function(iterated){set(this, ITER, {o:String(iterated), i:0});}, function(){var iter=this[ITER], O=iter.o, index=iter.i, point;if(index >= O.length)return step(1);point = at.call(O, index);iter.i += point.length;return step(0, point);});}, {"./$":22, "./$.iter":21, "./$.iter-define":19, "./$.string-at":29, "./$.uid":31}], 62:[function(require, module, exports){var $=require("./$"), $def=require("./$.def");$def($def.S, "String", {raw:function raw(callSite){var tpl=$.toObject(callSite.raw), len=$.toLength(tpl.length), sln=arguments.length, res=[], i=0;while(len > i) {res.push(String(tpl[i++]));if(i < sln)res.push(String(arguments[i]));}return res.join("");}});}, {"./$":22, "./$.def":13}], 63:[function(require, module, exports){"use strict";var $=require("./$"), $def=require("./$.def");$def($def.P, "String", {repeat:function repeat(count){var str=String($.assertDefined(this)), res="", n=$.toInteger(count);if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");for(; n > 0; (n >>>= 1) && (str += str)) if(n & 1)res += str;return res;}});}, {"./$":22, "./$.def":13}], 64:[function(require, module, exports){"use strict";var $=require("./$"), cof=require("./$.cof"), $def=require("./$.def");$def($def.P, "String", {startsWith:function startsWith(searchString){if(cof(searchString) == "RegExp")throw TypeError();var that=String($.assertDefined(this)), index=$.toLength(Math.min(arguments[1], that.length));searchString += "";return that.slice(index, index + searchString.length) === searchString;}});}, {"./$":22, "./$.cof":7, "./$.def":13}], 65:[function(require, module, exports){"use strict";var $=require("./$"), setTag=require("./$.cof").set, uid=require("./$.uid"), $def=require("./$.def"), keyOf=require("./$.keyof"), enumKeys=require("./$.enum-keys"), assertObject=require("./$.assert").obj, has=$.has, $create=$.create, getDesc=$.getDesc, setDesc=$.setDesc, desc=$.desc, getNames=$.getNames, toObject=$.toObject, Symbol=$.g.Symbol, setter=false, TAG=uid("tag"), HIDDEN=uid("hidden"), SymbolRegistry={}, AllSymbols={}, useNative=$.isFunction(Symbol);function wrap(tag){var sym=AllSymbols[tag] = $.set($create(Symbol.prototype), TAG, tag);$.DESC && setter && setDesc(Object.prototype, tag, {configurable:true, set:function set(value){if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;setDesc(this, tag, desc(1, value));}});return sym;}function defineProperty(it, key, D){if(D && has(AllSymbols, key)){if(!D.enumerable){if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));it[HIDDEN][key] = true;}else {if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;D.enumerable = false;}}return setDesc(it, key, D);}function defineProperties(it, P){assertObject(it);var keys=enumKeys(P = toObject(P)), i=0, l=keys.length, key;while(l > i) defineProperty(it, key = keys[i++], P[key]);return it;}function create(it, P){return P === undefined?$create(it):defineProperties($create(it), P);}function getOwnPropertyDescriptor(it, key){var D=getDesc(it = toObject(it), key);if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;return D;}function getOwnPropertyNames(it){var names=getNames(toObject(it)), result=[], i=0, key;while(names.length > i) if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);return result;}function getOwnPropertySymbols(it){var names=getNames(toObject(it)), result=[], i=0, key;while(names.length > i) if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);return result;}if(!useNative){Symbol = function Symbol(description){if(this instanceof Symbol)throw TypeError("Symbol is not a constructor");return wrap(uid(description));};$.hide(Symbol.prototype, "toString", function(){return this[TAG];});$.create = create;$.setDesc = defineProperty;$.getDesc = getOwnPropertyDescriptor;$.setDescs = defineProperties;$.getNames = getOwnPropertyNames;$.getSymbols = getOwnPropertySymbols;}var symbolStatics={"for":function _for(key){return has(SymbolRegistry, key += "")?SymbolRegistry[key]:SymbolRegistry[key] = Symbol(key);}, keyFor:function keyFor(key){return keyOf(SymbolRegistry, key);}, useSetter:function useSetter(){setter = true;}, useSimple:function useSimple(){setter = false;}};$.each.call(("hasInstance,isConcatSpreadable,iterator,match,replace,search," + "species,split,toPrimitive,toStringTag,unscopables").split(","), function(it){var sym=require("./$.wks")(it);symbolStatics[it] = useNative?sym:wrap(sym);});setter = true;$def($def.G + $def.W, {Symbol:Symbol});$def($def.S, "Symbol", symbolStatics);$def($def.S + $def.F * !useNative, "Object", {create:create, defineProperty:defineProperty, defineProperties:defineProperties, getOwnPropertyDescriptor:getOwnPropertyDescriptor, getOwnPropertyNames:getOwnPropertyNames, getOwnPropertySymbols:getOwnPropertySymbols});setTag(Symbol, "Symbol");setTag(Math, "Math", true);setTag($.g.JSON, "JSON", true);}, {"./$":22, "./$.assert":5, "./$.cof":7, "./$.def":13, "./$.enum-keys":14, "./$.keyof":23, "./$.uid":31, "./$.wks":33}], 66:[function(require, module, exports){"use strict";var $=require("./$"), weak=require("./$.collection-weak"), leakStore=weak.leakStore, ID=weak.ID, WEAK=weak.WEAK, has=$.has, isObject=$.isObject, isFrozen=Object.isFrozen || $.core.Object.isFrozen, tmp={};var WeakMap=require("./$.collection")("WeakMap", {get:function get(key){if(isObject(key)){if(isFrozen(key))return leakStore(this).get(key);if(has(key, WEAK))return key[WEAK][this[ID]];}}, set:function set(key, value){return weak.def(this, key, value);}}, weak, true, true);if($.FW && new WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){$.each.call(["delete", "has", "get", "set"], function(key){var method=WeakMap.prototype[key];WeakMap.prototype[key] = function(a, b){if(isObject(a) && isFrozen(a)){var result=leakStore(this)[key](a, b);return key == "set"?this:result;}return method.call(this, a, b);};});}}, {"./$":22, "./$.collection":11, "./$.collection-weak":10}], 67:[function(require, module, exports){"use strict";var weak=require("./$.collection-weak");require("./$.collection")("WeakSet", {add:function add(value){return weak.def(this, value, true);}}, weak, false, true);}, {"./$.collection":11, "./$.collection-weak":10}], 68:[function(require, module, exports){var $def=require("./$.def");$def($def.P, "Array", {includes:require("./$.array-includes")(true)});require("./$.unscope")("includes");}, {"./$.array-includes":3, "./$.def":13, "./$.unscope":32}], 69:[function(require, module, exports){require("./$.collection-to-json")("Map");}, {"./$.collection-to-json":9}], 70:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), ownKeys=require("./$.own-keys");$def($def.S, "Object", {getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=$.toObject(object), result={};$.each.call(ownKeys(O), function(key){$.setDesc(result, key, $.desc(0, $.getDesc(O, key)));});return result;}});}, {"./$":22, "./$.def":13, "./$.own-keys":24}], 71:[function(require, module, exports){var $=require("./$"), $def=require("./$.def");function createObjectToArray(isEntries){return function(object){var O=$.toObject(object), keys=$.getKeys(O), length=keys.length, i=0, result=Array(length), key;if(isEntries)while(length > i) result[i] = [key = keys[i++], O[key]];else while(length > i) result[i] = O[keys[i++]];return result;};}$def($def.S, "Object", {values:createObjectToArray(false), entries:createObjectToArray(true)});}, {"./$":22, "./$.def":13}], 72:[function(require, module, exports){var $def=require("./$.def");$def($def.S, "RegExp", {escape:require("./$.replacer")(/([\\\-[\]{}()*+?.,^$|])/g, "\\$1", true)});}, {"./$.def":13, "./$.replacer":26}], 73:[function(require, module, exports){require("./$.collection-to-json")("Set");}, {"./$.collection-to-json":9}], 74:[function(require, module, exports){var $def=require("./$.def");$def($def.P, "String", {at:require("./$.string-at")(true)});}, {"./$.def":13, "./$.string-at":29}], 75:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), $Array=$.core.Array || Array, statics={};function setStatics(keys, length){$.each.call(keys.split(","), function(key){if(length == undefined && key in $Array)statics[key] = $Array[key];else if(key in [])statics[key] = require("./$.ctx")(Function.call, [][key], length);});}setStatics("pop,reverse,shift,keys,values,entries", 1);setStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3);setStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf," + "reduce,reduceRight,copyWithin,fill,turn");$def($def.S, "Array", statics);}, {"./$":22, "./$.ctx":12, "./$.def":13}], 76:[function(require, module, exports){require("./es6.array.iterator");var $=require("./$"), Iterators=require("./$.iter").Iterators, ITERATOR=require("./$.wks")("iterator"), ArrayValues=Iterators.Array, NodeList=$.g.NodeList;if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){$.hide(NodeList.prototype, ITERATOR, ArrayValues);}Iterators.NodeList = ArrayValues;}, {"./$":22, "./$.iter":21, "./$.wks":33, "./es6.array.iterator":40}], 77:[function(require, module, exports){var $def=require("./$.def"), $task=require("./$.task");$def($def.G + $def.B, {setImmediate:$task.set, clearImmediate:$task.clear});}, {"./$.def":13, "./$.task":30}], 78:[function(require, module, exports){var $=require("./$"), $def=require("./$.def"), invoke=require("./$.invoke"), partial=require("./$.partial"), navigator=$.g.navigator, MSIE=!!navigator && /MSIE .\./.test(navigator.userAgent);function wrap(set){return MSIE?function(fn, time){return set(invoke(partial, [].slice.call(arguments, 2), $.isFunction(fn)?fn:Function(fn)), time);}:set;}$def($def.G + $def.B + $def.F * MSIE, {setTimeout:wrap($.g.setTimeout), setInterval:wrap($.g.setInterval)});}, {"./$":22, "./$.def":13, "./$.invoke":17, "./$.partial":25}], 79:[function(require, module, exports){require("./modules/es5");require("./modules/es6.symbol");require("./modules/es6.object.assign");require("./modules/es6.object.is");require("./modules/es6.object.set-prototype-of");require("./modules/es6.object.to-string");require("./modules/es6.object.statics-accept-primitives");require("./modules/es6.function.name");require("./modules/es6.number.constructor");require("./modules/es6.number.statics");require("./modules/es6.math");require("./modules/es6.string.from-code-point");require("./modules/es6.string.raw");require("./modules/es6.string.iterator");require("./modules/es6.string.code-point-at");require("./modules/es6.string.ends-with");require("./modules/es6.string.includes");require("./modules/es6.string.repeat");require("./modules/es6.string.starts-with");require("./modules/es6.array.from");require("./modules/es6.array.of");require("./modules/es6.array.iterator");require("./modules/es6.array.species");require("./modules/es6.array.copy-within");require("./modules/es6.array.fill");require("./modules/es6.array.find");require("./modules/es6.array.find-index");require("./modules/es6.regexp");require("./modules/es6.promise");require("./modules/es6.map");require("./modules/es6.set");require("./modules/es6.weak-map");require("./modules/es6.weak-set");require("./modules/es6.reflect");require("./modules/es7.array.includes");require("./modules/es7.string.at");require("./modules/es7.regexp.escape");require("./modules/es7.object.get-own-property-descriptors");require("./modules/es7.object.to-array");require("./modules/es7.map.to-json");require("./modules/es7.set.to-json");require("./modules/js.array.statics");require("./modules/web.timers");require("./modules/web.immediate");require("./modules/web.dom.iterable");module.exports = require("./modules/$").core;}, {"./modules/$":22, "./modules/es5":34, "./modules/es6.array.copy-within":35, "./modules/es6.array.fill":36, "./modules/es6.array.find":38, "./modules/es6.array.find-index":37, "./modules/es6.array.from":39, "./modules/es6.array.iterator":40, "./modules/es6.array.of":41, "./modules/es6.array.species":42, "./modules/es6.function.name":43, "./modules/es6.map":44, "./modules/es6.math":45, "./modules/es6.number.constructor":46, "./modules/es6.number.statics":47, "./modules/es6.object.assign":48, "./modules/es6.object.is":49, "./modules/es6.object.set-prototype-of":50, "./modules/es6.object.statics-accept-primitives":51, "./modules/es6.object.to-string":52, "./modules/es6.promise":53, "./modules/es6.reflect":54, "./modules/es6.regexp":55, "./modules/es6.set":56, "./modules/es6.string.code-point-at":57, "./modules/es6.string.ends-with":58, "./modules/es6.string.from-code-point":59, "./modules/es6.string.includes":60, "./modules/es6.string.iterator":61, "./modules/es6.string.raw":62, "./modules/es6.string.repeat":63, "./modules/es6.string.starts-with":64, "./modules/es6.symbol":65, "./modules/es6.weak-map":66, "./modules/es6.weak-set":67, "./modules/es7.array.includes":68, "./modules/es7.map.to-json":69, "./modules/es7.object.get-own-property-descriptors":70, "./modules/es7.object.to-array":71, "./modules/es7.regexp.escape":72, "./modules/es7.set.to-json":73, "./modules/es7.string.at":74, "./modules/js.array.statics":75, "./modules/web.dom.iterable":76, "./modules/web.immediate":77, "./modules/web.timers":78}], 80:[function(require, module, exports){(function(process, global){!(function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var iteratorSymbol=typeof Symbol === "function" && Symbol.iterator || "@@iterator";var inModule=typeof module === "object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports = runtime;}return;}runtime = global.regeneratorRuntime = inModule?module.exports:{};function wrap(innerFn, outerFn, self, tryLocsList){var generator=Object.create((outerFn || Generator).prototype);generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));return generator;}runtime.wrap = wrap;function tryCatch(fn, obj, arg){try{return {type:"normal", arg:fn.call(obj, arg)};}catch(err) {return {type:"throw", arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype = Generator.prototype;GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor = GeneratorFunction;GeneratorFunction.displayName = "GeneratorFunction";function defineIteratorMethods(prototype){["next", "throw", "return"].forEach(function(method){prototype[method] = function(arg){return this._invoke(method, arg);};});}runtime.isGeneratorFunction = function(genFun){var ctor=typeof genFun === "function" && genFun.constructor;return ctor?ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction":false;};runtime.mark = function(genFun){genFun.__proto__ = GeneratorFunctionPrototype;genFun.prototype = Object.create(Gp);return genFun;};runtime.awrap = function(arg){return new AwaitArgument(arg);};function AwaitArgument(arg){this.arg = arg;}function AsyncIterator(generator){function invoke(method, arg){var result=generator[method](arg);var value=result.value;return value instanceof AwaitArgument?Promise.resolve(value.arg).then(invokeNext, invokeThrow):result;}if(typeof process === "object" && process.domain){invoke = process.domain.bind(invoke);}var invokeNext=invoke.bind(generator, "next");var invokeThrow=invoke.bind(generator, "throw");var invokeReturn=invoke.bind(generator, "return");var previousPromise;function enqueue(method, arg){var enqueueResult=previousPromise?previousPromise.then(function(){return invoke(method, arg);}):new Promise(function(resolve){resolve(invoke(method, arg));});previousPromise = enqueueResult["catch"](invokeReturn);return enqueueResult;}this._invoke = enqueue;}defineIteratorMethods(AsyncIterator.prototype);runtime.async = function(innerFn, outerFn, self, tryLocsList){var iter=new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn, self, context){var state=GenStateSuspendedStart;return function invoke(method, arg){if(state === GenStateExecuting){throw new Error("Generator is already running");}if(state === GenStateCompleted){return doneResult();}while(true) {var delegate=context.delegate;if(delegate){if(method === "return" || method === "throw" && delegate.iterator[method] === undefined){context.delegate = null;var returnMethod=delegate.iterator["return"];if(returnMethod){var record=tryCatch(returnMethod, delegate.iterator, arg);if(record.type === "throw"){method = "throw";arg = record.arg;continue;}}if(method === "return"){continue;}}var record=tryCatch(delegate.iterator[method], delegate.iterator, arg);if(record.type === "throw"){context.delegate = null;method = "throw";arg = record.arg;continue;}method = "next";arg = undefined;var info=record.arg;if(info.done){context[delegate.resultName] = info.value;context.next = delegate.nextLoc;}else {state = GenStateSuspendedYield;return info;}context.delegate = null;}if(method === "next"){if(state === GenStateSuspendedYield){context.sent = arg;}else {delete context.sent;}}else if(method === "throw"){if(state === GenStateSuspendedStart){state = GenStateCompleted;throw arg;}if(context.dispatchException(arg)){method = "next";arg = undefined;}}else if(method === "return"){context.abrupt("return", arg);}state = GenStateExecuting;var record=tryCatch(innerFn, self, context);if(record.type === "normal"){state = context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg, done:context.done};if(record.arg === ContinueSentinel){if(context.delegate && method === "next"){arg = undefined;}}else {return info;}}else if(record.type === "throw"){state = GenStateCompleted;method = "throw";arg = record.arg;}}};}defineIteratorMethods(Gp);Gp[iteratorSymbol] = function(){return this;};Gp.toString = function(){return "[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc = locs[1];}if(2 in locs){entry.finallyLoc = locs[2];entry.afterLoc = locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion || {};record.type = "normal";delete record.arg;entry.completion = record;}function Context(tryLocsList){this.tryEntries = [{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry, this);this.reset();}runtime.keys = function(object){var keys=[];for(var key in object) {keys.push(key);}keys.reverse();return function next(){while(keys.length) {var key=keys.pop();if(key in object){next.value = key;next.done = false;return next;}}next.done = true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next === "function"){return iterable;}if(!isNaN(iterable.length)){var i=-1, next=function next(){while(++i < iterable.length) {if(hasOwn.call(iterable, i)){next.value = iterable[i];next.done = false;return next;}}next.value = undefined;next.done = true;return next;};return next.next = next;}}return {next:doneResult};}runtime.values = values;function doneResult(){return {value:undefined, done:true};}Context.prototype = {constructor:Context, reset:function reset(){this.prev = 0;this.next = 0;this.sent = undefined;this.done = false;this.delegate = null;this.tryEntries.forEach(resetTryEntry);for(var tempIndex=0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {this[tempName] = null;}}, stop:function stop(){this.done = true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type === "throw"){throw rootRecord.arg;}return this.rval;}, dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc, caught){record.type = "throw";record.arg = exception;context.next = loc;return !!caught;}for(var i=this.tryEntries.length - 1; i >= 0; --i) {var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc === "root"){return handle("end");}if(entry.tryLoc <= this.prev){var hasCatch=hasOwn.call(entry, "catchLoc");var hasFinally=hasOwn.call(entry, "finallyLoc");if(hasCatch && hasFinally){if(this.prev < entry.catchLoc){return handle(entry.catchLoc, true);}else if(this.prev < entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev < entry.catchLoc){return handle(entry.catchLoc, true);}}else if(hasFinally){if(this.prev < entry.finallyLoc){return handle(entry.finallyLoc);}}else {throw new Error("try statement without catch or finally");}}}}, abrupt:function abrupt(type, arg){for(var i=this.tryEntries.length - 1; i >= 0; --i) {var entry=this.tryEntries[i];if(entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc){finallyEntry = null;}var record=finallyEntry?finallyEntry.completion:{};record.type = type;record.arg = arg;if(finallyEntry){this.next = finallyEntry.finallyLoc;}else {this.complete(record);}return ContinueSentinel;}, complete:function complete(record, afterLoc){if(record.type === "throw"){throw record.arg;}if(record.type === "break" || record.type === "continue"){this.next = record.arg;}else if(record.type === "return"){this.rval = record.arg;this.next = "end";}else if(record.type === "normal" && afterLoc){this.next = afterLoc;}}, finish:function finish(finallyLoc){for(var i=this.tryEntries.length - 1; i >= 0; --i) {var entry=this.tryEntries[i];if(entry.finallyLoc === finallyLoc){this.complete(entry.completion, entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}}, "catch":function _catch(tryLoc){for(var i=this.tryEntries.length - 1; i >= 0; --i) {var entry=this.tryEntries[i];if(entry.tryLoc === tryLoc){var record=entry.completion;if(record.type === "throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield:function delegateYield(iterable, resultName, nextLoc){this.delegate = {iterator:values(iterable), resultName:resultName, nextLoc:nextLoc};return ContinueSentinel;}};})(typeof global === "object"?global:typeof window === "object"?window:typeof self === "object"?self:this);}).call(this, require("_process"), typeof global !== "undefined"?global:typeof self !== "undefined"?self:typeof window !== "undefined"?window:{});}, {"_process":2}]}, {}, [1]);
/**
 * classList shim for IE 9
 * Don't convert over to ES6
 */
"use strict";

if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
  Object.defineProperty(HTMLElement.prototype, "classList", {
    get: function get() {
      var ret, self, update;
      update = function (fn) {
        return function (value) {
          var classes, index;
          classes = self.className.split(/\s+/);
          index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(" ");
        };
      };
      self = this;
      ret = {
        add: update(function (classes, index, value) {
          ~index || classes.push(value);
        }),
        remove: update(function (classes, index) {
          ~index && classes.splice(index, 1);
        }),
        toggle: update(function (classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function contains(value) {
          return !! ~self.className.split(/\s+/).indexOf(value);
        },
        item: function item(i) {
          return self.className.split(/\s+/)[i] || null;
        }
      };
      Object.defineProperty(ret, "length", {
        get: function get() {
          return self.className.split(/\s+/).length;
        }
      });
      return ret;
    }
  });
}

/**
 * Symbol.iterator polyfill
 */
if (NodeList.prototype[Symbol.iterator] === undefined) {
  NodeList.prototype[Symbol.iterator] = function () {
    var _this = this;

    var i = 0;
    return {
      next: function next() {
        return { done: i >= _this.length, value: _this.item(i++) };
      }
    };
  };
}
/**
 * ShareUtils
 * @class
 * @classdesc A nice set of utilities.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShareUtils = (function () {
  function ShareUtils() {
    _classCallCheck(this, ShareUtils);
  }

  _createClass(ShareUtils, [{
    key: "_hide",

    /**
     * @method _hide
     * @description Change element's display to 'none'
     * @private
     *
     * @param {DOMNode} el
     */
    value: function _hide(el) {
      el.style.display = "none";
    }
  }, {
    key: "_show",

    /**
     * @method _show
     * @description Change element's display to 'block'
     * @private
     *
     * @param {DOMNode} el
     */
    value: function _show(el) {
      el.style.display = "block";
    }
  }, {
    key: "_hasClass",

    /**
     * @method _hasClass
     * @description Wrapper to see if an element contains a class.
     * @private
     *
     * @param {DOMNode} el
     * @param {String}  className
     * @returns {Boolean}
     */
    value: function _hasClass(el, className) {
      return el.classList.contains(className);
    }
  }, {
    key: "_addClass",

    /**
     * @method addClass
     * @description Wrapper to add class to element.
     * @private
     *
     * @param {DOMNode} el
     * @param {String}  className
     */
    value: function _addClass(el, className) {
      el.classList.add(className);
    }
  }, {
    key: "_removeClass",

    /**
     * @method removeClass
     * @description Wrapper to remove class from element.
     * @private
     *
     * @param {DOMNode} el
     * @param {String}  className
     */
    value: function _removeClass(el, className) {
      el.classList.remove(className);
    }
  }, {
    key: "_isEncoded",

    /**
     * @method _isEncoded
     * @description Wrapper to check if the string is encoded.
     * @private
     *
     * @param {String}  str
     * @param {Boolean}
     */
    value: function _isEncoded(str) {
      this.str = str.toRFC3986();
      return decodeURIComponent(str) !== str;
    }
  }, {
    key: "_encode",

    /**
     * @method _encode
     * @description Wrapper to _encode a string if the string isn't already encoded.
     * @private
     *
     * @param {DOMNode} el
     * @param {String}  className
     */
    value: function _encode(str) {
      if (typeof str === "undefined" || str === null || this._isEncoded(str)) return str;else return str.toRFC3986();
    }
  }, {
    key: "popup",

    /**
     * @method popup
     * @description Create a window for specified network
     *
     * @param {String}  url
     * @param {Object}  params
     */
    value: function popup(url) {
      var _this = this;

      var params = arguments[1] === undefined ? {} : arguments[1];

      var popup = {
        width: 500,
        height: 350
      };

      popup.top = screen.height / 2 - popup.height / 2;
      popup.left = screen.width / 2 - popup.width / 2;

      var qs = (function () {
        var results = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(params)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var k = _step.value;

            var v = params[k];
            results.push("" + k + "=" + _this._encode(v));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return results.join("&");
      })();

      if (qs) qs = "?" + qs;

      // This does work even though it contains \n once converted.
      window.open(url + qs, "targetWindow", "\n        toolbar=no,\n        location=no,\n        status=no,\n        menubar=no,\n        scrollbars=yes,\n        resizable=yes,\n        left=" + popup.left + ",\n        top=" + popup.top + ",\n        width=" + popup.width + ",\n        height=" + popup.height + "\n      ");
    }
  }, {
    key: "_merge",

    /**
     * @method _merge
     * @description Combines two (or more) objects, giving the last one precedence
     * @author svlasov-gists
     * [Original Gist]{@link https://gist.github.com/svlasov-gists/2383751}
     *
     * @param {Object}  target
     * @param {Object}  source
     * @return {Object} target
     */
    value: (function (_merge2) {
      function _merge(_x, _x2) {
        return _merge2.apply(this, arguments);
      }

      _merge.toString = function () {
        return _merge2.toString();
      };

      return _merge;
    })(function (target, source) {
      if (typeof target !== "object") target = {};

      for (var property in source) {
        if (source.hasOwnProperty(property)) {
          var sourceProperty = source[property];

          if (typeof sourceProperty === "object") {
            target[property] = this._merge(target[property], sourceProperty);
            continue;
          }

          target[property] = sourceProperty;
        }
      }

      for (var a = 2, l = arguments.length; a < l; a++) {
        _merge(target, arguments[a]);
      }return target;
    })
  }]);

  return ShareUtils;
})();

/**
 * @method toRFC3986
 * @description Encodes the string in RFC3986
 * @memberof String
 *
 * @return {String}
 */
String.prototype.toRFC3986 = function () {
  var tmp = encodeURIComponent(this);
  tmp.replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
};

/**
 * @method capitalizeFirstLetter
 * @description Does exactly what the method name states
 * @memberof String
 *
 * @return {String}
 */
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
/**
 * Sharebutton
 * @class
 * @classdesc
 * @extends ShareUtils

 * @param {String} element
 * @param {Object} options
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ShareButton = (function (_ShareUtils) {
  function ShareButton(element, options) {
    _classCallCheck(this, ShareButton);

    _get(Object.getPrototypeOf(ShareButton.prototype), 'constructor', this).call(this);
    this.element = element;

    this.el = {
      head: document.getElementsByTagName('head')[0],
      body: document.getElementsByTagName('body')[0]
    };

    this.config = {
      enabledNetworks: 0,
      protocol: '//',
      url: window.location.href,
      caption: null,
      title: this._defaultTitle(),
      image: this._defaultImage(),
      description: this._defaultDescription(),

      ui: {
        flyout: 'top center',
        buttonText: 'Share',
        buttonFont: true,
        iconFont: true,
        css: true
      },

      networks: {
        googlePlus: {
          enabled: true,
          url: null
        },
        twitter: {
          enabled: true,
          url: null,
          description: null // Text
        },
        facebook: {
          enabled: true,
          loadSdk: true,
          url: null,
          appId: null,
          title: null,
          caption: null,
          description: null,
          image: null
        },
        pinterest: {
          enabled: true,
          url: null,
          image: null,
          description: null
        },
        email: {
          enabled: true,
          title: null, // Subject
          description: null // Body
        }
      }
    };

    this._setup(this.element, options);
  }

  _inherits(ShareButton, _ShareUtils);

  _createClass(ShareButton, [{
    key: 'open',

    /**
     * Public API
     */
    value: function open() {
      this._public('Open');
    }
  }, {
    key: 'close',
    value: function close() {
      this._public('Close');
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this._public('Toggle');
    }
  }, {
    key: '_public',
    value: function _public(action) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = document.querySelectorAll(this.element)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var instance = _step.value;

          var button = instance.getElementsByClassName('social')[0];
          this['event' + action](button);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_setup',

    /**
     * @method setup
     * @description Sets up Share Button
     * @private
     *
     * @param {String} element selector
     * @param {Object} opts
     */
    value: function _setup(element, opts) {
      var instances = document.querySelectorAll(element);

      this._merge(this.config, opts); // Combine configs
      this._detectNetworks(); // Set number of networks
      this._normalizeNetworkConfiguration(); //

      if (this.config.ui.iconFont) this._injectIcons(); // Inject Icon Fontset
      if (this.config.ui.buttonFont) this._injectFont(); // Inject Google's Lato Fontset (if enabled)

      // Inject Facebook JS SDK (if Facebook is enabled)
      if (this.config.networks.facebook.enabled && this.config.networks.facebook.loadSdk) this._injectFacebookSdk();

      // initialize instances
      var index = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = instances[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var instance = _step2.value;

          this._setupInstance(element, index++);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: '_setupInstance',

    /**
     * @method _setupInstance
     * @description Sets up each instance with config and styles
     * @private
     *
     * @param {DOMNode} element
     * @param {Integer} index
     */
    value: function _setupInstance(element, index) {
      var _this = this;

      // Get instance - (Note: Reload Element. gS/qSA doesn't support live NodeLists)
      var instance = document.querySelectorAll(element)[index];

      this._hide(instance); // hide instance

      // Add necessary classes to instance (Note: FF doesn't support adding multiple classes in a single call)
      this._addClass(instance, 'sharer-' + index);
      instance = document.querySelectorAll(element)[index]; // reload instance

      // Inject HTML and CSS
      this._injectHtml(instance);
      if (this.config.ui.css) this._injectStylesheet('dist/styles.min.css'); // URL HERE

      this._show(instance); // show instance

      var label = instance.getElementsByTagName('label')[0];
      var button = instance.getElementsByClassName('social')[0];
      var networks = instance.getElementsByTagName('li');

      this._addClass(button, 'networks-' + this.config.enabledNetworks);
      label.addEventListener('click', function () {
        return _this._eventToggle(button);
      });

      var _loop = function (k) {
        var network = networks[k];
        if (typeof network !== 'undefined') {
          network.addEventListener('click', function () {
            _this._eventNetwork(instance, network);
            _this._eventClose(button);
          });
        }
      };

      // Add listener to activate networks and close button
      for (var k in Object.keys(networks)) {
        _loop(k);
      }
    }
  }, {
    key: '_eventToggle',

    /**
     * @method _eventToggle
     * @description Toggles 'active' class on button
     * @private
     *
     * @param {DOMNode} button
     */
    value: function _eventToggle(button) {
      if (this._hasClass(button, 'active')) this._eventClose(button);else this._eventOpen(button);
    }
  }, {
    key: '_eventOpen',

    /**
     * @method _eventOpen
     * @description Add 'active' class & remove 'load' class on button
     * @private
     *
     * @param {DOMNode} button
     */
    value: function _eventOpen(button) {
      if (this._hasClass(button, 'load')) this._removeClass(button, 'load');

      this._addClass(button, 'active');
    }
  }, {
    key: '_eventClose',

    /**
     * @method _eventClose
     * @description Remove 'active' class on button
     * @private
     *
     * @param {DOMNode} button
     */
    value: function _eventClose(button) {
      this._removeClass(button, 'active');
    }
  }, {
    key: '_eventNetwork',

    /**
     * @method _eventNetwork
     * @description Add 'active' class & remove 'load' class on button
     * @private
     *
     * @param {DOMNode} instance
     * @param {String}  network
     */
    value: function _eventNetwork(instance, network) {
      var name = network.getAttribute('data-network');

      this._hook('before', name, instance);
      this['_network' + name.capitalizeFirstLetter()]();
      this._hook('after', name, instance);
    }
  }, {
    key: '_networkFacebook',

    /**
     * @method _networkFacebook
     * @description Create & display window
     * @private
     */
    value: function _networkFacebook() {
      if (this.config.networks.facebook.loadSdk) {
        if (!window.FB) return console.error('The Facebook JS SDK hasn\'t loaded yet.');

        return FB.ui({
          method: 'feed',
          name: this.config.networks.facebook.title,
          link: this.config.networks.facebook.url,
          picture: this.config.networks.facebook.image,
          caption: this.config.networks.facebook.caption,
          description: this.config.networks.facebook.description
        });
      } else return this.popup('https://www.facebook.com/sharer/sharer.php', {
        u: this.config.networks.facebook.url
      });
    }
  }, {
    key: '_networkTwitter',

    /**
     * @method _networkTwitter
     * @description Create & display window
     * @private
     */
    value: function _networkTwitter() {
      this.popup('https://twitter.com/intent/tweet', {
        text: this.config.networks.twitter.description,
        url: this.config.networks.twitter.url
      });
    }
  }, {
    key: '_networkGooglePlus',

    /**
     * @method _networkGooglePlus
     * @description Create & display window
     * @private
     */
    value: function _networkGooglePlus() {
      this.popup('https://plus.google.com/share', {
        url: this.config.networks.googlePlus.url
      });
    }
  }, {
    key: '_networkPinterest',

    /**
     * @method _networkPinterest
     * @description Create & display window
     * @private
     */
    value: function _networkPinterest() {
      this.popup('https://www.pinterest.com/pin/create/button', {
        url: this.config.networks.pinterest.url,
        media: this.config.networks.pinterest.image,
        description: this.config.networks.pinterest.description
      });
    }
  }, {
    key: '_networkEmail',

    /**
     * @method _networkEmail
     * @description Create & display window
     * @private
     */
    value: function _networkEmail() {
      this.popup('mailto:', {
        subject: this.config.networks.email.title,
        body: this.config.networks.email.description
      });
    }
  }, {
    key: '_injectIcons',

    /**
     * @method _injectIcons
     * @description Inject default icons
     * @private
     */
    value: function _injectIcons() {
      this._injectStylesheet('https://www.sharebutton.co/fonts/v2/entypo.min.css');
    }
  }, {
    key: '_injectFont',

    /**
     * @method _injectFont
     * @description Inject default font
     * @private
     */
    value: function _injectFont() {
      this._injectStylesheet('https://fonts.googleapis.com/css?family=Lato:900&text=#{@config.ui.buttonText}');
    }
  }, {
    key: '_injectStylesheet',

    /**
     * @method _injectStylesheet
     * @description Inject link to stylesheet
     * @private
     *
     * @param {String} url
     */
    value: function _injectStylesheet(url) {
      if (!this.el.head.querySelector('link[href=\'' + url + '\']')) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', url);
        this.el.head.appendChild(link);
      }
    }
  }, {
    key: '_injectHtml',

    /**
     * @method _injectHtml
     * @description Inject button structure
     * @private
     */
    value: function _injectHtml(instance) {
      instance.innerHTML = '<label class=\'entypo-export\'><span>' + this.config.ui.buttonText + '</span></label><div class=\'social load ' + this.config.ui.flyout + '\'><ul><li class=\'entypo-pinterest\' data-network=\'pinterest\'></li><li class=\'entypo-twitter\' data-network=\'twitter\'></li><li class=\'entypo-facebook\' data-network=\'facebook\'></li><li class=\'entypo-gplus\' data-network=\'googlePlus\'></li><li class=\'entypo-paper-plane\' data-network=\'email\'></li></ul></div>';
    }
  }, {
    key: '_injectFacebookSdk',

    /**
     * @method _injectFacebookSdk
     * @description Inject Facebook SDK
     * @private
     */
    value: function _injectFacebookSdk() {
      if (!window.FB && this.config.networks.facebook.appId && !this.el.body.querySelector('#fb-root')) {
        var script = document.createElement('script');
        script.text = 'window.fbAsyncInit=function(){FB.init({appId:\'' + this.config.networks.facebook.appId + '\',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src=\'//connect.facebook.net/en_US/all.js\';i.parentNode.insertBefore(r,i)})(document,\'script\',\'facebook-jssdk\');';

        var fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';

        this.el.body.appendChild(fbRoot);
        this.el.body.appendChild(script);
      }
    }
  }, {
    key: '_hook',

    /**
     * @method _hook
     * @description Hook helper function
     * @private
     *
     * @param {String}   type
     * @param {String}   network
     * @param {DOMNode}  instance
     */
    value: function _hook(type, network, instance) {
      var fn = this.config.networks[network][type];

      if (typeof fn === 'function') {
        var opts = fn.call(this.config.networks[network], instance);

        if (opts !== undefined) {
          opts = this._normalizeFilterConfigUpdates(opts);

          this.extend(this.config.networks[network], opts, true);
          this._normalizeNetworkConfiguration();
        }
      }
    }
  }, {
    key: '_defaultTitle',

    /**
     * @method _defaultTitle
     * @description Gets default title
     * @private
     *
     * @returns {String}
     */
    value: function _defaultTitle() {
      var content = undefined;
      if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) content.getAttribute('content');else if (content = document.querySelector('title')) return content.innerText;
    }
  }, {
    key: '_defaultImage',

    /**
     * @method _defaultImage
     * @description Gets default image
     * @private
     */
    value: function _defaultImage() {
      var content = undefined;
      if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) content.getAttribute('content');
    }
  }, {
    key: '_defaultDescription',

    /**
     * @method _defaultDescription
     * @description Gets default description
     * @private
     *
     * @returns {String}
     */
    value: function _defaultDescription() {
      var content = undefined;
      if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) content.getAttribute('content');else return '';
    }
  }, {
    key: '_detectNetworks',

    /**
     * @method _detectNetworks
     * @description Detect number of networks in use and display/hide
     * @private
     */
    value: function _detectNetworks() {
      // Update network-specific configuration with global configurations
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(this.config.networks)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var network = _step3.value;

          var display = undefined;

          // Check for enabled networks and display them
          if (this.config.networks[network].enabled) {
            display = 'block';
            this.config.enabledNetworks += 1;
          } else display = 'none';

          this.config.networks[network].display = display;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: '_normalizeNetworkConfiguration',

    /**
     * @method _normalizeNetworkConfiguration
     * @description Normalizes network configuration for Facebook & Twitter
     * @private
     */
    value: function _normalizeNetworkConfiguration() {
      // Don't load FB SDK if FB appId isn't present
      if (!this.config.networks.facebook.appId) this.config.networks.facebook.loadSdk = false;

      // Encode Twitter description for URL
      if (!!this.config.networks.twitter.description) if (!this.isEncoded(this.config.networks.twitter.description)) this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description);

      // Typecast Facebook appId to a String
      if (typeof this.config.networks.facebook.appId === 'number') this.config.networks.facebook.appId = this.config.networks.facebook.appId.toString();
    }
  }, {
    key: '_normalizeFilterConfigUpdates',

    /**
     * @method _normalizeFilterConfigUpdates
     * @description
     * @private
     *
     * @param {Object} opts
     * @returns {Object}
     */
    value: function _normalizeFilterConfigUpdates(opts) {
      if (this.config.networks.facebook.appId !== opts.appId) {
        console.warn('You are unable to change the Facebook appId after the button has been initialized. Please update your Facebook filters accordingly.');
        delete opts.appId;
      }

      if (this.config.networks.facebook.loadSdk !== opts.loadSdk) {
        console.warn('You are unable to change the Facebook loadSdk option after the button has been initialized. Please update your Facebook filters accordingly.');
        delete opts.appId;
      }

      return opts;
    }
  }]);

  return ShareButton;
})(ShareUtils);
return ShareButton;

}));
