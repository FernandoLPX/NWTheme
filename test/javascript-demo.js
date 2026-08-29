/*
 * JavaScript Demo - Token Scopes
 * Use "Developer: Inspect TM Scopes" to see each scope
 */

// ==============================================================================
// COMMENTS
// comment
// punctuation.definition.comment.js
// ==============================================================================

// Single line comment

/*
 * Multi-line
 * comment
 */

// Documentation comment (JSDoc)
/**
 * @param {string} name
 * @returns {string}
 */
function documentedFunction(name) {
    return name;
}

// ==============================================================================
// VARIABLES & DECLARATIONS
// storage.type.js
// variable.other.js
// variable.declaration.js
// ==============================================================================

var varDeclaration = 'var variable';
let letVariable = 'let variable';
const CONST_VARIABLE = 'const variable';

// Destructuring
const { prop1, prop2 } = object;
let [first, second] = array;
const { name: userName, age: userAge } = person;

// Rest/Spread
const { a, ...rest } = obj;
const merged = { ...obj1, ...obj2 };

// ==============================================================================
// PRIMITIVES - NUMBERS
// constant.numeric.js
// constant.numeric.hex.js
// constant.numeric.octal.js
// constant.numeric.binary.js
// ==============================================================================

const integer = 42;
const negative = -17;
const float = 3.14159;
const scientific = 2.5e10;
const hex = 0xFF;           // constant.numeric.hex.js
const octal = 0o777;        // constant.numeric.octal.js
const binary = 0b1010;      // constant.numeric.binary.js
const bigInt = 123456789012345678901234567890n;
const infinity = Infinity;
const negInfinity = -Infinity;
const nan = NaN;

// Underscores in numbers
const billion = 1_000_000_000;
const bytes = 0xFF_00_00;

// ==============================================================================
// PRIMITIVES - STRINGS
// string.quoted.double.js
// string.quoted.single.js
// string.template.js
// ==============================================================================

const doubleQuotes = "Double quoted string";
const singleQuotes = 'Single quoted string';
const backticks = `Template literal string`;
const emptyString = "";

// Escapes
const escaped = "Line\nNew";
const tabbed = "Column\tTab";
const quoted = "He said \"Hello\"";
const backslash = "Path\\to\\file";

// Template literals
const template = `Value: ${variable}`;
const multiline = `Line 1
Line 2
Line 3`;
const expression = `Sum: ${1 + 2}`;
const nested = `${`nested template`}`;

// ==============================================================================
// PRIMITIVES - BOOLEANS & NULL
// constant.language.js
// ==============================================================================

const trueValue = true;
const falseValue = false;
const nullValue = null;
const undefinedValue = undefined;

// ==============================================================================
// OBJECTS
// meta.structure.object.js
// entity.name.type.class.js
// variable.other.object.js
// ==============================================================================

const obj = {
    // entity.name.type.class.js - key (if looks like class)
    name: 'John',
    age: 30,
    isActive: true,
    nested: {
        level: 2
    },
    'computed key': 'value',
    [`template key`]: 'template value'
};

const emptyObj = {};
const obj2 = new Object();
const obj3 = Object.create(null);

// Object methods
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

// ==============================================================================
// ARRAYS
// meta.structure.array.js
// constant.numeric.js (index)
// ==============================================================================

const arr = [1, 2, 3, 4, 5];
const mixed = [1, 'two', true, null, { key: 'value' }];
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const emptyArr = [];

// Array from
const arrFrom = Array.from([1, 2, 3]);
const arrOf = Array.of(1, 2, 3);

// ==============================================================================
// FUNCTIONS - DECLARATIONS
// entity.name.function.js
// meta.function.js
// variable.parameter.js
// ==============================================================================

function functionDeclaration(param1, param2) {
    // entity.name.function.js
    // variable.parameter.js
    return param1 + param2;
}

// Function expression
const functionExpr = function(param) {
    return param;
};

// Named function expression
const namedFunction = function namedFunction(param) {
    return param;
};

// Arrow functions
const arrow1 = (param) => param;
const arrow2 = (param) => { return param; };
const arrow3 = param => param * 2;
const arrow4 = (a, b) => a + b;

// ==============================================================================
// FUNCTIONS - BUILT-IN
// support.function.js
// support.constant.js
// ==============================================================================

console.log('message');          // support.function.js
console.error('error');
console.warn('warning');

