{
  setTimeout: {
    prefix: "st",
    body: "setTimeout(() => {\n\t${0}\n}, ${1:delay})"
  },
  setInterval: {
    prefix: "si",
    body: "setInterval(() => {\n\t${0}\n}, ${1:delay})"
  },
  setImmediate: {
    prefix: "sim",
    body: "setImmediate(() => {\n\t${0}\n})"
  },
  await: {
    prefix: "a",
    body: "await ${0}"
  },
  await Promise.all: {
    prefix: "apa",
    body: "await Promise.all(${1:value})"
  },
  await Promise.all with destructuring: {
    prefix: "apad",
    body: "const [${0}] = await Promise.all(${1:value})"
  },
  await Promise.all map: {
    prefix: "apm",
    body: "await Promise.all(${1:array}.map(async (${2:value}) => {\n\t${0}\n}))"
  },
  await sleep: {
    prefix: "ast",
    body: "await new Promise((r) => setTimeout(r, ${0}))"
  },
  Node callback: {
    prefix: "cb",
    body: "function (err, ${1:value}) {\n\tif (err) throw err\n\t${0}\n}"
  },
  process.env: {
    prefix: "pe",
    body: "process.env"
  },
  Promise.all: {
    prefix: "pa",
    body: "Promise.all(${1:value})"
  },
  Promise.resolve: {
    prefix: "prs",
    body: "Promise.resolve(${1:value})"
  },
  Promise.reject: {
    prefix: "prj",
    body: "Promise.reject(${1:value})"
  },
  Promise: {
    prefix: "p",
    body: "Promise"
  },
  new Promise: {
    prefix: "np",
    body: "new Promise((resolve, reject) => {\n\t${0}\n})"
  },
  Promise.then: {
    prefix: "pt",
    body: "${1:promise}.then((${2:value}) => {\n\t${0}\n})"
  },
  Promise.catch: {
    prefix: "pc",
    body: "${1:promise}.catch(error => {\n\t${0}\n})"
  },
  describe: {
    prefix: "desc",
    body: "describe('${1:description}', () => {\n\t${0}\n})"
  },
  it asynchronous: {
    prefix: "it",
    body: "it('${1:description}', async () => {\n\t${0}\n})"
  },
  it.todo: {
    prefix: "itt",
    body: "it.todo('${1:description}')"
  },
  it with a callback: {
    prefix: "itd",
    body: "it('${1:description}', (done) => {\n\t${0}\n})"
  },
  it synchronous: {
    prefix: "its",
    body: "it('${1:description}', () => {\n\t${0}\n})"
  },
  before: {
    prefix: "bf",
    body: "before(async () => {\n\t${0}\n})"
  },
  beforeAll: {
    prefix: "ba",
    body: "beforeAll(async () => {\n\t${0}\n})"
  },
  beforeEach: {
    prefix: "bfe",
    body: "beforeEach(async () => {\n\t${0}\n})"
  },
  after: {
    prefix: "aft",
    body: "after(() => {\n\t${0}\n})"
  },
  afterEach: {
    prefix: "afe",
    body: "afterEach(() => {\n\t${0}\n})"
  },
  require: {
    prefix: "rq",
    body: "require('${1:module}')"
  },
  const module = require('module'): {
    prefix: "cr",
    body: "const ${1:module} = require('${1:module}')"
  },
  exports.member: {
    prefix: "em",
    body: "exports.${1:member} = ${2:value}"
  },
  module.exports: {
    prefix: "me",
    body: "module.exports = ${1:name}"
  },
  module as class: {
    prefix: "mec",
    body: "class ${1:name} {\n\tconstructor (${2:arguments}) {\n\t\t${0}\n\t}\n}\n\nmodule.exports = ${1:name}\n"
  },
  event handler: {
    prefix: "on",
    body: "${1:emitter}.on('${2:event}', (${3:arguments}) => {\n\t${0}\n})"
  },
  dom event cancel default and propagation: {
    prefix: "evc",
    body: "ev.preventDefault()\nev.stopPropagation()\nreturn false"
  },
  addEventListener: {
    prefix: "ae",
    body: "${1:document}.addEventListener('${2:event}', ${3:ev} => {\n\t${0}\n})"
  },
  removeEventListener: {
    prefix: "rel",
    body: "${1:document}.removeEventListener('${2:event}', ${3:listener})"
  },
  getElementById: {
    prefix: "gi",
    body: "${1:document}.getElementById('${2:id}')"
  },
  getElementsByClassName: {
    prefix: "gc",
    body: "Array.from(${1:document}.getElementsByClassName('${2:class}'))"
  },
  getElementsByTagName: {
    prefix: "gt",
    body: "Array.from(${1:document}.getElementsByTagName('${2:tag}'))"
  },
  querySelector: {
    prefix: "qs",
    body: "${1:document}.querySelector('${2:selector}')"
  },
  querySelectorAll: {
    prefix: "qsa",
    body: "Array.from(${1:document}.querySelectorAll('${2:selector}'))"
  },
  createDocumentFragment: {
    prefix: "cdf",
    body: "${1:document}.createDocumentFragment(${2:elem})"
  },
  createElement: {
    prefix: "cel",
    body: "${1:document}.createElement(${2:elem})"
  },
  classList.add: {
    prefix: "hecla",
    body: "${1:el}.classList.add('${2:class}')"
  },
  classList.remove: {
    prefix: "heclr",
    body: "${1:el}.classList.remove('${2:class}')"
  },
  classList.toggle: {
    prefix: "hect",
    body: "${1:el}.classList.toggle('${2:class}')"
  },
  getAttribute: {
    prefix: "hega",
    body: "${1:el}.getAttribute('${2:attr}')"
  },
  removeAttribute: {
    prefix: "hera",
    body: "${1:el}.removeAttribute('${2:attr}')"
  },
  setAttribute: {
    prefix: "hesa",
    body: "${1:el}.setAttribute('${2:attr}', ${3:value})"
  },
  appendChild: {
    prefix: "heac",
    body: "${1:el}.appendChild(${2:elem})"
  },
  removeChild: {
    prefix: "herc",
    body: "${1:el}.removeChild(${2:elem})"
  },
  forEach loop: {
    prefix: "fe",
    body: "${1:iterable}.forEach((${2:item}) => {\n\t${0}\n})"
  },
  map: {
    prefix: "map",
    body: "${1:iterable}.map((${2:item}) => {\n\t${0}\n})"
  },
  reduce: {
    prefix: "reduce",
    body: "${1:iterable}.reduce((${2:previous}, ${3:current}) => {\n\t${0}\n}${4:, initial})"
  },
  filter: {
    prefix: "filter",
    body: "${1:iterable}.filter((${2:item}) => {\n\t${0}\n})"
  },
  find: {
    prefix: "find",
    body: "${1:iterable}.find((${2:item}) => {\n\t${0}\n})"
  },
  every: {
    prefix: "every",
    body: "${1:iterable}.every((${2:item}) => {\n\t${0}\n})"
  },
  some: {
    prefix: "some",
    body: "${1:iterable}.some((${2:item}) => {\n\t${0}\n})"
  },
  var statement: {
    prefix: "v",
    body: "var ${1:name}"
  },
  var assignment: {
    prefix: "va",
    body: "var ${1:name} = ${2:value}"
  },
  let statement: {
    prefix: "l",
    body: "let ${1:name}"
  },
  const statement: {
    prefix: "c",
    body: "const ${1:name}"
  },
  const statement from destructuring: {
    prefix: "cd",
    body: "const { ${2:prop} } = ${1:value}"
  },
  const statement from array destructuring: {
    prefix: "cad",
    body: "const [ ${2:prop} ] = ${1:value}"
  },
  const assignment awaited: {
    prefix: "ca",
    body: "const ${1:name} = await ${2:value}"
  },
  const destructuring assignment awaited: {
    prefix: "cda",
    body: "const { ${1:name} } = await ${2:value}"
  },
  const arrow function assignment: {
    prefix: "cf",
    body: "const ${1:name} = (${2:arguments}) => {\n\treturn ${0}\n}"
  },
  let assignment awaited: {
    prefix: "la",
    body: "let ${1:name} = await ${2:value}"
  },
  const assignment yielded: {
    prefix: "cy",
    body: "const ${1:name} = yield ${2:value}"
  },
  let assignment yielded: {
    prefix: "ly",
    body: "let ${1:name} = yield ${2:value}"
  },
  const object: {
    prefix: "co",
    body: "const ${1:name} = {\n\t${0}\n}"
  },
  const array: {
    prefix: "car",
    body: "const ${1:name} = [\n\t${0}\n]"
  },
  generate array of integers starting with 1: {
    prefix: "gari",
    body: "Array.from({ length: ${1:length} }, (v, k) => k + 1)"
  },
  generate array of integers starting with 0: {
    prefix: "gari0",
    body: "[...Array(${1:length}).keys()]"
  },
  class: {
    prefix: "cs",
    body: "class ${1:name} {\n\tconstructor (${2:arguments}) {\n\t\t${0}\n\t}\n}"
  },
  class extends: {
    prefix: "csx",
    body: "class ${1:name} extends ${2:base} {\n\tconstructor (${3:arguments}) {\n\t\tsuper(${3:arguments})\n\t\t${0}\n\t}\n}"
  },
  module export: {
    prefix: "e",
    body: "export ${1:member}"
  },
  module export const: {
    prefix: "ec",
    body: "export const ${1:member} = ${2:value}"
  },
  export named function: {
    prefix: "ef",
    body: "export function ${1:member} (${2:arguments}) {\n\t${0}\n}"
  },
  module default export: {
    prefix: "ed",
    body: "export default ${1:member}"
  },
  module default export function: {
    prefix: "edf",
    body: "export default function ${1:name} (${2:arguments}) {\n\t${0}\n}"
  },
  import module: {
    prefix: "im",
    body: "import ${2:*} from '${1:module}'"
  },
  import module as: {
    prefix: "ia",
    body: "import ${2:*} as ${3:name} from '${1:module}'"
  },
  import module destructured: {
    prefix: "id",
    body: "import {$2} from '${1:module}'"
  },
  typeof: {
    prefix: "to",
    body: "typeof ${1:source} === '${2:undefined}'"
  },
  this: {
    prefix: "t",
    body: "this."
  },
  instanceof: {
    prefix: "iof",
    body: "${1:source} instanceof ${2:Object}"
  },
  Array.isArray(): {
    prefix: "ia",
    body: "Array.isArray(${1:source})"
  },
  let and if statement: {
    prefix: "lif",
    body: "let ${0} \n if (${2:condition}) {\n\t${1}\n}"
  },
  if statement: {
    prefix: "i",
    body: "if (${1:condition}) {\n\t${0}\n}"
  },
  else statement: {
    prefix: "el",
    body: "else {\n\t${0}\n}"
  },
  if/else statement: {
    prefix: "ife",
    body: "if (${1:condition}) {\n\t${0}\n} else {\n\t\n}"
  },
  else if statement: {
    prefix: "ei",
    body: "else if (${1:condition}) {\n\t${0}\n}"
  },
  for loop: {
    prefix: "fl",
    body: "for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {\n\t${0}\n}"
  },
  for in loop: {
    prefix: "fi",
    body: "for (let ${1:key} in ${2:source}) {\n\tif (${2:source}.hasOwnProperty(${1:key})) {\n\t\t${0}\n\t}\n}"
  },
  for of loop: {
    prefix: "fo",
    body: "for (const ${1:key} of ${2:source}) {\n\t${0}\n}"
  },
  while iteration decrementing: {
    prefix: "wid",
    body: "let ${1:array}Index = ${1:array}.length\nwhile (${1:array}Index--) {\n\t${0}\n}"
  },
  while loop: {
    prefix: "wl",
    body: "while (${1:condition}) {\n\t${0}\n}"
  },
  throw new Error: {
    prefix: "tn",
    body: "throw new ${0:error}"
  },
  try/catch: {
    prefix: "tc",
    body: "try {\n\t${0}\n} catch (${1:err}) {\n\t\n}"
  },
  try/finally: {
    prefix: "tf",
    body: "try {\n\t${0}\n} finally {\n\t\n}"
  },
  try/catch/finally: {
    prefix: "tcf",
    body: "try {\n\t${0}\n} catch (${1:err}) {\n\t\n} finally {\n\t\n}"
  },
  anonymous function: {
    prefix: "fan",
    body: "function (${1:arguments}) {${0}}"
  },
  named function: {
    prefix: "fn",
    body: "function ${1:name} (${2:arguments}) {\n\t${0}\n}"
  },
  async function: {
    prefix: "asf",
    body: "async function (${1:arguments}) {\n\t${0}\n}"
  },
  async arrow function: {
    prefix: "aa",
    body: "async (${1:arguments}) => {\n\t${0}\n}"
  },
  immediatelyInvoked function expression: {
    prefix: "iife",
    body: ";(function (${1:arguments}) {\n\t${0}\n})(${2})"
  },
  async immediatelyInvoked function expression: {
    prefix: "aiife",
    body: ";(async (${1:arguments}) => {\n\t${0}\n})(${2})"
  },
  arrow function: {
    prefix: "af",
    body: "(${1:arguments}) => ${2:statement}"
  },
  arrow function with destructuring: {
    prefix: "fd",
    body: "({${1:arguments}}) => ${2:statement}"
  },
  arrow function with destructuring returning destructured: {
    prefix: "fdr",
    body: "({${1:arguments}}) => ${1:arguments}"
  },
  arrow function with body: {
    prefix: "f",
    body: "(${1:arguments}) => {\n\t${0}\n}"
  },
  arrow function with return: {
    prefix: "fr",
    body: "(${1:arguments}) => {\n\treturn ${0}\n}"
  },
  generator function: {
    prefix: "gf",
    body: "function* (${1:arguments}) {\n\t${0}\n}"
  },
  named generator: {
    prefix: "gfn",
    body: "function* ${1:name}(${2:arguments}) {\n\t${0}\n}"
  },
  console.log: {
    prefix: "cl",
    body: "console.log(${0})"
  },
  console.log a variable: {
    prefix: "cv",
    body: "console.log('${0}:', ${0})"
  },
  console.error: {
    prefix: "ce",
    body: "console.error(${0})"
  },
  console.warn: {
    prefix: "cw",
    body: "console.warn(${0})"
  },
  console.dir: {
    prefix: "cod",
    body: "console.dir('${0}:', ${0})"
  },
  constructor: {
    prefix: "cn",
    body: "constructor () {\n\t${0}\n}"
  },
  use strict: {
    prefix: "uss",
    body: "'use strict'"
  },
  JSON.stringify(): {
    prefix: "js",
    body: "JSON.stringify($0)"
  },
  JSON.parse(): {
    prefix: "jp",
    body: "JSON.parse($0)"
  },
  method: {
    prefix: "m",
    body: "${1:method} (${2:arguments}) {\n\t${0}\n}"
  },
  getter: {
    prefix: "get",
    body: "get ${1:property} () {\n\t${0}\n}"
  },
  setter: {
    prefix: "set",
    body: "set ${1:property} (${2:value}) {\n\t${0}\n}"
  },
  getter + setter: {
    prefix: "gs",
    body: "get ${1:property} () {\n\t${0}\n}\nset ${1:property} (${2:value}) {\n\t\n}"
  },
  prototype method: {
    prefix: "proto",
    body: "${1:Class}.prototype.${2:method} = function (${3:arguments}) {\n\t${0}\n}"
  },
  Object.assign: {
    prefix: "oa",
    body: "Object.assign(${1:dest}, ${2:source})"
  },
  Object.create: {
    prefix: "oc",
    body: "Object.create(${1:obj})"
  },
  Object.getOwnPropertyDescriptor: {
    prefix: "og",
    body: "Object.getOwnPropertyDescriptor(${1:obj}, '${2:prop}')"
  },
  ternary: {
    prefix: "te",
    body: "${1:cond} ? ${2:true} : ${3:false}"
  },
  ternary assignment: {
    prefix: "ta",
    body: "const ${0} = ${1:cond} ? ${2:true} : ${3:false}"
  },
  Object.defineProperty: {
    prefix: "od",
    body: "Object.defineProperty(${1:dest}, '${2:prop}', {\n\t${0}\n})"
  },
  Object.keys: {
    prefix: "ok",
    body: "Object.keys(${1:obj})"
  },
  Object.values: {
    prefix: "ov",
    body: "Object.values(${1:obj})"
  },
  Object.entries: {
    prefix: "oe",
    body: "Object.entries(${1:obj})"
  },
  return: {
    prefix: "r",
    body: "return ${0}"
  },
  yield: {
    prefix: "y",
    body: "yield ${0}"
  },
  return this: {
    prefix: "rt",
    body: "return this"
  },
  return null: {
    prefix: "rn",
    body: "return null"
  },
  return new object: {
    prefix: "ro",
    body: "return {\n\t${0}\n}"
  },
  return new array: {
    prefix: "ra",
    body: "return [\n\t${0}\n]"
  },
  return promise: {
    prefix: "rp",
    body: "return new Promise((resolve, reject) => {\n\t${0}\n})"
  },
  wrap selection in arrow function: {
    prefix: "wrap selection in arrow function",
    body: "() => {\n\t{$TM_SELECTED_TEXT}\n}",
    description: "wraps text in arrow function"
  },
  wrap selection in async arrow function: {
    prefix: "wrap selection in async arrow function",
    body: "async () => {\n\t{$TM_SELECTED_TEXT}\n}",
    description: "wraps text in arrow function"
  }
}