Math.abs(-5);                   // support.constant.js
Math.floor(4.7);
Math.ceil(4.1);
Math.round(4.5);
Math.max(1, 2, 3);
Math.min(1, 2, 3);
Math.pow(2, 3);
Math.sqrt(16);
Math.PI;                        // support.constant.js
Math.E;                         // support.constant.js

JSON.parse('{"key": "value"}');
JSON.stringify({ key: 'value' });

Number.isNaN(NaN);
Number.isFinite(42);
parseInt('42');
parseFloat('3.14');
isNaN(NaN);
isFinite(42);

Date.now();
new Date();

// ==============================================================================
// CLASSES
// entity.name.type.class.js
// storage.type.js
// storage.modifier.js
// ==============================================================================

class ClassName {
    // entity.name.type.class.js

    constructor(name) {
        // variable.other.object.js
        this.name = name;
    }

    static staticProperty = 'static';
    static staticMethod() {
        return 'static method';
    }

    get property() {
        return this._property;
    }

    set property(value) {
        this._property = value;
    }

    method() {
        return 'instance method';
    }

    *generator() {
        yield 1;
        yield 2;
    }

    async asyncMethod() {
        return 'async';
    }
}

class SubClass extends ParentClass {
    // storage.modifier.js
    constructor() {
        super();
    }
}

// ==============================================================================
// INTERFACES & TYPES (JSDoc/TypeScript-like)
// comment.block.documentation.js
// entity.name.type.js
// ==============================================================================

/**
 * @interface
 */
class InterfaceExample {
    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// ==============================================================================
// CONTROL FLOW - CONDITIONALS
// keyword.control.js
// keyword.operator.comparison.js
// keyword.operator.logical.js
// ==============================================================================

if (condition) {                 // keyword.control.js
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}

// Ternary
const ternary = condition ? 'yes' : 'no';

// Comparison operators
const eq = a === b;             // keyword.operator.comparison.js
const neq = a !== b;
const gt = a > b;
const lt = a < b;
const gte = a >= b;
const lte = a <= b;

// Logical operators
const and = condition && other; // keyword.operator.logical.js
const or = condition || other;
const not = !condition;

// Nullish
const nullish = value ?? 'default';

// Optional chaining
const optional = obj?.property;
const optionalMethod = obj?.method?.();

// ==============================================================================
// CONTROL FLOW - LOOPS
// keyword.control.js
// keyword.operator.js
// ==============================================================================

// for loop
for (let i = 0; i < 10; i++) {  // keyword.control.js
    console.log(i);
}

// for...of (arrays, strings, etc.)
for (const item of array) {      // keyword.control.js
    console.log(item);
}

// for...in (objects)
for (const key in object) {     // keyword.control.js
    console.log(key);
}

// while
while (condition) {              // keyword.control.js
    break;
    continue;
}

// do...while
do {                            // keyword.control.js
    code;
} while (condition);

// ==============================================================================
// CONTROL FLOW - SWITCH
// keyword.control.js
// keyword.other.js
// ==============================================================================

switch (value) {                 // keyword.control.js
    case 'one':                 // keyword.other.js
        console.log(1);
        break;
    case 'two':
        console.log(2);
        break;
    default:
        console.log('default');
}

// ==============================================================================
// EXCEPTION HANDLING
// keyword.control.js
// ==============================================================================

try {                           // keyword.control.js
    throw new Error('error');
} catch (error) {               // keyword.control.js
    console.error(error);
} finally {                     // keyword.control.js
    console.log('always runs');
}

// ==============================================================================
// OPERATORS - ARITHMETIC
// keyword.operator.arithmetic.js
// ==============================================================================

const sum = 10 + 5;            // keyword.operator.arithmetic.js
const sub = 10 - 5;
const mul = 10 * 5;
const div = 10 / 5;
const mod = 10 % 5;
const pow = 2 ** 3;
const inc = i++;
const dec = i--;
const neg = -value;

// Bitwise
const bitAnd = 5 & 3;
const bitOr = 5 | 3;
const bitXor = 5 ^ 3;
const bitNot = ~5;
const leftShift = 1 << 2;
const rightShift = 8 >> 2;
const unsignedShift = -8 >>> 2;

// ==============================================================================
// OPERATORS - ASSIGNMENT
// keyword.operator.assignment.js
// ==============================================================================

let assign = 10;
assign += 5;                   // keyword.operator.assignment.js
assign -= 3;
assign *= 2;
assign /= 4;
assign %= 7;
assign **= 2;
assign &= 1;
assign |= 2;
assign ^= 3;
assign <<= 2;
assign >>= 2;
assign >>>= 2;

// ==============================================================================
// OPERATORS - TYPE
// keyword.operator.type.js
// ==============================================================================

const typeofResult = typeof variable;  // keyword.operator.type.js
const instanceofResult = obj instanceof Array;

// ==============================================================================
// KEYWORDS - IMPORT/EXPORT
// keyword.control.import.js
// keyword.control.export.js
// ==============================================================================

import defaultExport from 'module';      // keyword.control.import.js
import { namedExport } from 'module';
import { alias as renamed } from 'module';
import * as namespace from 'module';
import defaultExport, { named } from 'module';

export default function() {};           // keyword.control.export.js
export function namedExport() {}
export const CONSTANT = 42;
export let variable = 10;
export var name = 'exported';
export { name1, name2 };
export { name as alias };
export class ExportedClass {}
export default 42;
export default (class {});
export * from 'module';
export * as namespace from 'module';

// ==============================================================================
// KEYWORDS - OTHER CONTROL
// keyword.control.js
// keyword.other.js
// ==============================================================================

// async/await
async function asyncFunction() {        // keyword.control.js
    await promise;                      // keyword.other.js
    return 'result';
}

// yield
function* generatorFunction() {         // keyword.control.js
    yield 1;
    yield* anotherGenerator();
    return 'done';
}

// debugger, debugger statement
debugger;                              // keyword.other.js

// with statement (deprecated)
with (obj) {                           // keyword.control.js
    name = 'value';
}

// ==============================================================================
// KEYWORDS - JSX (React)
// entity.name.tag.jsx
// ==============================================================================

/*
const element = (
    <div className="container">
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
);
*/

// ==============================================================================
// REGULAR EXPRESSIONS
// string.regexp.js
// ==============================================================================

const regex1 = /pattern/;
const regex2 = /pattern/flags;
const regex3 = new RegExp('pattern', 'flags');

const flags = regex1.flags;
const match = 'string'.match(/pattern/);
const replace = 'string'.replace(/pattern/, 'replacement');
const test = /pattern/.test('string');

// ==============================================================================
// TEMPLATE LITERALS (Advanced)
// string.template.js
// punctuation.definition.template-expression.js
// ==============================================================================

const tag = String.raw`raw \n string`;
const hi = String.raw`Hi\n`;

// Tagged template
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}
const result = tag`Hello ${name}!`;

// ==============================================================================
// SYMBOL & ITERATOR
// support.constant.js
// entity.name.function.js
// ==============================================================================

const sym = Symbol('description');
const sym2 = Symbol.for('global');
const sym3 = Symbol.keyFor(sym2);

const iterator = arr[Symbol.iterator]();
const iterable = {
    [Symbol.iterator]() {
        return iterator;
    }
};

// Well-known symbols
Symbol.hasInstance;
Symbol.isConcatSpreadable;
Symbol.toPrimitive;
Symbol.toStringTag;
Symbol.species;
Symbol.match;
Symbol.replace;
Symbol.search;
Symbol.split;

// ==============================================================================
// PROMISES & ASYNC
// entity.name.function.js
// support.class.js
// ==============================================================================

const promise = new Promise((resolve, reject) => {  // support.class.js
    resolve('success');
    reject('error');
});

promise
    .then(result => console.log(result))      // entity.name.function.js
    .catch(error => console.error(error))
    .finally(() => console.log('done'));

// Promise.all, Promise.race, etc.
Promise.all([p1, p2, p3]);
Promise.race([p1, p2, p3]);
Promise.allSettled([p1, p2, p3]);
Promise.any([p1, p2, p3]);

// Async/await
async function asyncDemo() {
    const result = await fetch(url);
    return result;
}

// ==============================================================================
// GENERATORS (Advanced)
// entity.name.function.js
// keyword.control.js
// ==============================================================================

function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
gen.next();    // { value: 1, done: false }
gen.next();    // { value: 2, done: false }
gen.return();  // { value: undefined, done: true }
gen.throw(new Error('Error'));

// ==============================================================================
// PROXY & REFLECT
// support.class.js
// ==============================================================================

const proxy = new Proxy(obj, {     // support.class.js
    get(target, prop) {
        return Reflect.get(target, prop);  // support.class.js
    },
    set(target, prop, value) {
        return Reflect.set(target, prop, value);
    }
});

// ==============================================================================
// WEAK COLLECTIONS
// support.class.js
// ==============================================================================

const weakMap = new WeakMap();      // support.class.js
const weakSet = new WeakSet();
const weakRef = new WeakRef(obj);

// ==============================================================================
// TYPED ARRAYS
// support.class.js
// ==============================================================================

const int8 = new Int8Array(8);     // support.class.js
const uint8 = new Uint8Array(8);
const int16 = new Int16Array(8);
const uint16 = new Uint16Array(8);
const int32 = new Int32Array(8);
const uint32 = new Uint32Array(8);
const float32 = new Float32Array(8);
const float64 = new Float64Array(8);
const bigInt64 = new BigInt64Array(8);
const bigUint64 = new BigUint64Array(8);

const buffer = new ArrayBuffer(16);
const dataView = new DataView(buffer);

// ==============================================================================
// MAP & SET
// support.class.js
// ==============================================================================

const map = new Map();             // support.class.js
const set = new Set();
const weakMap = new WeakMap();
const weakSet = new WeakSet();

map.set('key', 'value');
map.get('key');
map.has('key');
map.delete('key');

set.add(1);
set.has(1);
set.delete(1);

// ==============================================================================
// ARRAY METHODS
// entity.name.function.js
// ==============================================================================

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(fn);               // entity.name.function.js
numbers.map(fn);
numbers.filter(fn);
numbers.reduce(fn);
numbers.reduceRight(fn);
numbers.find(fn);
numbers.findIndex(fn);
numbers.some(fn);
numbers.every(fn);
numbers.sort(fn);
numbers.sort((a, b) => a - b);
numbers.reverse();
numbers.flat();
numbers.flatMap(fn);
numbers.includes(3);
numbers.indexOf(3);
numbers.lastIndexOf(3);
numbers.join(separator);
numbers.slice(start, end);
numbers.splice(index, count);
numbers.splice(index, 0, element);
numbers.concat(other);
numbers.copyWithin(target, start, end);
numbers.fill(value);
numbers.entries();
numbers.keys();
numbers.values();

// ==============================================================================
// STRING METHODS
// entity.name.function.js
// ==============================================================================

const str = 'Hello World';

str.charAt(0);                    // entity.name.function.js
str.charCodeAt(0);
str.codePointAt(0);
str.concat('!');
str.endsWith('!');
str.includes('lo');
str.indexOf('lo');
str.lastIndexOf('lo');
str.localeCompare(other);
str.match(/pattern/);
str.matchAll(/pattern/g);
str.normalize();
str.padEnd(10, ' ');
str.padStart(10, ' ');
str.repeat(3);
str.replace(/pattern/, 'replacement');
str.replaceAll(/pattern/, 'replacement');
str.search(/pattern/);
str.slice(0, 5);
str.split('');
str.startsWith('Hello');
str.substring(0, 5);
str.toLowerCase();
str.toUpperCase();
str.trim();
str.trimStart();
str.trimEnd();
str.padStart(10, '0');
str.toLocaleLowerCase();
str.toLocaleUpperCase();

// ==============================================================================
// OBJECT METHODS
// entity.name.function.js
// ==============================================================================

Object.assign(target, source);     // entity.name.function.js
Object.create(proto);
Object.defineProperty(obj, 'key', descriptor);
Object.defineProperties(obj, descriptors);
Object.entries(obj);
Object.freeze(obj);
Object.fromEntries(entries);
Object.getOwnPropertyDescriptor(obj, 'key');
Object.getOwnPropertyDescriptors(obj);
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);
Object.getPrototypeOf(obj);
Object.hasOwn(obj, 'key');
Object.is(value1, value2);
Object.isExtensible(obj);
Object.isFrozen(obj);
Object.isSealed(obj);
Object.keys(obj);
Object.preventExtensions(obj);
Object.seal(obj);
Object.setPrototypeOf(obj, proto);
Object.values(obj);

// ==============================================================================
// FUNCTION METHODS
// entity.name.function.js
// ==============================================================================

function demo(a, b) {
    this.value = a + b;
}

const bound = demo.bind(context, arg1);
const called = demo.call(context, arg1, arg2);
const applied = demo.apply(context, [arg1, arg2]);
const invoked = demo();

// Function length, name, prototype
demo.length;
demo.name;
demo.prototype;

// ==============================================================================
// CLASS METHODS (Built-in)
// support.class.js
// ==============================================================================

String.fromCharCode(65);         // support.class.js
String.fromCodePoint(65);
String.raw`template`;

Array.isArray([]);
Array.of(1, 2, 3);
Array.from([1, 2, 3], fn);

Number.isFinite(42);
Number.isInteger(42);
Number.isNaN(NaN);
Number.isSafeInteger(42);
Number.EPSILON;
Number.MAX_SAFE_INTEGER;
Number.MAX_VALUE;
Number.MIN_SAFE_INTEGER;
Number.MIN_VALUE;
Number.NaN;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

Boolean.TRUE;
Boolean.FALSE;

JSON.stringify();
JSON.parse();

// ==============================================================================
// DESTRUCTURING (Advanced)
// variable.other.js
// ==============================================================================

// Object destructuring
const { a: aliasA, b: aliasB = 'default' } = obj;
const { nested: { deep } } = obj;

// Array destructuring
const [first, second, ...rest] = array;
const [, secondItem] = array;

// Function destructuring
function fn({ name, age }) {}
function fn([first, second]) {}

// Nested
const { arr: [firstItem] } = obj;

// ==============================================================================
// SPREAD OPERATOR
// keyword.operator.spread.js
// ==============================================================================

const spread = [...arr1, ...arr2];  // keyword.operator.spread.js
const objSpread = { ...obj1, ...obj2 };
fn(...args);
new Cls(...args);

// ==============================================================================
// TYPE OPERATORS
// keyword.operator.type.js
// ==============================================================================

typeof variable;                  // keyword.operator.type.js
obj instanceof Array;
obj instanceof String;
obj instanceof Number;
obj instanceof Boolean;
obj instanceof Object;
obj instanceof Function;
obj instanceof Symbol;
obj instanceof Promise;
obj instanceof Map;
obj instanceof Set;

// ==============================================================================
// SPECIAL IDENTIFIERS
// variable.language.js
// ==============================================================================

this;                             // variable.language.js
super;                            // variable.language.js
new.target;
import.meta;

// ==============================================================================
// LABEL
// entity.name.label.js
// ==============================================================================

label: for (let i = 0; i < 10; i++) {
    if (condition) {
        break label;              // entity.name.label.js
    }
}

// ==============================================================================
// VOID & DELETE
// keyword.operator.js
// ==============================================================================

void expression;                  // keyword.operator.js
delete object.property;
delete object['property'];

// ==============================================================================
// IN OPERATOR
// keyword.operator.js
// ==============================================================================

'key' in object;                  // keyword.operator.js
'length' in array;
'toString' in obj;

// ==============================================================================
// COMMA OPERATOR
// keyword.operator.js
// ==============================================================================

let x = (a++, b++, c++);          // keyword.operator.js

// ==============================================================================
// STATEMENT vs EXPRESSION
// keyword.declaration.js
// ==============================================================================

function decl() {};               // keyword.declaration.js
const expr = function() {};

// ==============================================================================
// BINARY DATA
// support.class.js
// ==============================================================================

const blob = new Blob([data], { type: 'text/plain' });  // support.class.js
const reader = new FileReader();
const url = URL.createObjectURL(blob);
URL.revokeObjectURL(url);

// ==============================================================================
// WEB APIs (Common)
// support.class.js
// support.function.js
// ==============================================================================

// Fetch API
fetch(url);                       // support.function.js
const response = new Response();
const headers = new Headers();
const request = new Request(url);
const formData = new FormData();
const urlObj = new URL(url);

// Console (Node/Browser)
console.log();
console.error();
console.warn();
console.info();
console.debug();
console.trace();
console.table();
console.time();
console.timeEnd();
console.count();
console.assert();

// Timers
setTimeout(fn, 1000);
setInterval(fn, 1000);
setImmediate(fn);
process.nextTick(fn);

// ==============================================================================
// NODE.JS SPECIFIC
// support.class.js
// support.function.js
// support.constant.js
// ==============================================================================

// Process
process.env;                      // support.constant.js
process.argv;
process.cwd();
process.exit();
process.version;
process.versions;

// Buffer
const buf = Buffer.from('hello'); // support.class.js
Buffer.alloc(8);
Buffer.allocUnsafe(8);
Buffer.isBuffer(buf);

// Events
const { EventEmitter } = require('events');
const emitter = new EventEmitter();
emitter.emit('event');
emitter.on('event', fn);
emitter.once('event', fn);
emitter.off('event', fn);

// ==============================================================================
// MODULES - COMMONJS
// support.function.js
// ==============================================================================

require('module');                // support.function.js
module.exports = {};
exports.name = 'exported';
module.id;
module.filename;
module.parent;
module.children;
module.path;
module.paths;

// ==============================================================================
// MODULES - ES6+
// keyword.control.import.js
// keyword.control.export.js
// ==============================================================================

import 'side-effect';
import defaultImport from 'module';
import { named } from 'module';
import { alias as renamed } from 'module';
import * as all from 'module';

export default 42;
export default function() {};
export const named = 42;
export { name };
export { name as alias };
export { name } from 'module';
export * from 'module';

// Dynamic import
const mod = await import('module');

// ==============================================================================
// OPTIONAL CHAINING & NULLISH
// keyword.operator.js
// ==============================================================================

obj?.property;                     // keyword.operator.js
obj?.method?.();
arr?.[0];
func?.();

// ==============================================================================
// TOP-LEVEL await (ES2022)
// keyword.other.js
// ==============================================================================

// await at top level in modules
// const data = await fetch(url);

// ==============================================================================
// PRIVATE CLASS FIELDS
// variable.other.js
// storage.type.js
// ==============================================================================

class PrivateDemo {
    publicField = 'public';
    #privateField = 'private';    // variable.other.js

    #privateMethod() {            // entity.name.function.js
        return this.#privateField;
    }

    static #staticPrivate = 'static private';

    get #accessor() {             // storage.type.js
        return this.#privateField;
    }
}

// ==============================================================================
// CLASS FIELDS DECLARATION
// entity.name.function.js
// ==============================================================================

class FieldDemo {
    // Regular
    field = 'value';
    objField = { key: 'value' };
    arrField = [1, 2, 3];
    fnField = () => {};
    classField = class {};

    // Static
    static staticField = 'static';
    static staticObj = {};
    static staticArr = [];
    static staticFn = function() {};

    // getters/setters
    _field = 'private';
    get field() { return this._field; }
    set field(value) { this._field = value; }

    // method shorthand
    method() { return 'method'; }

    // async method
    async asyncMethod() { return 'async'; }

    // generator method
    *generator() { yield 1; }

    // static method
    static staticMethod() { return 'static'; }

    // static getter/setter
    static get staticProp() { return 'static prop'; }
    static set staticProp(value) { }
}

// ==============================================================================
// DECORATORS (Experimental/TC39)
// support.type.annotation.js
// entity.name.function.js
// ==============================================================================

/*
@decorator                                // support.type.annotation.js
class Decorated {
    @readonly
    @nonenumerable
    property = 'value';
}

@autobind
class BoundClass {
    @debounce(100)
    method() {}
}
*/

// ==============================================================================
// REGEXP FLAGS
// constant.language regexp
// ==============================================================================

/pattern/g;    // global
/pattern/i;    // case insensitive
/pattern/m;    // multiline
/pattern/s;    // dotAll
/pattern/u;    // unicode
/pattern/y;    // sticky
/pattern/d;    // hasIndices
/pattern/v;    // unicodeSets

// ==============================================================================
// NUMERIC SEPARATORS
// constant.numeric.js
// ==============================================================================

const million = 1_000_000;
const bytes2 = 0xFF_00_00;
const binary2 = 0b1010_0010;

// ==============================================================================
// ARRAY BUFFER & DATA VIEW
// support.class.js
// ==============================================================================

const ab = new ArrayBuffer(1024);     // support.class.js
const dv = new DataView(ab);
dv.getInt8(0);
dv.setInt8(0, 1);
dv.getUint8(0);
dv.setUint8(0, 1);
dv.getInt16(0, true);
dv.setInt16(0, 1, true);
dv.getFloat32(0, true);
dv.setFloat32(0, 1.0, true);

// ==============================================================================
// FINALIZATION REGISTRY
// support.class.js
// ==============================================================================

const fr = new FinalizationRegistry((value) => {  // support.class.js
    console.log('Cleaned up:', value);
});
fr.register(target, 'target value');

// ==============================================================================
// ECMA SCRIPTS FEATURES (Various)
// support.constant.js
// ==============================================================================

// Iterator helpers (ES2025)
const it = [1, 2, 3][Symbol.iterator]();
it.map(x => x * 2);
it.filter(x => x > 1);
it.take(2);
it.drop(2);
it.flatMap(x => [x]);
it.toArray();

// Array grouping (ES2023)
[].groupBy(x => x.category);
[].groupByToMap(x => x.category);

// Find last / find last index
[].findLast(x => x > 1);
[].findLastIndex(x => x > 1);

// Change Array by Copy
const arrCopy = [].toReversed();
const arrSorted = [].toSorted();
const arrSpliced = [].toSpliced(0, 1, 'x');

// Hashbang
// #!/usr/bin/env node
