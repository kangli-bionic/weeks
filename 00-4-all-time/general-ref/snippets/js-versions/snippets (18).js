{
  all: {
    prefix: "30s_all",
    body: [
      "const all = (arr, fn = Boolean) => arr.every(fn);"
    ],
    description: "Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default"
  },
  allEqual: {
    prefix: "30s_allEqual",
    body: [
      "const allEqual = arr => arr.every(val => val === arr[0]);"
    ],
    description: "Check if all elements in an array are equal.\n\nUse `Array.prototype.every()` to check if all the elements of the array are the same as the first one"
  },
  any: {
    prefix: "30s_any",
    body: [
      "const any = (arr, fn = Boolean) => arr.some(fn);"
    ],
    description: "Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default"
  },
  approximatelyEqual: {
    prefix: "30s_approximatelyEqual",
    body: [
      "const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;"
    ],
    description: "Checks if two numbers are approximately equal to each other.\n\nUse `Math.abs()` to compare the absolute difference of the two values to `epsilon`.\nOmit the third parameter, `epsilon`, to use a default value of `0.001`"
  },
  arrayToCSV: {
    prefix: "30s_arrayToCSV",
    body: [
      "const arrayToCSV = (arr, delimiter = ',') =>",
      "  arr.map(v => v.map(x => `\"${x}\"`).join(delimiter)).join('\\n');"
    ],
    description: "Converts a 2D array to a comma-separated values (CSV) string.\n\nUse `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.\nUse `Array.prototype.join('\\n')` to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`"
  },
  arrayToHtmlList: {
    prefix: "30s_arrayToHtmlList",
    body: [
      "const arrayToHtmlList = (arr, listID) =>",
      "  (el => (",
      "    (el = document.querySelector('#' + listID)),",
      "    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))",
      "  ))();"
    ],
    description: "Converts the given array elements into `<li>` tags and appends them to the list of the given id.\n\nUse `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags"
  },
  ary: {
    prefix: "30s_ary",
    body: [
      "const ary = (fn, n) => (...args) => fn(...args.slice(0, n));"
    ],
    description: "Creates a function that accepts up to `n` arguments, ignoring any additional arguments.\n\nCall the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0,n)` and the spread operator (`...`)"
  },
  atob: {
    prefix: "30s_atob",
    body: [
      "const atob = str => Buffer.from(str, 'base64').toString('binary');"
    ],
    description: "Decodes a string of data which has been encoded using base-64 encoding.\n\nCreate a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string"
  },
  attempt: {
    prefix: "30s_attempt",
    body: [
      "const attempt = (fn, ...args) => {",
      "  try {",
      "    return fn(...args);",
      "  } catch (e) {",
      "    return e instanceof Error ? e : new Error(e);",
      "  }",
      "};"
    ],
    description: "Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.\n\nUse a `try... catch` block to return either the result of the function or an appropriate error"
  },
  average: {
    prefix: "30s_average",
    body: [
      "const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;"
    ],
    description: "Returns the average of two or more numbers.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array"
  },
  averageBy: {
    prefix: "30s_averageBy",
    body: [
      "const averageBy = (arr, fn) =>",
      "  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /",
      "  arr.length;"
    ],
    description: "Returns the average of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array"
  },
  bifurcate: {
    prefix: "30s_bifurcate",
    body: [
      "const bifurcate = (arr, filter) =>",
      "  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);"
    ],
    description: "Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`"
  },
  bifurcateBy: {
    prefix: "30s_bifurcateBy",
    body: [
      "const bifurcateBy = (arr, fn) =>",
      "  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);"
    ],
    description: "Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element"
  },
  bind: {
    prefix: "30s_bind",
    body: [
      "const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);"
    ],
    description: "Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.\nUse `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments"
  },
  bindAll: {
    prefix: "30s_bindAll",
    body: [
      "const bindAll = (obj, ...fns) =>",
      "  fns.forEach(",
      "    fn => (",
      "      (f = obj[fn]),",
      "      (obj[fn] = function() {",
      "        return f.apply(obj);",
      "      })",
      "    )",
      "  );"
    ],
    description: "Binds methods of an object to the object itself, overwriting the existing method.\n\nUse `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified"
  },
  bindKey: {
    prefix: "30s_bindKey",
    body: [
      "const bindKey = (context, fn, ...boundArgs) => (...args) =>",
      "  context[fn].apply(context, [...boundArgs, ...args]);"
    ],
    description: "Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to bind `context[fn]` to `context`.\nUse the spread operator (`...`) to prepend any additional supplied parameters to the arguments"
  },
  binomialCoefficient: {
    prefix: "30s_binomialCoefficient",
    body: [
      "const binomialCoefficient = (n, k) => {",
      "  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;",
      "  if (k < 0 || k > n) return 0;",
      "  if (k === 0 || k === n) return 1;",
      "  if (k === 1 || k === n - 1) return n;",
      "  if (n - k < k) k = n - k;",
      "  let res = n;",
      "  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;",
      "  return Math.round(res);",
      "};"
    ],
    description: "Evaluates the binomial coefficient of two integers `n` and `k`.\n\nUse `Number.isNaN()` to check if any of the two values is `NaN`.\nCheck if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.\nCheck if `n - k` is less than `k` and switch their values accordingly.\nLoop from `2` through `k` and calculate the binomial coefficient.\nUse `Math.round()` to account for rounding errors in the calculation"
  },
  bottomVisible: {
    prefix: "30s_bottomVisible",
    body: [
      "const bottomVisible = () =>",
      "  document.documentElement.clientHeight + window.scrollY >=",
      "  (document.documentElement.scrollHeight || document.documentElement.clientHeight);"
    ],
    description: "Returns `true` if the bottom of the page is visible, `false` otherwise.\n\nUse `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible"
  },
  btoa: {
    prefix: "30s_btoa",
    body: [
      "const btoa = str => Buffer.from(str, 'binary').toString('base64');"
    ],
    description: "Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.\n\nCreate a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string"
  },
  byteSize: {
    prefix: "30s_byteSize",
    body: [
      "const byteSize = str => new Blob([str]).size;"
    ],
    description: "Returns the length of a string in bytes.\n\nConvert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`"
  },
  call: {
    prefix: "30s_call",
    body: [
      "const call = (key, ...args) => context => context[key](...args);"
    ],
    description: "Given a key and a set of arguments, call them when given a context. Primarily useful in composition."
  },
  capitalize: {
    prefix: "30s_capitalize",
    body: [
      "const capitalize = ([first, ...rest], lowerRest = false) =>",
      "  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));"
    ],
    description: "Capitalizes the first letter of a string.\n\nUse array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase"
  },
  capitalizeEveryWord: {
    prefix: "30s_capitalizeEveryWord",
    body: [
      "const capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase());"
    ],
    description: "Capitalizes the first letter of every word in a string.\n\nUse `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it"
  },
  castArray: {
    prefix: "30s_castArray",
    body: [
      "const castArray = val => (Array.isArray(val) ? val : [val]);"
    ],
    description: "Casts the provided value as an array if it's not one.\n\nUse `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly"
  },
  chainAsync: {
    prefix: "30s_chainAsync",
    body: [
      "const chainAsync = fns => {",
      "  let curr = 0;",
      "  const next = () => fns[curr++](next);",
      "  next();",
      "};"
    ],
    description: "Chains asynchronous functions.\n\nLoop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed"
  },
  chunk: {
    prefix: "30s_chunk",
    body: [
      "const chunk = (arr, size) =>",
      "  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>",
      "    arr.slice(i * size, i * size + size)",
      "  );"
    ],
    description: "Chunks an array into smaller arrays of a specified size.\n\nUse `Array.from()` to create a new array, that fits the number of chunks that will be produced.\nUse `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.\nIf the original array can't be split evenly, the final chunk will contain the remaining elements"
  },
  clampNumber: {
    prefix: "30s_clampNumber",
    body: [
      "const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));"
    ],
    description: "Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.\n\nIf `num` falls within the range, return `num`.\nOtherwise, return the nearest number in the range"
  },
  cloneRegExp: {
    prefix: "30s_cloneRegExp",
    body: [
      "const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);"
    ],
    description: "Clones a regular expression.\n\nUse `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression"
  },
  coalesce: {
    prefix: "30s_coalesce",
    body: [
      "const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));"
    ],
    description: "Returns the first non-null/undefined argument.\n\nUse `Array.prototype.find()` to return the first non `null`/`undefined` argument"
  },
  coalesceFactory: {
    prefix: "30s_coalesceFactory",
    body: [
      "const coalesceFactory = valid => (...args) => args.find(valid);"
    ],
    description: "Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.\n\nUse `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function"
  },
  collectInto: {
    prefix: "30s_collectInto",
    body: [
      "const collectInto = fn => (...args) => fn(args);"
    ],
    description: "Changes a function that accepts an array into a variadic function."
  },
  colorize: {
    prefix: "30s_colorize",
    body: [
      "const colorize = (...args) => ({",
      "  black: `\\x1b[30m${args.join(' ')}`,",
      "  red: `\\x1b[31m${args.join(' ')}`,",
      "  green: `\\x1b[32m${args.join(' ')}`,",
      "  yellow: `\\x1b[33m${args.join(' ')}`,",
      "  blue: `\\x1b[34m${args.join(' ')}`,",
      "  magenta: `\\x1b[35m${args.join(' ')}`,",
      "  cyan: `\\x1b[36m${args.join(' ')}`,",
      "  white: `\\x1b[37m${args.join(' ')}`,",
      "  bgBlack: `\\x1b[40m${args.join(' ')}\\x1b[0m`,",
      "  bgRed: `\\x1b[41m${args.join(' ')}\\x1b[0m`,",
      "  bgGreen: `\\x1b[42m${args.join(' ')}\\x1b[0m`,",
      "  bgYellow: `\\x1b[43m${args.join(' ')}\\x1b[0m`,",
      "  bgBlue: `\\x1b[44m${args.join(' ')}\\x1b[0m`,",
      "  bgMagenta: `\\x1b[45m${args.join(' ')}\\x1b[0m`,",
      "  bgCyan: `\\x1b[46m${args.join(' ')}\\x1b[0m`,",
      "  bgWhite: `\\x1b[47m${args.join(' ')}\\x1b[0m`",
      "});"
    ],
    description: "Add special characters to text to print in color in the console (combined with `console.log()`).\n\nUse template literals and special characters to add the appropriate color code to the string output.\nFor background colors, add a special character that resets the background color at the end of the string"
  },
  compact: {
    prefix: "30s_compact",
    body: [
      "const compact = arr => arr.filter(Boolean);"
    ],
    description: "Removes falsey values from an array.\n\nUse `Array.prototype.filter()` to filter out falsey values (`false`, `null`, `0`, `\"\"`, `undefined`, and `NaN`)"
  },
  compose: {
    prefix: "30s_compose",
    body: [
      "const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));"
    ],
    description: "Performs right-to-left function composition.\n\nUse `Array.prototype.reduce()` to perform right-to-left function composition.\nThe last (rightmost) function can accept one or more arguments; the remaining functions must be unary"
  },
  composeRight: {
    prefix: "30s_composeRight",
    body: [
      "const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));"
    ],
    description: "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary"
  },
  converge: {
    prefix: "30s_converge",
    body: [
      "const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));"
    ],
    description: "Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.\nUse the spread operator (`...`) to call `coverger` with the results of all other functions"
  },
  copyToClipboard: {
    prefix: "30s_copyToClipboard",
    body: [
      "const copyToClipboard = str => {",
      "  const el = document.createElement('textarea');",
      "  el.value = str;",
      "  el.setAttribute('readonly', '');",
      "  el.style.position = 'absolute';",
      "  el.style.left = '-9999px';",
      "  document.body.appendChild(el);",
      "  const selected =",
      "    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;",
      "  el.select();",
      "  document.execCommand('copy');",
      "  document.body.removeChild(el);",
      "  if (selected) {",
      "    document.getSelection().removeAllRanges();",
      "    document.getSelection().addRange(selected);",
      "  }",
      "};"
    ],
    description: "⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).\n\nCopy a string to the clipboard. \nOnly works as a result of user action (i.e. inside a `click` event listener).\n\nCreate a new `<textarea>` element, fill it with the supplied data and add it to the HTML document.\nUse `Selection.getRangeAt()`to store the selected range (if any).\nUse `document.execCommand('copy')` to copy to the clipboard.\nRemove the `<textarea>` element from the HTML document.\nFinally, use `Selection().addRange()` to recover the original selected range (if any)"
  },
  countBy: {
    prefix: "30s_countBy",
    body: [
      "const countBy = (arr, fn) =>",
      "  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {",
      "    acc[val] = (acc[val] || 0) + 1;",
      "    return acc;",
      "  }, {});"
    ],
    description: "Groups the elements of an array based on the given function and returns the count of elements in each group.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results"
  },
  counter: {
    prefix: "30s_counter",
    body: [
      "const counter = (selector, start, end, step = 1, duration = 2000) => {",
      "  let current = start,",
      "    _step = (end - start) * step < 0 ? -step : step,",
      "    timer = setInterval(() => {",
      "      current += _step;",
      "      document.querySelector(selector).innerHTML = current;",
      "      if (current >= end) document.querySelector(selector).innerHTML = end;",
      "      if (current >= end) clearInterval(timer);",
      "    }, Math.abs(Math.floor(duration / (end - start))));",
      "  return timer;",
      "};"
    ],
    description: "Creates a counter with the specified range, step and duration for the specified selector.\n\nCheck if `step` has the proper sign and change it accordingly.\nUse `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.\nUse `document.querySelector().innerHTML` to update the value of the selected element.\nOmit the fourth parameter, `step`, to use a default step of `1`.\nOmit the fifth parameter, `duration`, to use a default duration of `2000`ms"
  },
  countOccurrences: {
    prefix: "30s_countOccurrences",
    body: [
      "const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);"
    ],
    description: "Counts the occurrences of a value in an array.\n\nUse `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array"
  },
  createElement: {
    prefix: "30s_createElement",
    body: [
      "const createElement = str => {",
      "  const el = document.createElement('div');",
      "  el.innerHTML = str;",
      "  return el.firstElementChild;",
      "};"
    ],
    description: "Creates an element from a string (without appending it to the document). \nIf the given string contains multiple elements, only the first one will be returned.\n\nUse `document.createElement()` to create a new element.\nSet its `innerHTML` to the string supplied as the argument. \nUse `ParentNode.firstElementChild` to return the element version of the string"
  },
  createEventHub: {
    prefix: "30s_createEventHub",
    body: [
      "const createEventHub = () => ({",
      "  hub: Object.create(null),",
      "  emit(event, data) {",
      "    (this.hub[event] || []).forEach(handler => handler(data));",
      "  },",
      "  on(event, handler) {",
      "    if (!this.hub[event]) this.hub[event] = [];",
      "    this.hub[event].push(handler);",
      "  },",
      "  off(event, handler) {",
      "    const i = (this.hub[event] || []).findIndex(h => h === handler);",
      "    if (i > -1) this.hub[event].splice(i, 1);",
      "  }",
      "});"
    ],
    description: "Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.\n\nUse `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.\nFor `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.\nFor `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler\nto the array.\nFor `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`"
  },
  CSVToArray: {
    prefix: "30s_CSVToArray",
    body: [
      "const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>",
      "  data",
      "    .slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0)",
      "    .split('\\n')",
      "    .map(v => v.split(delimiter));"
    ],
    description: "Converts a comma-separated values (CSV) string to a 2D array.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` to remove the first row (title row) if `omitFirstRow` is `true`.\nUse `String.prototype.split('\\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\nOmit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string"
  },
  CSVToJSON: {
    prefix: "30s_CSVToJSON",
    body: [
      "const CSVToJSON = (data, delimiter = ',') => {",
      "  const titles = data.slice(0, data.indexOf('\\n')).split(delimiter);",
      "  return data",
      "    .slice(data.indexOf('\\n') + 1)",
      "    .split('\\n')",
      "    .map(v => {",
      "      const values = v.split(delimiter);",
      "      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});",
      "    });",
      "};"
    ],
    description: "Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.\nUse `String.prototype.split('\\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.\nUse `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`"
  },
  currentURL: {
    prefix: "30s_currentURL",
    body: [
      "const currentURL = () => window.location.href;"
    ],
    description: "Returns the current URL.\n\nUse `window.location.href` to get current URL"
  },
  curry: {
    prefix: "30s_curry",
    body: [
      "const curry = (fn, arity = fn.length, ...args) =>",
      "  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);"
    ],
    description: "Curries a function.\n\nUse recursion.\nIf the number of provided arguments (`args`) is sufficient, call the passed function `fn`.\nOtherwise, return a curried function `fn` that expects the rest of the arguments.\nIf you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`"
  },
  dayOfYear: {
    prefix: "30s_dayOfYear",
    body: [
      "const dayOfYear = date =>",
      "  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);"
    ],
    description: "Gets the day of the year from a `Date` object.\n\nUse `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.\nUse `Math.floor()` to appropriately round the resulting day count to an integer"
  },
  debounce: {
    prefix: "30s_debounce",
    body: [
      "const debounce = (fn, ms = 0) => {",
      "  let timeoutId;",
      "  return function(...args) {",
      "    clearTimeout(timeoutId);",
      "    timeoutId = setTimeout(() => fn.apply(this, args), ms);",
      "  };",
      "};"
    ],
    description: "Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.\n\nEach time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.\nOmit the second argument, `ms`, to set the timeout at a default of 0 ms"
  },
  decapitalize: {
    prefix: "30s_decapitalize",
    body: [
      "const decapitalize = ([first, ...rest], upperRest = false) =>",
      "  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));"
    ],
    description: "Decapitalizes the first letter of a string.\n\nUse array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase"
  },
  deepClone: {
    prefix: "30s_deepClone",
    body: [
      "const deepClone = obj => {",
      "  let clone = Object.assign({}, obj);",
      "  Object.keys(clone).forEach(",
      "    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])",
      "  );",
      "  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;",
      "};"
    ],
    description: "Creates a deep clone of an object.\n\nUse recursion.\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\nUse `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned"
  },
  deepFlatten: {
    prefix: "30s_deepFlatten",
    body: [
      "const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));"
    ],
    description: "Deep flattens an array.\n\nUse recursion.\nUse `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.\nRecursively flatten each element that is an array"
  },
  deepFreeze: {
    prefix: "30s_deepFreeze",
    body: [
      "const deepFreeze = obj =>",
      "  Object.keys(obj).forEach(",
      "    prop =>",
      "      !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])",
      "  ) || Object.freeze(obj);"
    ],
    description: "Deep freezes an object.\n\nCalls `Object.freeze(obj)` recursively on all unfrozen properties of passed object that are `instanceof` object"
  },
  defaults: {
    prefix: "30s_defaults",
    body: [
      "const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);"
    ],
    description: "Assigns default values for all properties in an object that are `undefined`.\n\nUse `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.prototype.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value"
  },
  defer: {
    prefix: "30s_defer",
    body: [
      "const defer = (fn, ...args) => setTimeout(fn, 1, ...args);"
    ],
    description: "Defers invoking a function until the current call stack has cleared.\n\nUse `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments"
  },
  degreesToRads: {
    prefix: "30s_degreesToRads",
    body: [
      "const degreesToRads = deg => (deg * Math.PI) / 180.0;"
    ],
    description: "Converts an angle from degrees to radians.\n\nUse `Math.PI` and the degree to radian formula to convert the angle from degrees to radians"
  },
  delay: {
    prefix: "30s_delay",
    body: [
      "const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);"
    ],
    description: "Invokes the provided function after `wait` milliseconds.\n\nUse `setTimeout()` to delay execution of `fn`.\nUse the spread (`...`) operator to supply the function with an arbitrary number of arguments"
  },
  detectDeviceType: {
    prefix: "30s_detectDeviceType",
    body: [
      "const detectDeviceType = () =>",
      "  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)",
      "    ? 'Mobile'",
      "    : 'Desktop';"
    ],
    description: "Detects wether the website is being opened in a mobile device or a desktop/laptop.\n\nUse a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop/laptop"
  },
  difference: {
    prefix: "30s_difference",
    body: [
      "const difference = (a, b) => {",
      "  const s = new Set(b);",
      "  return a.filter(x => !s.has(x));",
      "};"
    ],
    description: "Returns the difference between two arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`"
  },
  differenceBy: {
    prefix: "30s_differenceBy",
    body: [
      "const differenceBy = (a, b, fn) => {",
      "  const s = new Set(b.map(fn));",
      "  return a.filter(x => !s.has(fn(x)));",
      "};"
    ],
    description: "Returns the difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each element in `b`, then use `Array.prototype.filter()` in combination with `fn` on `a` to only keep values not contained in the previously created set"
  },
  differenceWith: {
    prefix: "30s_differenceWith",
    body: [
      "const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);"
    ],
    description: "Filters out all values from an array for which the comparator function does not return `true`.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values"
  },
  dig: {
    prefix: "30s_dig",
    body: [
      "const dig = (obj, target) =>",
      "  target in obj",
      "    ? obj[target]",
      "    : Object.values(obj).reduce((acc, val) => {",
      "      if (acc !== undefined) return acc;",
      "      if (typeof val === 'object') return dig(val, target);",
      "    }, undefined);"
    ],
    description: "Returns the target value in a nested JSON object, based on the given key.\n\nUse the `in` operator to check if `target` exists in `obj`.\nIf found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found"
  },
  digitize: {
    prefix: "30s_digitize",
    body: [
      "const digitize = n => [...`${n}`].map(i => parseInt(i));"
    ],
    description: "Converts a number to an array of digits.\n\nConvert the number to a string, using the spread operator (`...`) to build an array.\nUse `Array.prototype.map()` and `parseInt()` to transform each value to an integer"
  },
  distance: {
    prefix: "30s_distance",
    body: [
      "const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);"
    ],
    description: "Returns the distance between two points.\n\nUse `Math.hypot()` to calculate the Euclidean distance between two points"
  },
  drop: {
    prefix: "30s_drop",
    body: [
      "const drop = (arr, n = 1) => arr.slice(n);"
    ],
    description: "Returns a new array with `n` elements removed from the left.\n\nUse `Array.prototype.slice()` to slice the remove the specified number of elements from the left"
  },
  dropRight: {
    prefix: "30s_dropRight",
    body: [
      "const dropRight = (arr, n = 1) => arr.slice(0, -n);"
    ],
    description: "Returns a new array with `n` elements removed from the right.\n\nUse `Array.prototype.slice()` to slice the remove the specified number of elements from the right"
  },
  dropRightWhile: {
    prefix: "30s_dropRightWhile",
    body: [
      "const dropRightWhile = (arr, func) => {",
      "  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);",
      "  return arr;",
      "};"
    ],
    description: "Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.\nReturns the remaining elements"
  },
  dropWhile: {
    prefix: "30s_dropWhile",
    body: [
      "const dropWhile = (arr, func) => {",
      "  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);",
      "  return arr;",
      "};"
    ],
    description: "Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.\nReturns the remaining elements"
  },
  elementContains: {
    prefix: "30s_elementContains",
    body: [
      "const elementContains = (parent, child) => parent !== child && parent.contains(child);"
    ],
    description: "Returns `true` if the `parent` element contains the `child` element, `false` otherwise.\n\nCheck that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element"
  },
  elementIsVisibleInViewport: {
    prefix: "30s_elementIsVisibleInViewport",
    body: [
      "const elementIsVisibleInViewport = (el, partiallyVisible = false) => {",
      "  const { top, left, bottom, right } = el.getBoundingClientRect();",
      "  const { innerHeight, innerWidth } = window;",
      "  return partiallyVisible",
      "    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&",
      "        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))",
      "    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;",
      "};"
    ],
    description: "Returns `true` if the element specified is visible in the viewport, `false` otherwise.\n\nUse `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values\nto determine if a given element is visible in the viewport.\nOmit the second argument to determine if the element is entirely visible, or specify `true` to determine if\nit is partially visible"
  },
  elo: {
    prefix: "30s_elo",
    body: [
      "const elo = ([...ratings], kFactor = 32, selfRating) => {",
      "  const [a, b] = ratings;",
      "  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));",
      "  const newRating = (rating, i) =>",
      "    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));",
      "  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];",
      "",
      "  for (let i = 0, len = ratings.length; i < len; i++) {",
      "    let j = i;",
      "    while (j < len - 1) {",
      "      j++;",
      "      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);",
      "    }",
      "  }",
      "  return ratings;",
      "};"
    ],
    description: "Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser).\n\nUse the exponent `**` operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. \nOmit the second argument to use the default `kFactor` of 32"
  },
  equals: {
    prefix: "30s_equals",
    body: [
      "const equals = (a, b) => {",
      "  if (a === b) return true;",
      "  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();",
      "  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;",
      "  if (a === null || a === undefined || b === null || b === undefined) return false;",
      "  if (a.prototype !== b.prototype) return false;",
      "  let keys = Object.keys(a);",
      "  if (keys.length !== Object.keys(b).length) return false;",
      "  return keys.every(k => equals(a[k], b[k]));",
      "};"
    ],
    description: "Performs a deep comparison between two values to determine if they are equivalent.\n\nCheck if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).\nCheck if only one value is `null` or `undefined` or if their prototypes differ.\nIf none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively"
  },
  escapeHTML: {
    prefix: "30s_escapeHTML",
    body: [
      "const escapeHTML = str =>",
      "  str.replace(",
      "    /[&<>'\"]/g,",
      "    tag =>",
      "      ({",
      "        '&': '&amp;',",
      "        '<': '&lt;',",
      "        '>': '&gt;',",
      "        \'\: '&#39;',",
      "        '\"': '&quot;'",
      "      }[tag] || tag)",
      "  );"
    ],
    description: "Escapes a string for use in HTML.\n\nUse `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object)"
  },
  escapeRegExp: {
    prefix: "30s_escapeRegExp",
    body: [
      "const escapeRegExp = str => str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');"
    ],
    description: "Escapes a string to use in a regular expression.\n\nUse `String.prototype.replace()` to escape special characters"
  },
  everyNth: {
    prefix: "30s_everyNth",
    body: [
      "const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);"
    ],
    description: "Returns every nth element in an array.\n\nUse `Array.prototype.filter()` to create a new array that contains every nth element of a given array"
  },
  extendHex: {
    prefix: "30s_extendHex",
    body: [
      "const extendHex = shortHex =>",
      "  '#' +",
      "  shortHex",
      "    .slice(shortHex.startsWith('#') ? 1 : 0)",
      "    .split('')",
      "    .map(x => x + x)",
      "    .join('');"
    ],
    description: "Extends a 3-digit color code to a 6-digit color code.\n\nUse `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.\n`Array.prototype.slice()` is used to remove `#` from string start since it's added once"
  },
  factorial: {
    prefix: "30s_factorial",
    body: [
      "const factorial = n =>",
      "  n < 0",
      "    ? (() => {",
      "      throw new TypeError('Negative numbers are not allowed!');",
      "    })()",
      "    : n <= 1",
      "      ? 1",
      "      : n * factorial(n - 1);"
    ],
    description: "Calculates the factorial of a number.\n\nUse recursion.\nIf `n` is less than or equal to `1`, return `1`.\nOtherwise, return the product of `n` and the factorial of `n - 1`.\nThrows an exception if `n` is a negative number"
  },
  fibonacci: {
    prefix: "30s_fibonacci",
    body: [
      "const fibonacci = n =>",
      "  Array.from({ length: n }).reduce(",
      "    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),",
      "    []",
      "  );"
    ],
    description: "Generates an array, containing the Fibonacci sequence, up until the nth term.\n\nCreate an empty array of the specific length, initializing the first two values (`0` and `1`).\nUse `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two"
  },
  filterNonUnique: {
    prefix: "30s_filterNonUnique",
    body: [
      "const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));"
    ],
    description: "Filters out the non-unique values in an array.\n\nUse `Array.prototype.filter()` for an array containing only the unique values"
  },
  filterNonUniqueBy: {
    prefix: "30s_filterNonUniqueBy",
    body: [
      "const filterNonUniqueBy = (arr, fn) =>",
      "  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));"
    ],
    description: "Filters out the non-unique values in an array, based on a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.\nThe comparator function takes four arguments: the values of the two elements being compared and their indexes"
  },
  findKey: {
    prefix: "30s_findKey",
    body: [
      "const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));"
    ],
    description: "Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object"
  },
  findLast: {
    prefix: "30s_findLast",
    body: [
      "const findLast = (arr, fn) => arr.filter(fn).pop();"
    ],
    description: "Returns the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsey values, `Array.prototype.pop()` to get the last one"
  },
  findLastIndex: {
    prefix: "30s_findLastIndex",
    body: [
      "const findLastIndex = (arr, fn) =>",
      "  arr",
      "    .map((val, i) => [i, val])",
      "    .filter(([i, val]) => fn(val, i, arr))",
      "    .pop()[0];"
    ],
    description: "Returns the index of the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.map()` to map each element to an array with its index and value.\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsey values, `Array.prototype.pop()` to get the last one"
  },
  findLastKey: {
    prefix: "30s_findLastKey",
    body: [
      "const findLastKey = (obj, fn) =>",
      "  Object.keys(obj)",
      "    .reverse()",
      "    .find(key => fn(obj[key], key, obj));"
    ],
    description: "Returns the last key that satisfies the provided testing function.\nOtherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.\nThe callback receives three arguments - the value, the key and the object"
  },
  flatten: {
    prefix: "30s_flatten",
    body: [
      "const flatten = (arr, depth = 1) =>",
      "  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);"
    ],
    description: "Flattens an array up to the specified depth.\n\nUse recursion, decrementing `depth` by 1 for each level of depth.\nUse `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.\nBase case, for `depth` equal to `1` stops recursion.\nOmit the second argument, `depth` to flatten only to a depth of `1` (single flatten)"
  },
  flattenObject: {
    prefix: "30s_flattenObject",
    body: [
      "const flattenObject = (obj, prefix = '') =>",
      "  Object.keys(obj).reduce((acc, k) => {",
      "    const pre = prefix.length ? prefix + '.' : '';",
      "    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));",
      "    else acc[pre + k] = obj[k];",
      "    return acc;",
      "  }, {});"
    ],
    description: "Flatten an object with the paths for keys.\n\nUse recursion.\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.\nIf the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.\nOtherwise, it adds the appropriate prefixed key-value pair to the accumulator object.\nYou should always omit the second argument, `prefix`, unless you want every key to have a prefix"
  },
  flip: {
    prefix: "30s_flip",
    body: [
      "const flip = fn => (first, ...rest) => fn(...rest, first);"
    ],
    description: "Flip takes a function as an argument, then makes the first argument the last."
  },
  forEachRight: {
    prefix: "30s_forEachRight",
    body: [
      "const forEachRight = (arr, callback) =>",
      "  arr",
      "    .slice(0)",
      "    .reverse()",
      "    .forEach(callback);"
    ],
    description: "Executes a provided function once for each array element, starting from the array's last element.\n\nUse `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array"
  },
  formatDuration: {
    prefix: "30s_formatDuration",
    body: [
      "const formatDuration = ms => {",
      "  if (ms < 0) ms = -ms;",
      "  const time = {",
      "    day: Math.floor(ms / 86400000),",
      "    hour: Math.floor(ms / 3600000) % 24,",
      "    minute: Math.floor(ms / 60000) % 60,",
      "    second: Math.floor(ms / 1000) % 60,",
      "    millisecond: Math.floor(ms) % 1000",
      "  };",
      "  return Object.entries(time)",
      "    .filter(val => val[1] !== 0)",
      "    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)",
      "    .join(', ');",
      "};"
    ],
    description: "Returns the human readable format of the given number of milliseconds.\n\nDivide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.\nUse `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.\nUse `Array.prototype.map()` to create the string for each value, pluralizing appropriately.\nUse `String.prototype.join(', ')` to combine the values into a string"
  },
  forOwn: {
    prefix: "30s_forOwn",
    body: [
      "const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));"
    ],
    description: "Iterates over all own properties of an object, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object"
  },
  forOwnRight: {
    prefix: "30s_forOwnRight",
    body: [
      "const forOwnRight = (obj, fn) =>",
      "  Object.keys(obj)",
      "    .reverse()",
      "    .forEach(key => fn(obj[key], key, obj));"
    ],
    description: "Iterates over all own properties of an object in reverse, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object"
  },
  fromCamelCase: {
    prefix: "30s_fromCamelCase",
    body: [
      "const fromCamelCase = (str, separator = '_') =>",
      "  str",
      "    .replace(/([a-z\\d])([A-Z])/g, '$1' + separator + '$2')",
      "    .replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + separator + '$2')",
      "    .toLowerCase();"
    ],
    description: "Converts a string from camelcase.\n\nUse `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.\nOmit the second argument to use a default `separator` of `_`"
  },
  functionName: {
    prefix: "30s_functionName",
    body: [
      "const functionName = fn => (console.debug(fn.name), fn);"
    ],
    description: "Logs the name of a function.\n\nUse `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console"
  },
  functions: {
    prefix: "30s_functions",
    body: [
      "const functions = (obj, inherited = false) =>",
      "  (inherited",
      "    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]",
      "    : Object.keys(obj)",
      "  ).filter(key => typeof obj[key] === 'function');"
    ],
    description: "Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.\n\nUse `Object.keys(obj)` to iterate over the object's own properties.\nIf `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.\nUse `Array.prototype.filter()` to keep only those properties that are functions.\nOmit the second argument, `inherited`, to not include inherited properties by default"
  },
  gcd: {
    prefix: "30s_gcd",
    body: [
      "const gcd = (...arr) => {",
      "  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));",
      "  return [...arr].reduce((a, b) => _gcd(a, b));",
      "};"
    ],
    description: "Calculates the greatest common divisor between two or more numbers/arrays.\n\nThe inner `_gcd` function uses recursion.\nBase case is when `y` equals `0`. In this case, return `x`.\nOtherwise, return the GCD of `y` and the remainder of the division `x/y`"
  },
  geometricProgression: {
    prefix: "30s_geometricProgression",
    body: [
      "const geometricProgression = (end, start = 1, step = 2) =>",
      "  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(",
      "    (v, i) => start * step ** i",
      "  );"
    ],
    description: "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.\nReturns an error if `step` equals `1`.\n\nUse `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.\nOmit the second argument, `start`, to use a default value of `1`.\nOmit the third argument, `step`, to use a default value of `2`"
  },
  get: {
    prefix: "30s_get",
    body: [
      "const get = (from, ...selectors) =>",
      "  [...selectors].map(s =>",
      "    s",
      "      .replace(/\\[([^\\[\\]]*)\\]/g, '.$1.')",
      "      .split('.')",
      "      .filter(t => t !== '')",
      "      .reduce((prev, cur) => prev && prev[cur], from)",
      "  );"
    ],
    description: "Retrieve a set of properties indicated by the given selectors from an object.\n\nUse `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it"
  },
  getColonTimeFromDate: {
    prefix: "30s_getColonTimeFromDate",
    body: [
      "const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);"
    ],
    description: "Returns a string of the form `HH:MM:SS` from a `Date` object.\n\nUse `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object"
  },
  getDaysDiffBetweenDates: {
    prefix: "30s_getDaysDiffBetweenDates",
    body: [
      "const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>",
      "  (dateFinal - dateInitial) / (1000 * 3600 * 24);"
    ],
    description: "Returns the difference (in days) between two dates.\n\nCalculate the difference (in days) between two `Date` objects"
  },
  getImages: {
    prefix: "30s_getImages",
    body: [
      "const getImages = (el, includeDuplicates = false) => {",
      "  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));",
      "  return includeDuplicates ? images : [...new Set(images)];",
      "};"
    ],
    description: "Fetches all images from within an element and puts them into an array\n\nUse `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array"
  },
  getMeridiemSuffixOfInteger: {
    prefix: "30s_getMeridiemSuffixOfInteger",
    body: [
      "const getMeridiemSuffixOfInteger = num =>",
      "  num === 0 || num === 24",
      "    ? 12 + 'am'",
      "    : num === 12",
      "      ? 12 + 'pm'",
      "      : num < 12",
      "        ? (num % 12) + 'am'",
      "        : (num % 12) + 'pm';"
    ],
    description: "Converts an integer to a suffixed string, adding `am` or `pm` based on its value.\n\nUse the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix"
  },
  getScrollPosition: {
    prefix: "30s_getScrollPosition",
    body: [
      "const getScrollPosition = (el = window) => ({",
      "  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,",
      "  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop",
      "});"
    ],
    description: "Returns the scroll position of the current page.\n\nUse `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.\nYou can omit `el` to use a default value of `window`"
  },
  getStyle: {
    prefix: "30s_getStyle",
    body: [
      "const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];"
    ],
    description: "Returns the value of a CSS rule for the specified element.\n\nUse `Window.getComputedStyle()` to get the value of the CSS rule for the specified element"
  },
  getType: {
    prefix: "30s_getType",
    body: [
      "const getType = v =>",
      "  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();"
    ],
    description: "Returns the native type of a value.\n\nReturns lowercased constructor name of value, `\"undefined\"` or `\"null\"` if value is `undefined` or `null`"
  },
  getURLParameters: {
    prefix: "30s_getURLParameters",
    body: [
      "const getURLParameters = url =>",
      "  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(",
      "    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),",
      "    {}",
      "  );"
    ],
    description: "Returns an object containing the parameters of the current URL.\n\nUse `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.\nPass `location.search` as the argument to apply to the current `url`"
  },
  groupBy: {
    prefix: "30s_groupBy",
    body: [
      "const groupBy = (arr, fn) =>",
      "  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {",
      "    acc[val] = (acc[val] || []).concat(arr[i]);",
      "    return acc;",
      "  }, {});"
    ],
    description: "Groups the elements of an array based on the given function.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results"
  },
  hammingDistance: {
    prefix: "30s_hammingDistance",
    body: [
      "const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;"
    ],
    description: "Calculates the Hamming distance between two values.\n\nUse XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.\nCount and return the number of `1`s in the string, using `match(/1/g)`"
  },
  hasClass: {
    prefix: "30s_hasClass",
    body: [
      "const hasClass = (el, className) => el.classList.contains(className);"
    ],
    description: "Returns `true` if the element has the specified class, `false` otherwise.\n\nUse `element.classList.contains()` to check if the element has the specified class"
  },
  hasFlags: {
    prefix: "30s_hasFlags",
    body: [
      "const hasFlags = (...flags) =>",
      "  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));"
    ],
    description: "Check if the current process's arguments contain the specified flags.\n\nUse `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.\nUse a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly"
  },
  hashBrowser: {
    prefix: "30s_hashBrowser",
    body: [
      "const hashBrowser = val =>",
      "  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {",
      "    let hexes = [],",
      "      view = new DataView(h);",
      "    for (let i = 0; i < view.byteLength; i += 4)",
      "      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));",
      "    return hexes.join('');",
      "  });"
    ],
    description: "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to create a hash for the given value"
  },
  hashNode: {
    prefix: "30s_hashNode",
    body: [
      "const crypto = require('crypto');",
      "const hashNode = val =>",
      "  new Promise(resolve =>",
      "    setTimeout(",
      "      () =>",
      "        resolve(",
      "          crypto",
      "            .createHash('sha256')",
      "            .update(val)",
      "            .digest('hex')",
      "        ),",
      "      0",
      "    )",
      "  );"
    ],
    description: "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse `crypto` API to create a hash for the given value"
  },
  head: {
    prefix: "30s_head",
    body: [
      "const head = arr => arr[0];"
    ],
    description: "Returns the head of a list.\n\nUse `arr[0]` to return the first element of the passed array"
  },
  hexToRGB: {
    prefix: "30s_hexToRGB",
    body: [
      "const hexToRGB = hex => {",
      "  let alpha = false,",
      "    h = hex.slice(hex.startsWith('#') ? 1 : 0);",
      "  if (h.length === 3) h = [...h].map(x => x + x).join('');",
      "  else if (h.length === 8) alpha = true;",
      "  h = parseInt(h, 16);",
      "  return (",
      "    'rgb' +",
      "    (alpha ? 'a' : '') +",
      "    '(' +",
      "    (h >>> (alpha ? 24 : 16)) +",
      "    ', ' +",
      "    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +",
      "    ', ' +",
      "    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +",
      "    (alpha ? `, ${h & 0x000000ff}` : '') +",
      "    ')'",
      "  );",
      "};"
    ],
    description: "Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.\n\nUse bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return"
  },
  hide: {
    prefix: "30s_hide",
    body: [
      "const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));"
    ],
    description: "Hides all the elements specified.\n\nUse `NodeList.prototype.forEach()` to apply `display: none` to each element specified"
  },
  httpGet: {
    prefix: "30s_httpGet",
    body: [
      "const httpGet = (url, callback, err = console.error) => {",
      "  const request = new XMLHttpRequest();",
      "  request.open('GET', url, true);",
      "  request.onload = () => callback(request.responseText);",
      "  request.onerror = () => err(request);",
      "  request.send();",
      "};"
    ],
    description: "Makes a `GET` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `err`, to log errors to the console's `error` stream by default"
  },
  httpPost: {
    prefix: "30s_httpPost",
    body: [
      "const httpPost = (url, data, callback, err = console.error) => {",
      "  const request = new XMLHttpRequest();",
      "  request.open('POST', url, true);",
      "  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');",
      "  request.onload = () => callback(request.responseText);",
      "  request.onerror = () => err(request);",
      "  request.send(data);",
      "};"
    ],
    description: "Makes a `POST` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.\nSet the value of an `HTTP` request header with `setRequestHeader` method.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `data`, to send no data to the provided `url`.\nOmit the fourth argument, `err`, to log errors to the console's `error` stream by default"
  },
  httpsRedirect: {
    prefix: "30s_httpsRedirect",
    body: [
      "const httpsRedirect = () => {",
      "  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);",
      "};"
    ],
    description: "Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.\n\nUse `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL"
  },
  hz: {
    prefix: "30s_hz",
    body: [
      "const hz = (fn, iterations = 100) => {",
      "  const before = performance.now();",
      "  for (let i = 0; i < iterations; i++) fn();",
      "  return (1000 * iterations) / (performance.now() - before);",
      "};"
    ],
    description: "Returns the number of times a function executed per second. \n`hz` is the unit for `hertz`, the unit of frequency defined as one cycle per second.\n\nUse `performance.now()` to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function `iterations` times. \nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed. \nOmit the second argument, `iterations`, to use the default of 100 iterations"
  },
  indentString: {
    prefix: "30s_indentString",
    body: [
      "const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));"
    ],
    description: "Indents each line in the provided string.\n\nUse `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.\nOmit the third parameter, `indent`, to use a default indentation character of `' '`"
  },
  indexOfAll: {
    prefix: "30s_indexOfAll",
    body: [
      "const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);"
    ],
    description: "Returns all indices of `val` in an array.\nIf `val` never occurs, returns `[]`.\n\nUse `Array.prototype.reduce()` to loop over elements and store indices for matching elements.\nReturn the array of indices"
  },
  initial: {
    prefix: "30s_initial",
    body: [
      "const initial = arr => arr.slice(0, -1);"
    ],
    description: "Returns all the elements of an array except the last one.\n\nUse `arr.slice(0,-1)` to return all but the last element of the array"
  },
  initialize2DArray: {
    prefix: "30s_initialize2DArray",
    body: [
      "const initialize2DArray = (w, h, val = null) =>",
      "  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));"
    ],
    description: "Initializes a 2D array of given width and height and value.\n\nUse `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`"
  },
  initializeArrayWithRange: {
    prefix: "30s_initializeArrayWithRange",
    body: [
      "const initializeArrayWithRange = (end, start = 0, step = 1) =>",
      "  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);"
    ],
    description: "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`"
  },
  initializeArrayWithRangeRight: {
    prefix: "30s_initializeArrayWithRangeRight",
    body: [
      "const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>",
      "  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(",
      "    (v, i, arr) => (arr.length - i - 1) * step + start",
      "  );"
    ],
    description: "Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`"
  },
  initializeArrayWithValues: {
    prefix: "30s_initializeArrayWithValues",
    body: [
      "const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);"
    ],
    description: "Initializes and fills an array with the specified values.\n\nUse `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.\nYou can omit `val` to use a default value of `0`"
  },
  initializeNDArray: {
    prefix: "30s_initializeNDArray",
    body: [
      "const initializeNDArray = (val, ...args) =>",
      "  args.length === 0",
      "    ? val",
      "    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));"
    ],
    description: "Create a n-dimensional array with given value.\n\nUse recursion.\nUse `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`"
  },
  inRange: {
    prefix: "30s_inRange",
    body: [
      "const inRange = (n, start, end = null) => {",
      "  if (end && start > end) [end, start] = [start, end];",
      "  return end == null ? n >= 0 && n < start : n >= start && n < end;",
      "};"
    ],
    description: "Checks if the given number falls within the given range.\n\nUse arithmetic comparison to check if the given number is in the specified range.\nIf the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`"
  },
  insertAfter: {
    prefix: "30s_insertAfter",
    body: [
      "const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);"
    ],
    description: "Inserts an HTML string after the end of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`"
  },
  insertBefore: {
    prefix: "30s_insertBefore",
    body: [
      "const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);"
    ],
    description: "Inserts an HTML string before the start of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`"
  },
  intersection: {
    prefix: "30s_intersection",
    body: [
      "const intersection = (a, b) => {",
      "  const s = new Set(b);",
      "  return a.filter(x => s.has(x));",
      "};"
    ],
    description: "Returns a list of elements that exist in both arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`"
  },
  intersectionBy: {
    prefix: "30s_intersectionBy",
    body: [
      "const intersectionBy = (a, b, fn) => {",
      "  const s = new Set(b.map(fn));",
      "  return a.filter(x => s.has(fn(x)));",
      "};"
    ],
    description: "Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them"
  },
  intersectionWith: {
    prefix: "30s_intersectionWith",
    body: [
      "const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);"
    ],
    description: "Returns a list of elements that exist in both arrays, using a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values"
  },
  invertKeyValues: {
    prefix: "30s_invertKeyValues",
    body: [
      "const invertKeyValues = (obj, fn) =>",
      "  Object.keys(obj).reduce((acc, key) => {",
      "    const val = fn ? fn(obj[key]) : obj[key];",
      "    acc[val] = acc[val] || [];",
      "    acc[val].push(key);",
      "    return acc;",
      "  }, {});"
    ],
    description: "Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).\nOmit the second argument, `fn`, to get the inverted keys without applying a function to them"
  },
  is: {
    prefix: "30s_is",
    body: [
      "const is = (type, val) => ![, null].includes(val) && val.constructor === type;"
    ],
    description: "Checks if the provided value is of the specified type.\n\nEnsure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`"
  },
  isAbsoluteURL: {
    prefix: "30s_isAbsoluteURL",
    body: [
      "const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);"
    ],
    description: "Returns `true` if the given string is an absolute URL, `false` otherwise.\n\nUse a regular expression to test if the string is an absolute URL"
  },
  isAfterDate: {
    prefix: "30s_isAfterDate",
    body: [
      "const isAfterDate = (dateA, dateB) => dateA > dateB;"
    ],
    description: "Check if a date is after another date.\n\nUse the greater than operator (`>`) to check if the first date comes after the second one"
  },
  isAnagram: {
    prefix: "30s_isAnagram",
    body: [
      "const isAnagram = (str1, str2) => {",
      "  const normalize = str =>",
      "    str",
      "      .toLowerCase()",
      "      .replace(/[^a-z0-9]/gi, '')",
      "      .split('')",
      "      .sort()",
      "      .join('');",
      "  return normalize(str1) === normalize(str2);",
      "};"
    ],
    description: "Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).\n\nUse `String.toLowerCase()`, `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters, `String.prototype.split('')`, `Array.prototype.sort()` and `Array.prototype.join('')` on both strings to normalize them, then check if their normalized forms are equal"
  },
  isArrayLike: {
    prefix: "30s_isArrayLike",
    body: [
      "const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';"
    ],
    description: "Checks if the provided argument is array-like (i.e. is iterable).\n\nCheck if the provided argument is not `null` and that its `Symbol.iterator` property is a function"
  },
  isBeforeDate: {
    prefix: "30s_isBeforeDate",
    body: [
      "const isBeforeDate = (dateA, dateB) => dateA < dateB;"
    ],
    description: "Check if a date is before another date.\n\nUse the less than operator (`<`) to check if the first date comes before the second one"
  },
  isBoolean: {
    prefix: "30s_isBoolean",
    body: [
      "const isBoolean = val => typeof val === 'boolean';"
    ],
    description: "Checks if the given argument is a native boolean element.\n\nUse `typeof` to check if a value is classified as a boolean primitive"
  },
  isBrowser: {
    prefix: "30s_isBrowser",
    body: [
      "const isBrowser = () => ![typeof window, typeof document].includes('undefined');"
    ],
    description: "Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.\n\nUse `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.\n`typeof` allows globals to be checked for existence without throwing a `ReferenceError`.\nIf both of them are not `undefined`, then the current environment is assumed to be a browser"
  },
  isBrowserTabFocused: {
    prefix: "30s_isBrowserTabFocused",
    body: [
      "const isBrowserTabFocused = () => !document.hidden;"
    ],
    description: "Returns `true` if the browser tab of the page is focused, `false` otherwise.\n\nUse the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden"
  },
  isDivisible: {
    prefix: "30s_isDivisible",
    body: [
      "const isDivisible = (dividend, divisor) => dividend % divisor === 0;"
    ],
    description: "Checks if the first numeric argument is divisible by the second one.\n\nUse the modulo operator (`%`) to check if the remainder is equal to `0`"
  },
  isDuplexStream: {
    prefix: "30s_isDuplexStream",
    body: [
      "const isDuplexStream = val =>",
      "  val !== null &&",
      "  typeof val === 'object' &&",
      "  typeof val.pipe === 'function' &&",
      "  typeof val._read === 'function' &&",
      "  typeof val._readableState === 'object' &&",
      "  typeof val._write === 'function' &&",
      "  typeof val._writableState === 'object';"
    ],
    description: "Checks if the given argument is a duplex (readable and writable) stream.\n\nCheck if the value is different from `null`, use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively"
  },
  isEmpty: {
    prefix: "30s_isEmpty",
    body: [
      "const isEmpty = val => val == null || !(Object.keys(val) || val).length;"
    ],
    description: "Returns true if the a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.\n\nCheck if the provided value is `null` or if its `length` is equal to `0`"
  },
  isEven: {
    prefix: "30s_isEven",
    body: [
      "const isEven = num => num % 2 === 0;"
    ],
    description: "Returns `true` if the given number is even, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is even, `false` if the number is odd"
  },
  isFunction: {
    prefix: "30s_isFunction",
    body: [
      "const isFunction = val => typeof val === 'function';"
    ],
    description: "Checks if the given argument is a function.\n\nUse `typeof` to check if a value is classified as a function primitive"
  },
  isLowerCase: {
    prefix: "30s_isLowerCase",
    body: [
      "const isLowerCase = str => str === str.toLowerCase();"
    ],
    description: "Checks if a string is lower case.\n\nConvert the given string to lower case, using `String.toLowerCase()` and compare it to the original"
  },
  isNegativeZero: {
    prefix: "30s_isNegativeZero",
    body: [
      "const isNegativeZero = val => val === 0 && 1 / val === -Infinity;"
    ],
    description: "Checks if the given value is equal to negative zero (`-0`).\n\nChecks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`"
  },
  isNil: {
    prefix: "30s_isNil",
    body: [
      "const isNil = val => val === undefined || val === null;"
    ],
    description: "Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `null` or `undefined`"
  },
  isNull: {
    prefix: "30s_isNull",
    body: [
      "const isNull = val => val === null;"
    ],
    description: "Returns `true` if the specified value is `null`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `null`"
  },
  isNumber: {
    prefix: "30s_isNumber",
    body: [
      "const isNumber = val => typeof val === 'number';"
    ],
    description: "Checks if the given argument is a number.\n\nUse `typeof` to check if a value is classified as a number primitive"
  },
  isObject: {
    prefix: "30s_isObject",
    body: [
      "const isObject = obj => obj === Object(obj);"
    ],
    description: "Returns a boolean determining if the passed value is an object or not.\n\nUses the  `Object` constructor to create an object wrapper for the given value. \nIf the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value"
  },
  isObjectLike: {
    prefix: "30s_isObjectLike",
    body: [
      "const isObjectLike = val => val !== null && typeof val === 'object';"
    ],
    description: "Checks if a value is object-like.\n\nCheck if the provided value is not `null` and its `typeof` is equal to `'object'`"
  },
  isPlainObject: {
    prefix: "30s_isPlainObject",
    body: [
      "const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;"
    ],
    description: "Checks if the provided value is an object created by the Object constructor.\n\nCheck if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`"
  },
  isPrime: {
    prefix: "30s_isPrime",
    body: [
      "const isPrime = num => {",
      "  const boundary = Math.floor(Math.sqrt(num));",
      "  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;",
      "  return num >= 2;",
      "};"
    ],
    description: "Checks if the provided integer is a prime number.\n\nCheck numbers from `2` to the square root of the given number.\nReturn `false` if any of them divides the given number, else return `true`, unless the number is less than `2`"
  },
  isPrimitive: {
    prefix: "30s_isPrimitive",
    body: [
      "const isPrimitive = val => Object(val) !== val;"
    ],
    description: "Returns a boolean determining if the passed value is primitive or not.\n\nCreate an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object)"
  },
  isPromiseLike: {
    prefix: "30s_isPromiseLike",
    body: [
      "const isPromiseLike = obj =>",
      "  obj !== null &&",
      "  (typeof obj === 'object' || typeof obj === 'function') &&",
      "  typeof obj.then === 'function';"
    ],
    description: "Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.\n\nCheck if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`"
  },
  isReadableStream: {
    prefix: "30s_isReadableStream",
    body: [
      "const isReadableStream = val =>",
      "  val !== null &&",
      "  typeof val === 'object' &&",
      "  typeof val.pipe === 'function' &&",
      "  typeof val._read === 'function' &&",
      "  typeof val._readableState === 'object';"
    ],
    description: "Checks if the given argument is a readable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively"
  },
  isSameDate: {
    prefix: "30s_isSameDate",
    body: [
      "const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();"
    ],
    description: "Check if a date is the same as another date.\n\nUse `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one"
  },
  isSorted: {
    prefix: "30s_isSorted",
    body: [
      "const isSorted = arr => {",
      "  let direction = -(arr[0] - arr[1]);",
      "  for (let [i, val] of arr.entries()) {",
      "    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;",
      "    if (i === arr.length - 1) return !direction ? 0 : direction;",
      "    else if ((val - arr[i + 1]) * direction > 0) return 0;",
      "  }",
      "};"
    ],
    description: "Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.\n\nCalculate the ordering `direction` for the first two elements.\nUse `Object.entries()` to loop over array objects and compare them in pairs.\nReturn `0` if the `direction` changes or the `direction` if the last element is reached"
  },
  isStream: {
    prefix: "30s_isStream",
    body: [
      "const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';"
    ],
    description: "Checks if the given argument is a stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`"
  },
  isString: {
    prefix: "30s_isString",
    body: [
      "const isString = val => typeof val === 'string';"
    ],
    description: "Checks if the given argument is a string. Only works for string primitives.\n\nUse `typeof` to check if a value is classified as a string primitive"
  },
  isSymbol: {
    prefix: "30s_isSymbol",
    body: [
      "const isSymbol = val => typeof val === 'symbol';"
    ],
    description: "Checks if the given argument is a symbol.\n\nUse `typeof` to check if a value is classified as a symbol primitive"
  },
  isTravisCI: {
    prefix: "30s_isTravisCI",
    body: [
      "const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;"
    ],
    description: "Checks if the current environment is [Travis CI](https://travis-ci.org/).\n\nChecks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables))"
  },
  isUndefined: {
    prefix: "30s_isUndefined",
    body: [
      "const isUndefined = val => val === undefined;"
    ],
    description: "Returns `true` if the specified value is `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `undefined`"
  },
  isUpperCase: {
    prefix: "30s_isUpperCase",
    body: [
      "const isUpperCase = str => str === str.toUpperCase();"
    ],
    description: "Checks if a string is upper case.\n\nConvert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original"
  },
  isValidJSON: {
    prefix: "30s_isValidJSON",
    body: [
      "const isValidJSON = str => {",
      "  try {",
      "    JSON.parse(str);",
      "    return true;",
      "  } catch (e) {",
      "    return false;",
      "  }",
      "};"
    ],
    description: "Checks if the provided string is a valid JSON.\n\nUse `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON"
  },
  isWritableStream: {
    prefix: "30s_isWritableStream",
    body: [
      "const isWritableStream = val =>",
      "  val !== null &&",
      "  typeof val === 'object' &&",
      "  typeof val.pipe === 'function' &&",
      "  typeof val._write === 'function' &&",
      "  typeof val._writableState === 'object';"
    ],
    description: "Checks if the given argument is a writable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively"
  },
  join: {
    prefix: "30s_join",
    body: [
      "const join = (arr, separator = ',', end = separator) =>",
      "  arr.reduce(",
      "    (acc, val, i) =>",
      "      i === arr.length - 2",
      "        ? acc + val + end",
      "        : i === arr.length - 1",
      "          ? acc + val",
      "          : acc + val + separator,",
      "    ''",
      "  );"
    ],
    description: "Joins all elements of an array into a string and returns this string.\nUses a separator and an end separator.\n\nUse `Array.prototype.reduce()` to combine elements into a string.\nOmit the second argument, `separator`, to use a default separator of `','`.\nOmit the third argument, `end`, to use the same value as `separator` by default"
  },
  JSONtoCSV: {
    prefix: "30s_JSONtoCSV",
    body: [
      "const JSONtoCSV = (arr, columns, delimiter = ',') =>",
      "  [",
      "    columns.join(delimiter),",
      "    ...arr.map(obj =>",
      "      columns.reduce(",
      "        (acc, key) => `${acc}${!acc.length ? '' : delimiter}\"${!obj[key] ? '' : obj[key]}\"`,",
      "        ''",
      "      )",
      "    )",
      "  ].join('\\n');"
    ],
    description: "Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.\n\nUse `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.\nUse `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.\nUse `Array.prototype.join('\\n')` to combine all rows into a string.\nOmit the third argument, `delimiter`, to use a default delimiter of `,`"
  },
  JSONToFile: {
    prefix: "30s_JSONToFile",
    body: [
      "const fs = require('fs');",
      "const JSONToFile = (obj, filename) =>",
      "  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));"
    ],
    description: "Writes a JSON object to a file.\n\nUse `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file"
  },
  last: {
    prefix: "30s_last",
    body: [
      "const last = arr => arr[arr.length - 1];"
    ],
    description: "Returns the last element in an array.\n\nUse `arr.length - 1` to compute the index of the last element of the given array and returning it"
  },
  lcm: {
    prefix: "30s_lcm",
    body: [
      "const lcm = (...arr) => {",
      "  const gcd = (x, y) => (!y ? x : gcd(y, x % y));",
      "  const _lcm = (x, y) => (x * y) / gcd(x, y);",
      "  return [...arr].reduce((a, b) => _lcm(a, b));",
      "};"
    ],
    description: "Returns the least common multiple of two or more numbers.\n\nUse the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.\nThe GCD formula uses recursion"
  },
  longestItem: {
    prefix: "30s_longestItem",
    body: [
      "const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));"
    ],
    description: "Takes any number of iterable objects or objects with a `length` property and returns the longest one.\nIf multiple objects have the same length, the first one will be returned.\nReturns `undefined` if no arguments are provided.\n\nUse `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one"
  },
  lowercaseKeys: {
    prefix: "30s_lowercaseKeys",
    body: [
      "const lowercaseKeys = obj =>",
      "  Object.keys(obj).reduce((acc, key) => {",
      "    acc[key.toLowerCase()] = obj[key];",
      "    return acc;",
      "  }, {});"
    ],
    description: "Creates a new object from the specified object, where all the keys are in lowercase.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.\nConvert each key in the original object to lowercase, using `String.toLowerCase()`"
  },
  luhnCheck: {
    prefix: "30s_luhnCheck",
    body: [
      "const luhnCheck = num => {",
      "  let arr = (num + '')",
      "    .split('')",
      "    .reverse()",
      "    .map(x => parseInt(x));",
      "  let lastDigit = arr.splice(0, 1)[0];",
      "  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);",
      "  sum += lastDigit;",
      "  return sum % 10 === 0;",
      "};"
    ],
    description: "Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.\n\nUse `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.\nUse `Array.prototype.splice(0,1)` to obtain the last digit.\nUse `Array.prototype.reduce()` to implement the Luhn Algorithm.\nReturn `true` if `sum` is divisible by `10`, `false` otherwise"
  },
  mapKeys: {
    prefix: "30s_mapKeys",
    body: [
      "const mapKeys = (obj, fn) =>",
      "  Object.keys(obj).reduce((acc, k) => {",
      "    acc[fn(obj[k], k, obj)] = obj[k];",
      "    return acc;",
      "  }, {});"
    ],
    description: "Creates an object with keys generated by running the provided function for each key and the same values as the provided object.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`"
  },
  mapObject: {
    prefix: "30s_mapObject",
    body: [
      "const mapObject = (arr, fn) =>",
      "  (a => (",
      "    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})",
      "  ))();"
    ],
    description: "Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.\n\nUse an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations)"
  },
  mapString: {
    prefix: "30s_mapString",
    body: [
      "const mapString = (str, fn) =>",
      "  str",
      "    .split('')",
      "    .map((c, i) => fn(c, i, str))",
      "    .join('');"
    ],
    description: "Creates a new string with the results of calling a provided function on every character in the calling string.\n\nUse `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.\nUse `Array.prototype.join('')` to recombine the array of characters into a string.\nThe callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon)"
  },
  mapValues: {
    prefix: "30s_mapValues",
    body: [
      "const mapValues = (obj, fn) =>",
      "  Object.keys(obj).reduce((acc, k) => {",
      "    acc[k] = fn(obj[k], k, obj);",
      "    return acc;",
      "  }, {});"
    ],
    description: "Creates an object with the same keys as the provided object and values generated by running the provided function for each value.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same keys and mapped values using `fn`"
  },
  mask: {
    prefix: "30s_mask",
    body: [
      "const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);"
    ],
    description: "Replaces all but the last `num` of characters with the specified mask character.\n\nUse `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.\nOmit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.\nOmit the third argument, `mask`, to use a default character of `'*'` for the mask"
  },
  matches: {
    prefix: "30s_matches",
    body: [
      "const matches = (obj, source) =>",
      "  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);"
    ],
    description: "Compares two objects to determine if the first one contains equivalent property values to the second one.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values"
  },
  matchesWith: {
    prefix: "30s_matchesWith",
    body: [
      "const matchesWith = (obj, source, fn) =>",
      "  Object.keys(source).every(",
      "    key =>",
      "      obj.hasOwnProperty(key) && fn",
      "        ? fn(obj[key], source[key], key, obj, source)",
      "        : obj[key] == source[key]",
      "  );"
    ],
    description: "Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.\nIf no function is provided, the values will be compared using the equality operator"
  },
  maxBy: {
    prefix: "30s_maxBy",
    body: [
      "const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));"
    ],
    description: "Returns the maximum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value"
  },
  maxDate: {
    prefix: "30s_maxDate",
    body: [
      "const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));"
    ],
    description: "Returns the maximum of the given dates.\n\nUse `Math.max.apply()` to find the maximum date value, `new Date()` to convert it to a `Date` object"
  },
  maxN: {
    prefix: "30s_maxN",
    body: [
      "const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);"
    ],
    description: "Returns the `n` maximum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array"
  },
  median: {
    prefix: "30s_median",
    body: [
      "const median = arr => {",
      "  const mid = Math.floor(arr.length / 2),",
      "    nums = [...arr].sort((a, b) => a - b);",
      "  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;",
      "};"
    ],
    description: "Returns the median of an array of numbers.\n\nFind the middle of the array, use `Array.prototype.sort()` to sort the values.\nReturn the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers"
  },
  memoize: {
    prefix: "30s_memoize",
    body: [
      "const memoize = fn => {",
      "  const cache = new Map();",
      "  const cached = function(val) {",
      "    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);",
      "  };",
      "  cached.cache = cache;",
      "  return cached;",
      "};"
    ],
    description: "Returns the memoized (cached) function.\n\nCreate an empty cache by instantiating a new `Map` object.\nReturn a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.\nAllow access to the `cache` by setting it as a property on the returned function"
  },
  merge: {
    prefix: "30s_merge",
    body: [
      "const merge = (...objs) =>",
      "  [...objs].reduce(",
      "    (acc, obj) =>",
      "      Object.keys(obj).reduce((a, k) => {",
      "        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];",
      "        return acc;",
      "      }, {}),",
      "    {}",
      "  );"
    ],
    description: "Creates a new object from the combination of two or more objects.\n\nUse `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.\nUse `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects"
  },
  minBy: {
    prefix: "30s_minBy",
    body: [
      "const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));"
    ],
    description: "Returns the minimum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the maximum value"
  },
  minDate: {
    prefix: "30s_minDate",
    body: [
      "const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));"
    ],
    description: "Returns the minimum of the given dates.\n\nUse `Math.min.apply()` to find the minimum date value, `new Date()` to convert it to a `Date` object"
  },
  minN: {
    prefix: "30s_minN",
    body: [
      "const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);"
    ],
    description: "Returns the `n` minimum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array"
  },
  mostPerformant: {
    prefix: "30s_mostPerformant",
    body: [
      "const mostPerformant = (fns, iterations = 10000) => {",
      "  const times = fns.map(fn => {",
      "    const before = performance.now();",
      "    for (let i = 0; i < iterations; i++) fn();",
      "    return performance.now() - before;",
      "  });",
      "  return times.indexOf(Math.min(...times));",
      "};"
    ],
    description: "Returns the index of the function in an array of functions which executed the fastest.\n\nUse `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.\nUse `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.\nOmit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take"
  },
  negate: {
    prefix: "30s_negate",
    body: [
      "const negate = func => (...args) => !func(...args);"
    ],
    description: "Negates a predicate function.\n\nTake a predicate function and apply the not operator (`!`) to it with its arguments"
  },
  nest: {
    prefix: "30s_nest",
    body: [
      "const nest = (items, id = null, link = 'parent_id') =>",
      "  items",
      "    .filter(item => item[link] === id)",
      "    .map(item => ({ ...item, children: nest(items, item.id) }));"
    ],
    description: "Given a flat array of objects linked to one another, it will nest them recursively.\nUseful for nesting comments, such as the ones on reddit.com.\n\nUse recursion.\nUse `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.\nOmit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).\nOmit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`"
  },
  nodeListToArray: {
    prefix: "30s_nodeListToArray",
    body: [
      "const nodeListToArray = nodeList => [...nodeList];"
    ],
    description: "Converts a `NodeList` to an array.\n\nUse spread operator inside new array to convert a `NodeList` to an array"
  },
  none: {
    prefix: "30s_none",
    body: [
      "const none = (arr, fn = Boolean) => !arr.some(fn);"
    ],
    description: "Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default"
  },
  nthArg: {
    prefix: "30s_nthArg",
    body: [
      "const nthArg = n => (...args) => args.slice(n)[0];"
    ],
    description: "Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.\n\nUse `Array.prototype.slice()` to get the desired argument at index `n`"
  },
  nthElement: {
    prefix: "30s_nthElement",
    body: [
      "const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];"
    ],
    description: "Returns the nth element of an array.\n\nUse `Array.prototype.slice()` to get an array containing the nth element at the first place.\nIf the index is out of bounds, return `undefined`.\nOmit the second argument, `n`, to get the first element of the array"
  },
  objectFromPairs: {
    prefix: "30s_objectFromPairs",
    body: [
      "const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});"
    ],
    description: "Creates an object from the given key-value pairs.\n\nUse `Array.prototype.reduce()` to create and combine key-value pairs"
  },
  objectToPairs: {
    prefix: "30s_objectToPairs",
    body: [
      "const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);"
    ],
    description: "Creates an array of key-value pair arrays from an object.\n\nUse `Object.keys()` and `Array.prototype.map()` to iterate over the object's keys and produce an array with key-value pairs"
  },
  observeMutations: {
    prefix: "30s_observeMutations",
    body: [
      "const observeMutations = (element, callback, options) => {",
      "  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));",
      "  observer.observe(",
      "    element,",
      "    Object.assign(",
      "      {",
      "        childList: true,",
      "        attributes: true,",
      "        attributeOldValue: true,",
      "        characterData: true,",
      "        characterDataOldValue: true,",
      "        subtree: true",
      "      },",
      "      options",
      "    )",
      "  );",
      "  return observer;",
      "};"
    ],
    description: "Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.\n\nUse a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.\nUse `Array.prototype.forEach()` to run the callback for each mutation that is observed.\nOmit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`)"
  },
  off: {
    prefix: "30s_off",
    body: [
      "const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);"
    ],
    description: "Removes an event listener from an element.\n\nUse `EventTarget.removeEventListener()` to remove an event listener from an element. \nOmit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added"
  },
  offset: {
    prefix: "30s_offset",
    body: [
      "const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];"
    ],
    description: "Moves the specified amount of elements to the end of the array.\n\nUse `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.\nUse the spread operator(`...`) to combine the two into one array.\nIf `offset` is negative, the elements will be moved from end to start"
  },
  omit: {
    prefix: "30s_omit",
    body: [
      "const omit = (obj, arr) =>",
      "  Object.keys(obj)",
      "    .filter(k => !arr.includes(k))",
      "    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});"
    ],
    description: "Omits the key-value pairs corresponding to the given keys from an object.\n\nUse `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs"
  },
  omitBy: {
    prefix: "30s_omitBy",
    body: [
      "const omitBy = (obj, fn) =>",
      "  Object.keys(obj)",
      "    .filter(k => !fn(obj[k], k))",
      "    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});"
    ],
    description: "Creates an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs"
  },
  on: {
    prefix: "30s_on",
    body: [
      "const on = (el, evt, fn, opts = {}) => {",
      "  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);",
      "  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);",
      "  if (opts.target) return delegatorFn;",
      "};"
    ],
    description: "Adds an event listener to an element with the ability to use event delegation.\n\nUse `EventTarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.\nReturns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).\nOmit `opts` to default to non-delegation behavior and event bubbling"
  },
  once: {
    prefix: "30s_once",
    body: [
      "const once = fn => {",
      "  let called = false;",
      "  return function(...args) {",
      "    if (called) return;",
      "    called = true;",
      "    return fn.apply(this, args);",
      "  };",
      "};"
    ],
    description: "Ensures a function is called only once.\n\nUtilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.\nAllow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator"
  },
  onUserInputChange: {
    prefix: "30s_onUserInputChange",
    body: [
      "const onUserInputChange = callback => {",
      "  let type = 'mouse',",
      "    lastTime = 0;",
      "  const mousemoveHandler = () => {",
      "    const now = performance.now();",
      "    if (now - lastTime < 20)",
      "      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);",
      "    lastTime = now;",
      "  };",
      "  document.addEventListener('touchstart', () => {",
      "    if (type === 'touch') return;",
      "    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);",
      "  });",
      "};"
    ],
    description: "Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).\n\nUse two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. \nOn `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.\nRun the callback with the input type as an argument in either of these situations"
  },
  orderBy: {
    prefix: "30s_orderBy",
    body: [
      "const orderBy = (arr, props, orders) =>",
      "  [...arr].sort((a, b) =>",
      "    props.reduce((acc, prop, i) => {",
      "      if (acc === 0) {",
      "        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];",
      "        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;",
      "      }",
      "      return acc;",
      "    }, 0)",
      "  );"
    ],
    description: "Returns a sorted array of objects ordered by properties and orders.\n\nUses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.\nIf no `orders` array is passed it sort by `'asc'` by default"
  },
  over: {
    prefix: "30s_over",
    body: [
      "const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));"
    ],
    description: "Creates a function that invokes each provided function with the arguments it receives and returns the results.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments"
  },
  overArgs: {
    prefix: "30s_overArgs",
    body: [
      "const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));"
    ],
    description: "Creates a function that invokes the provided function with its arguments transformed.\n\nUse `Array.prototype.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`"
  },
  pad: {
    prefix: "30s_pad",
    body: [
      "const pad = (str, length, char = ' ') =>",
      "  str.padStart((str.length + length) / 2, char).padEnd(length, char);"
    ],
    description: "Pads a string on both sides with the specified character, if it's shorter than the specified length.\n\nUse `String.padStart()` and `String.padEnd()` to pad both sides of the given string.\nOmit the third argument, `char`, to use the whitespace character as the default padding character"
  },
  palindrome: {
    prefix: "30s_palindrome",
    body: [
      "const palindrome = str => {",
      "  const s = str.toLowerCase().replace(/[\\W_]/g, '');",
      "  return s === [...s].reverse().join('');",
      "};"
    ],
    description: "Returns `true` if the given string is a palindrome, `false` otherwise.\n\nConvert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.\nThen, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`"
  },
  parseCookie: {
    prefix: "30s_parseCookie",
    body: [
      "const parseCookie = str =>",
      "  str",
      "    .split(';')",
      "    .map(v => v.split('='))",
      "    .reduce((acc, v) => {",
      "      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());",
      "      return acc;",
      "    }, {});"
    ],
    description: "Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.\n\nUse `String.prototype.split(';')` to separate key-value pairs from each other.\nUse `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.\nUse `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs"
  },
  partial: {
    prefix: "30s_partial",
    body: [
      "const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);"
    ],
    description: "Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.\n\nUse the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`"
  },
  partialRight: {
    prefix: "30s_partialRight",
    body: [
      "const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);"
    ],
    description: "Creates a function that invokes `fn` with `partials` appended to the arguments it receives.\n\nUse the spread operator (`...`) to append `partials` to the list of arguments of `fn`"
  },
  partition: {
    prefix: "30s_partition",
    body: [
      "const partition = (arr, fn) =>",
      "  arr.reduce(",
      "    (acc, val, i, arr) => {",
      "      acc[fn(val, i, arr) ? 0 : 1].push(val);",
      "      return acc;",
      "    },",
      "    [[], []]",
      "  );"
    ],
    description: "Groups the elements into two arrays, depending on the provided function's truthiness for each element.\n\nUse `Array.prototype.reduce()` to create an array of two arrays.\nUse `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one"
  },
  percentile: {
    prefix: "30s_percentile",
    body: [
      "const percentile = (arr, val) =>",
      "  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;"
    ],
    description: "Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.\n\nUse `Array.prototype.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula"
  },
  permutations: {
    prefix: "30s_permutations",
    body: [
      "const permutations = arr => {",
      "  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;",
      "  return arr.reduce(",
      "    (acc, item, i) =>",
      "      acc.concat(",
      "        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])",
      "      ),",
      "    []",
      "  );",
      "};"
    ],
    description: "⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.\n\nGenerates all permutations of an array's elements (contains duplicates).\n\nUse recursion.\nFor each element in the given array, create all the partial permutations for the rest of its elements.\nUse `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for array `length` equal to `2` or `1`"
  },
  pick: {
    prefix: "30s_pick",
    body: [
      "const pick = (obj, arr) =>",
      "  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});"
    ],
    description: "Picks the key-value pairs corresponding to the given keys from an object.\n\nUse `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object"
  },
  pickBy: {
    prefix: "30s_pickBy",
    body: [
      "const pickBy = (obj, fn) =>",
      "  Object.keys(obj)",
      "    .filter(k => fn(obj[k], k))",
      "    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});"
    ],
    description: "Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsey value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs"
  },
  pipeAsyncFunctions: {
    prefix: "30s_pipeAsyncFunctions",
    body: [
      "const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));"
    ],
    description: "Performs left-to-right function composition for asynchronous functions.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.\nThe functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.\nAll functions must be unary"
  },
  pipeFunctions: {
    prefix: "30s_pipeFunctions",
    body: [
      "const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));"
    ],
    description: "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary"
  },
  pluralize: {
    prefix: "30s_pluralize",
    body: [
      "const pluralize = (val, word, plural = word + 's') => {",
      "  const _pluralize = (num, word, plural = word + 's') =>",
      "    [1, -1].includes(Number(num)) ? word : plural;",
      "  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);",
      "  return _pluralize(val, word, plural);",
      "};"
    ],
    description: "Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.\n\nIf `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word"
  },
  powerset: {
    prefix: "30s_powerset",
    body: [
      "const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);"
    ],
    description: "Returns the powerset of a given array of numbers.\n\nUse `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations"
  },
  prefix: {
    prefix: "30s_prefix",
    body: [
      "const prefix = prop => {",
      "  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);",
      "  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];",
      "  const i = prefixes.findIndex(",
      "    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'",
      "  );",
      "  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;",
      "};"
    ],
    description: "Returns the prefixed version (if necessary) of a CSS property that the browser supports.\n\nUse `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.\nUse `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string"
  },
  prettyBytes: {
    prefix: "30s_prettyBytes",
    body: [
      "const prettyBytes = (num, precision = 3, addSpace = true) => {",
      "  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];",
      "  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];",
      "  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);",
      "  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));",
      "  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];",
      "};"
    ],
    description: "Converts a number in bytes to a human-readable string.\n\nUse an array dictionary of units to be accessed based on the exponent.\nUse `Number.toPrecision()` to truncate the number to a certain number of digits.\nReturn the prettified string by building it up, taking into account the supplied options and whether it is negative or not.\nOmit the second argument, `precision`, to use a default precision of `3` digits.\nOmit the third argument, `addSpace`, to add space between the number and unit by default"
  },
  primes: {
    prefix: "30s_primes",
    body: [
      "const primes = num => {",
      "  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),",
      "    sqroot = Math.floor(Math.sqrt(num)),",
      "    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);",
      "  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));",
      "  return arr;",
      "};"
    ],
    description: "Generates primes up to a given number, using the Sieve of Eratosthenes.\n\nGenerate an array from `2` to the given number. Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number"
  },
  promisify: {
    prefix: "30s_promisify",
    body: [
      "const promisify = func => (...args) =>",
      "  new Promise((resolve, reject) =>",
      "    func(...args, (err, result) => (err ? reject(err) : resolve(result)))",
      "  );"
    ],
    description: "Converts an asynchronous function to return a promise.\n\nUse currying to return a function returning a `Promise` that calls the original function.\nUse the `...rest` operator to pass in all the parameters.\n\n*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)"
  },
  pull: {
    prefix: "30s_pull",
    body: [
      "const pull = (arr, ...args) => {",
      "  let argState = Array.isArray(args[0]) ? args[0] : args;",
      "  let pulled = arr.filter((v, i) => !argState.includes(v));",
      "  arr.length = 0;",
      "  pulled.forEach(v => arr.push(v));",
      "};"
    ],
    description: "Mutates the original array to filter out the values specified.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\n\n_(For a snippet that does not mutate the original array see [`without`](#without))"
  },
  pullAtIndex: {
    prefix: "30s_pullAtIndex",
    body: [
      "const pullAtIndex = (arr, pullArr) => {",
      "  let removed = [];",
      "  let pulled = arr",
      "    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))",
      "    .filter((v, i) => !pullArr.includes(i));",
      "  arr.length = 0;",
      "  pulled.forEach(v => arr.push(v));",
      "  return removed;",
      "};"
    ],
    description: "Mutates the original array to filter out the values at the specified indexes.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled value"
  },
  pullAtValue: {
    prefix: "30s_pullAtValue",
    body: [
      "const pullAtValue = (arr, pullArr) => {",
      "  let removed = [],",
      "    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),",
      "    mutateTo = arr.filter((v, i) => !pullArr.includes(v));",
      "  arr.length = 0;",
      "  mutateTo.forEach(v => arr.push(v));",
      "  return removed;",
      "};"
    ],
    description: "Mutates the original array to filter out the values specified. Returns the removed elements.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled value"
  },
  pullBy: {
    prefix: "30s_pullBy",
    body: [
      "const pullBy = (arr, ...args) => {",
      "  const length = args.length;",
      "  let fn = length > 1 ? args[length - 1] : undefined;",
      "  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;",
      "  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));",
      "  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));",
      "  arr.length = 0;",
      "  pulled.forEach(v => arr.push(v));",
      "};"
    ],
    description: "Mutates the original array to filter out the values specified, based on a given iterator function.\n\nCheck if the last argument provided in a function.\nUse `Array.prototype.map()` to apply the iterator function `fn` to all array elements.\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values"
  },
  radsToDegrees: {
    prefix: "30s_radsToDegrees",
    body: [
      "const radsToDegrees = rad => (rad * 180.0) / Math.PI;"
    ],
    description: "Converts an angle from radians to degrees.\n\nUse `Math.PI` and the radian to degree formula to convert the angle from radians to degrees"
  },
  randomHexColorCode: {
    prefix: "30s_randomHexColorCode",
    body: [
      "const randomHexColorCode = () => {",
      "  let n = (Math.random() * 0xfffff * 1000000).toString(16);",
      "  return '#' + n.slice(0, 6);",
      "};"
    ],
    description: "Generates a random hexadecimal color code.\n\nUse `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`"
  },
  randomIntArrayInRange: {
    prefix: "30s_randomIntArrayInRange",
    body: [
      "const randomIntArrayInRange = (min, max, n = 1) =>",
      "  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);"
    ],
    description: "Returns an array of n random integers in the specified range.\n\nUse `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer"
  },
  randomIntegerInRange: {
    prefix: "30s_randomIntegerInRange",
    body: [
      "const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;"
    ],
    description: "Returns a random integer in the specified range.\n\nUse `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer"
  },
  randomNumberInRange: {
    prefix: "30s_randomNumberInRange",
    body: [
      "const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;"
    ],
    description: "Returns a random number in the specified range.\n\nUse `Math.random()` to generate a random value, map it to the desired range using multiplication"
  },
  readFileLines: {
    prefix: "30s_readFileLines",
    body: [
      "const fs = require('fs');",
      "const readFileLines = filename =>",
      "  fs",
      "    .readFileSync(filename)",
      "    .toString('UTF8')",
      "    .split('\\n');"
    ],
    description: "Returns an array of lines from the specified file.\n\nUse `readFileSync` function in `fs` node package to create a `Buffer` from a file.\nconvert buffer to string using `toString(encoding)` function.\ncreating an array from contents of file by `split`ing file content line by line (each `\\n`)"
  },
  rearg: {
    prefix: "30s_rearg",
    body: [
      "const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));"
    ],
    description: "Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.\n\nUse `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`"
  },
  recordAnimationFrames: {
    prefix: "30s_recordAnimationFrames",
    body: [
      "const recordAnimationFrames = (callback, autoStart = true) => {",
      "  let running = true,",
      "    raf;",
      "  const stop = () => {",
      "    running = false;",
      "    cancelAnimationFrame(raf);",
      "  };",
      "  const start = () => {",
      "    running = true;",
      "    run();",
      "  };",
      "  const run = () => {",
      "    raf = requestAnimationFrame(() => {",
      "      callback();",
      "      if (running) run();",
      "    });",
      "  };",
      "  if (autoStart) start();",
      "  return { start, stop };",
      "};"
    ],
    description: "Invokes the provided callback on each animation frame.\n\nUse recursion. \nProvided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. \nReturn an object with two methods `start` and `stop` to allow manual control of the recording. \nOmit the second argument, `autoStart`, to implicitly call `start` when the function is invoked"
  },
  redirect: {
    prefix: "30s_redirect",
    body: [
      "const redirect = (url, asLink = true) =>",
      "  asLink ? (window.location.href = url) : window.location.replace(url);"
    ],
    description: "Redirects to a specified URL.\n\nUse `window.location.href` or `window.location.replace()` to redirect to `url`.\nPass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`)"
  },
  reducedFilter: {
    prefix: "30s_reducedFilter",
    body: [
      "const reducedFilter = (data, keys, fn) =>",
      "  data.filter(fn).map(el =>",
      "    keys.reduce((acc, key) => {",
      "      acc[key] = el[key];",
      "      return acc;",
      "    }, {})",
      "  );"
    ],
    description: "Filter an array of objects based on a condition while also filtering out unspecified keys.\n\nUse `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.\nOn the filtered array, use `Array.prototype.map()` to return the new object using `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument"
  },
  reduceSuccessive: {
    prefix: "30s_reduceSuccessive",
    body: [
      "const reduceSuccessive = (arr, fn, acc) =>",
      "  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);"
    ],
    description: "Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.\n\nUse `Array.prototype.reduce()` to apply the given function to the given array, storing each new result"
  },
  reduceWhich: {
    prefix: "30s_reduceWhich",
    body: [
      "const reduceWhich = (arr, comparator = (a, b) => a - b) =>",
      "  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));"
    ],
    description: "Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.\n\nUse `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.\nYou can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array"
  },
  reject: {
    prefix: "30s_reject",
    body: [
      "const reject = (pred, array) => array.filter((...args) => !pred(...args));"
    ],
    description: "Takes a predicate and array, like `Array.prototype.filter()`, but only keeps `x` if `pred(x) === false`"
  },
  remove: {
    prefix: "30s_remove",
    body: [
      "const remove = (arr, func) =>",
      "  Array.isArray(arr)",
      "    ? arr.filter(func).reduce((acc, val) => {",
      "        arr.splice(arr.indexOf(val), 1);",
      "        return acc.concat(val);",
      "      }, [])",
      "    : [];"
    ],
    description: "Removes elements from an array for which the given function returns `false`.\n\nUse `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.\nThe `func` is invoked with three arguments (`value, index, array`)"
  },
  removeNonASCII: {
    prefix: "30s_removeNonASCII",
    body: [
      "const removeNonASCII = str => str.replace(/[^\\x20-\\x7E]/g, '');"
    ],
    description: "Removes non-printable ASCII characters.\n\nUse a regular expression to remove non-printable ASCII characters"
  },
  renameKeys: {
    prefix: "30s_renameKeys",
    body: [
      "const renameKeys = (keysMap, obj) =>",
      "  Object.keys(obj).reduce(",
      "    (acc, key) => ({",
      "      ...acc,",
      "      ...{ [keysMap[key] || key]: obj[key] }",
      "    }),",
      "    {}",
      "  );"
    ],
    description: "Replaces the names of multiple object keys with the values provided.\n\nUse `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`"
  },
  reverseString: {
    prefix: "30s_reverseString",
    body: [
      "const reverseString = str => [...str].reverse().join('');"
    ],
    description: "Reverses a string.\n\nUse the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.\nCombine characters to get a string using `String.prototype.join('')`"
  },
  RGBToHex: {
    prefix: "30s_RGBToHex",
    body: [
      "const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');"
    ],
    description: "Converts the values of RGB components to a color code.\n\nConvert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value"
  },
  round: {
    prefix: "30s_round",
    body: [
      "const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);"
    ],
    description: "Rounds a number to a specified amount of digits.\n\nUse `Math.round()` and template literals to round the number to the specified number of digits.\nOmit the second argument, `decimals` to round to an integer"
  },
  runAsync: {
    prefix: "30s_runAsync",
    body: [
      "const runAsync = fn => {",
      "  const worker = new Worker(",
      "    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {",
      "      type: 'application/javascript; charset=utf-8'",
      "    })",
      "  );",
      "  return new Promise((res, rej) => {",
      "    worker.onmessage = ({ data }) => {",
      "      res(data), worker.terminate();",
      "    };",
      "    worker.onerror = err => {",
      "      rej(err), worker.terminate();",
      "    };",
      "  });",
      "};"
    ],
    description: "Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.\n\nCreate a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.\nImmediately post the return value of calling the function back.\nReturn a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error"
  },
  runPromisesInSeries: {
    prefix: "30s_runPromisesInSeries",
    body: [
      "const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());"
    ],
    description: "Runs an array of promises in series.\n\nUse `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved"
  },
  sample: {
    prefix: "30s_sample",
    body: [
      "const sample = arr => arr[Math.floor(Math.random() * arr.length)];"
    ],
    description: "Returns a random element from an array.\n\nUse `Math.random()` to generate a random number, multiply it by `length` and round it off to the nearest whole number using `Math.floor()`.\nThis method also works with strings"
  },
  sampleSize: {
    prefix: "30s_sampleSize",
    body: [
      "const sampleSize = ([...arr], n = 1) => {",
      "  let m = arr.length;",
      "  while (m) {",
      "    const i = Math.floor(Math.random() * m--);",
      "    [arr[m], arr[i]] = [arr[i], arr[m]];",
      "  }",
      "  return arr.slice(0, n);",
      "};"
    ],
    description: "Gets `n` random elements at unique keys from `array` up to the size of `array`.\n\nShuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).\nUse `Array.prototype.slice()` to get the first `n` elements.\nOmit the second argument, `n` to get only one element at random from the array"
  },
  scrollToTop: {
    prefix: "30s_scrollToTop",
    body: [
      "const scrollToTop = () => {",
      "  const c = document.documentElement.scrollTop || document.body.scrollTop;",
      "  if (c > 0) {",
      "    window.requestAnimationFrame(scrollToTop);",
      "    window.scrollTo(0, c - c / 8);",
      "  }",
      "};"
    ],
    description: "Smooth-scrolls to the top of the page.\n\nGet distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.\nScroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling"
  },
  sdbm: {
    prefix: "30s_sdbm",
    body: [
      "const sdbm = str => {",
      "  let arr = str.split('');",
      "  return arr.reduce(",
      "    (hashCode, currentVal) =>",
      "      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),",
      "    0",
      "  );",
      "};"
    ],
    description: "Hashes the input string into a whole number.\n\nUse `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting"
  },
  serializeCookie: {
    prefix: "30s_serializeCookie",
    body: [
      "const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;"
    ],
    description: "Serialize a cookie name-value pair into a Set-Cookie header string.\n\nUse template literals and `encodeURIComponent()` to create the appropriate string"
  },
  setStyle: {
    prefix: "30s_setStyle",
    body: [
      "const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);"
    ],
    description: "Sets the value of a CSS rule for the specified element.\n\nUse `element.style` to set the value of the CSS rule for the specified element to `val`"
  },
  shallowClone: {
    prefix: "30s_shallowClone",
    body: [
      "const shallowClone = obj => Object.assign({}, obj);"
    ],
    description: "Creates a shallow clone of an object.\n\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original"
  },
  shank: {
    prefix: "30s_shank",
    body: [
      "const shank = (arr, index = 0, delCount = 0, ...elements) =>",
      "  arr",
      "    .slice(0, index)",
      "    .concat(elements)",
      "    .concat(arr.slice(index + delCount));"
    ],
    description: "Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.\n\nUse `Array.prototype.slice()` and `Array.prototype.concat()` to get a new array with the new contents after removing existing elements and/or adding new elements.\nOmit the second argument, `index`, to start at `0`.\nOmit the third argument, `delCount`, to remove `0` elements.\nOmit the fourth argument, `elements`, in order to not add any new elements"
  },
  show: {
    prefix: "30s_show",
    body: [
      "const show = (...el) => [...el].forEach(e => (e.style.display = ''));"
    ],
    description: "Shows all the elements specified.\n\nUse the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified"
  },
  shuffle: {
    prefix: "30s_shuffle",
    body: [
      "const shuffle = ([...arr]) => {",
      "  let m = arr.length;",
      "  while (m) {",
      "    const i = Math.floor(Math.random() * m--);",
      "    [arr[m], arr[i]] = [arr[i], arr[m]];",
      "  }",
      "  return arr;",
      "};"
    ],
    description: "Randomizes the order of the values of an array, returning a new array.\n\nUses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array"
  },
  similarity: {
    prefix: "30s_similarity",
    body: [
      "const similarity = (arr, values) => arr.filter(v => values.includes(v));"
    ],
    description: "Returns an array of elements that appear in both arrays.\n\nUse `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`"
  },
  size: {
    prefix: "30s_size",
    body: [
      "const size = val =>",
      "  Array.isArray(val)",
      "    ? val.length",
      "    : val && typeof val === 'object'",
      "      ? val.size || val.length || Object.keys(val).length",
      "      : typeof val === 'string'",
      "        ? new Blob([val]).size",
      "        : 0;"
    ],
    description: "Get size of arrays, objects or strings.\n\nGet type of `val` (`array`, `object` or `string`). \nUse `length` property for arrays.\nUse `length` or `size` value if available or number of keys for objects.\nUse `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.\n\nSplit strings into array of characters with `split('')` and return its length"
  },
  sleep: {
    prefix: "30s_sleep",
    body: [
      "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));"
    ],
    description: "Delays the execution of an asynchronous function.\n\nDelay executing part of an `async` function, by putting it to sleep, returning a `Promise`"
  },
  smoothScroll: {
    prefix: "30s_smoothScroll",
    body: [
      "const smoothScroll = element =>",
      "  document.querySelector(element).scrollIntoView({",
      "    behavior: 'smooth'",
      "  });"
    ],
    description: "Smoothly scrolls the element on which it's called into the visible area of the browser window.\n\nUse `.scrollIntoView` method to scroll the element. \nPass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly"
  },
  sortCharactersInString: {
    prefix: "30s_sortCharactersInString",
    body: [
      "const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');"
    ],
    description: "Alphabetically sorts the characters in a string.\n\nUse the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`"
  },
  sortedIndex: {
    prefix: "30s_sortedIndex",
    body: [
      "const sortedIndex = (arr, n) => {",
      "  const isDescending = arr[0] > arr[arr.length - 1];",
      "  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));",
      "  return index === -1 ? arr.length : index;",
      "};"
    ],
    description: "Returns the lowest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted"
  },
  sortedIndexBy: {
    prefix: "30s_sortedIndexBy",
    body: [
      "const sortedIndexBy = (arr, n, fn) => {",
      "  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);",
      "  const val = fn(n);",
      "  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));",
      "  return index === -1 ? arr.length : index;",
      "};"
    ],
    description: "Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`"
  },
  sortedLastIndex: {
    prefix: "30s_sortedLastIndex",
    body: [
      "const sortedLastIndex = (arr, n) => {",
      "  const isDescending = arr[0] > arr[arr.length - 1];",
      "  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));",
      "  return index === -1 ? 0 : arr.length - index;",
      "};"
    ],
    description: "Returns the highest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted"
  },
  sortedLastIndexBy: {
    prefix: "30s_sortedLastIndexBy",
    body: [
      "const sortedLastIndexBy = (arr, n, fn) => {",
      "  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);",
      "  const val = fn(n);",
      "  const index = arr",
      "    .map(fn)",
      "    .reverse()",
      "    .findIndex(el => (isDescending ? val <= el : val >= el));",
      "  return index === -1 ? 0 : arr.length - index;",
      "};"
    ],
    description: "Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.map()` to apply the iterator function to all elements of the array.\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function"
  },
  splitLines: {
    prefix: "30s_splitLines",
    body: [
      "const splitLines = str => str.split(/\\r?\\n/);"
    ],
    description: "Splits a multiline string into an array of lines.\n\nUse `String.prototype.split()` and a regular expression to match line breaks and create an array"
  },
  spreadOver: {
    prefix: "30s_spreadOver",
    body: [
      "const spreadOver = fn => argsArr => fn(...argsArr);"
    ],
    description: "Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function."
  },
  stableSort: {
    prefix: "30s_stableSort",
    body: [
      "const stableSort = (arr, compare) =>",
      "  arr",
      "    .map((item, index) => ({ item, index }))",
      "    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)",
      "    .map(({ item }) => item);"
    ],
    description: "Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.\nDoes not mutate the original array, but returns a new array instead.\n\nUse `Array.prototype.map()` to pair each element of the input array with its corresponding index.\nUse `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.\nUse `Array.prototype.map()` to convert back to the initial array items"
  },
  standardDeviation: {
    prefix: "30s_standardDeviation",
    body: [
      "const standardDeviation = (arr, usePopulation = false) => {",
      "  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;",
      "  return Math.sqrt(",
      "    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /",
      "      (arr.length - (usePopulation ? 0 : 1))",
      "  );",
      "};"
    ],
    description: "Returns the standard deviation of an array of numbers.\n\nUse `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then\ndetermine the standard deviation.\nYou can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation"
  },
  stringPermutations: {
    prefix: "30s_stringPermutations",
    body: [
      "const stringPermutations = str => {",
      "  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];",
      "  return str",
      "    .split('')",
      "    .reduce(",
      "      (acc, letter, i) =>",
      "        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),",
      "      []",
      "    );",
      "};"
    ],
    description: "⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.\n\nGenerates all permutations of a string (contains duplicates).\n\nUse recursion.\nFor each letter in the given string, create all the partial permutations for the rest of its letters.\nUse `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for string `length` equal to `2` or `1`"
  },
  stripHTMLTags: {
    prefix: "30s_stripHTMLTags",
    body: [
      "const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');"
    ],
    description: "Removes HTML/XML tags from string.\n\nUse a regular expression to remove HTML/XML tags from a string"
  },
  sum: {
    prefix: "30s_sum",
    body: [
      "const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);"
    ],
    description: "Returns the sum of two or more numbers/arrays.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`"
  },
  sumBy: {
    prefix: "30s_sumBy",
    body: [
      "const sumBy = (arr, fn) =>",
      "  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);"
    ],
    description: "Returns the sum of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`"
  },
  sumPower: {
    prefix: "30s_sumPower",
    body: [
      "const sumPower = (end, power = 2, start = 1) =>",
      "  Array(end + 1 - start)",
      "    .fill(0)",
      "    .map((x, i) => (i + start) ** power)",
      "    .reduce((a, b) => a + b, 0);"
    ],
    description: "Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).\n\nUse `Array.prototype.fill()` to create an array of all the numbers in the target range, `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.\nOmit the second argument, `power`, to use a default power of `2`.\nOmit the third argument, `start`, to use a default starting value of `1`"
  },
  symmetricDifference: {
    prefix: "30s_symmetricDifference",
    body: [
      "const symmetricDifference = (a, b) => {",
      "  const sA = new Set(a),",
      "    sB = new Set(b);",
      "  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];",
      "};"
    ],
    description: "Returns the symmetric difference between two arrays, without filtering out duplicate values.\n\nCreate a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other"
  },
  symmetricDifferenceBy: {
    prefix: "30s_symmetricDifferenceBy",
    body: [
      "const symmetricDifferenceBy = (a, b, fn) => {",
      "  const sA = new Set(a.map(v => fn(v))),",
      "    sB = new Set(b.map(v => fn(v)));",
      "  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];",
      "};"
    ],
    description: "Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each array's elements, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other"
  },
  symmetricDifferenceWith: {
    prefix: "30s_symmetricDifferenceWith",
    body: [
      "const symmetricDifferenceWith = (arr, val, comp) => [",
      "  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),",
      "  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)",
      "];"
    ],
    description: "Returns the symmetric difference between two arrays, using a provided function as a comparator.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values"
  },
  tail: {
    prefix: "30s_tail",
    body: [
      "const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);"
    ],
    description: "Returns all elements in an array except for the first one.\n\nReturn `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array"
  },
  take: {
    prefix: "30s_take",
    body: [
      "const take = (arr, n = 1) => arr.slice(0, n);"
    ],
    description: "Returns an array with n elements removed from the beginning.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning"
  },
  takeRight: {
    prefix: "30s_takeRight",
    body: [
      "const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);"
    ],
    description: "Returns an array with n elements removed from the end.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end"
  },
  takeRightWhile: {
    prefix: "30s_takeRightWhile",
    body: [
      "const takeRightWhile = (arr, func) =>",
      "  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);"
    ],
    description: "Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value"
  },
  takeWhile: {
    prefix: "30s_takeWhile",
    body: [
      "const takeWhile = (arr, func) => {",
      "  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);",
      "  return arr;",
      "};"
    ],
    description: "Removes elements in an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.\nReturn the removed elements, using `Array.prototype.slice()`"
  },
  throttle: {
    prefix: "30s_throttle",
    body: [
      "const throttle = (fn, wait) => {",
      "  let inThrottle, lastFn, lastTime;",
      "  return function() {",
      "    const context = this,",
      "      args = arguments;",
      "    if (!inThrottle) {",
      "      fn.apply(context, args);",
      "      lastTime = Date.now();",
      "      inThrottle = true;",
      "    } else {",
      "      clearTimeout(lastFn);",
      "      lastFn = setTimeout(function() {",
      "        if (Date.now() - lastTime >= wait) {",
      "          fn.apply(context, args);",
      "          lastTime = Date.now();",
      "        }",
      "      }, Math.max(wait - (Date.now() - lastTime), 0));",
      "    }",
      "  };",
      "};"
    ],
    description: "Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds\n\nUse `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.\nUse `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.\nUse `Date.now()` to keep track of the last time the throttled function was invoked.\nOmit the second argument, `wait`, to set the timeout at a default of 0 ms"
  },
  times: {
    prefix: "30s_times",
    body: [
      "const times = (n, fn, context = undefined) => {",
      "  let i = 0;",
      "  while (fn.call(context, i) !== false && ++i < n) {}",
      "};"
    ],
    description: "Iterates over a callback `n` times\n\nUse `Function.call()` to call `fn` `n` times or until it returns `false`.\nOmit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode)"
  },
  timeTaken: {
    prefix: "30s_timeTaken",
    body: [
      "const timeTaken = callback => {",
      "  console.time('timeTaken');",
      "  const r = callback();",
      "  console.timeEnd('timeTaken');",
      "  return r;",
      "};"
    ],
    description: "Measures the time taken by a function to execute.\n\nUse `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute"
  },
  toCamelCase: {
    prefix: "30s_toCamelCase",
    body: [
      "const toCamelCase = str => {",
      "  let s =",
      "    str &&",
      "    str",
      "      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)",
      "      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())",
      "      .join('');",
      "  return s.slice(0, 1).toLowerCase() + s.slice(1);",
      "};"
    ],
    description: "Converts a string to camelcase.\n\nBreak the string into words and combine them capitalizing the first letter of each word, using a regexp"
  },
  toCurrency: {
    prefix: "30s_toCurrency",
    body: [
      "const toCurrency = (n, curr, LanguageFormat = undefined) =>",
      "  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);"
    ],
    description: "Take a number and return specified currency formatting.\n\nUse `Intl.NumberFormat` to enable country / currency sensitive formatting"
  },
  toDecimalMark: {
    prefix: "30s_toDecimalMark",
    body: [
      "const toDecimalMark = num => num.toLocaleString('en-US');"
    ],
    description: "Use `toLocaleString()` to convert a float-point arithmetic to the [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark) form. It makes a comma separated string from a number"
  },
  toggleClass: {
    prefix: "30s_toggleClass",
    body: [
      "const toggleClass = (el, className) => el.classList.toggle(className);"
    ],
    description: "Toggle a class for an element.\n\nUse `element.classList.toggle()` to toggle the specified class for the element"
  },
  toHash: {
    prefix: "30s_toHash",
    body: [
      "const toHash = (object, key) =>",
      "  Array.prototype.reduce.call(",
      "    object,",
      "    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),",
      "    {}",
      "  );"
    ],
    description: "Reduces a given Array-like into a value hash (keyed data store).\n\nGiven an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value"
  },
  toKebabCase: {
    prefix: "30s_toKebabCase",
    body: [
      "const toKebabCase = str =>",
      "  str &&",
      "  str",
      "    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)",
      "    .map(x => x.toLowerCase())",
      "    .join('-');"
    ],
    description: "Converts a string to kebab case.\n\nBreak the string into words and combine them adding `-` as a separator, using a regexp"
  },
  tomorrow: {
    prefix: "30s_tomorrow",
    body: [
      "const tomorrow = (long = false) => {",
      "  let t = new Date();",
      "  t.setDate(t.getDate() + 1);",
      "  const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(",
      "    t.getDate()",
      "  ).padStart(2, '0')}`;",
      "  return !long ? ret : `${ret}T00:00:00`;",
      "};"
    ],
    description: "Results in a string representation of tomorrow's date.\n\nUse `new Date()` to get today's date, adding one day using `Date.getDate()` and `Date.setDate()`, and converting the Date object to a string"
  },
  toOrdinalSuffix: {
    prefix: "30s_toOrdinalSuffix",
    body: [
      "const toOrdinalSuffix = num => {",
      "  const int = parseInt(num),",
      "    digits = [int % 10, int % 100],",
      "    ordinals = ['st', 'nd', 'rd', 'th'],",
      "    oPattern = [1, 2, 3, 4],",
      "    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];",
      "  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])",
      "    ? int + ordinals[digits[0] - 1]",
      "    : int + ordinals[3];",
      "};"
    ],
    description: "Adds an ordinal suffix to a number.\n\nUse the modulo operator (`%`) to find values of single and tens digits.\nFind which ordinal pattern digits match.\nIf digit is found in teens pattern, use teens ordinal"
  },
  toSafeInteger: {
    prefix: "30s_toSafeInteger",
    body: [
      "const toSafeInteger = num =>",
      "  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));"
    ],
    description: "Converts a value to a safe integer.\n\nUse `Math.max()` and `Math.min()` to find the closest safe value.\nUse `Math.round()` to convert to an integer"
  },
  toSnakeCase: {
    prefix: "30s_toSnakeCase",
    body: [
      "const toSnakeCase = str =>",
      "  str &&",
      "  str",
      "    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)",
      "    .map(x => x.toLowerCase())",
      "    .join('_');"
    ],
    description: "Converts a string to snake case.\n\nBreak the string into words and combine them adding `_` as a separator, using a regexp"
  },
  toTitleCase: {
    prefix: "30s_toTitleCase",
    body: [
      "const toTitleCase = str =>",
      "  str",
      "    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)",
      "    .map(x => x.charAt(0).toUpperCase() + x.slice(1))",
      "    .join(' ');"
    ],
    description: "Converts a string to title case.\n\nBreak the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them"
  },
  transform: {
    prefix: "30s_transform",
    body: [
      "const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);"
    ],
    description: "Applies a function against an accumulator and each key in the object (from left to right).\n\nUse `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator"
  },
  triggerEvent: {
    prefix: "30s_triggerEvent",
    body: [
      "const triggerEvent = (el, eventType, detail) =>",
      "  el.dispatchEvent(new CustomEvent(eventType, { detail }));"
    ],
    description: "Triggers a specific event on a given element, optionally passing custom data.\n\nUse `new CustomEvent()` to create an event from the specified `eventType` and details.\nUse `el.dispatchEvent()` to trigger the newly created event on the given element.\nOmit the third argument, `detail`, if you do not want to pass custom data to the triggered event"
  },
  truncateString: {
    prefix: "30s_truncateString",
    body: [
      "const truncateString = (str, num) =>",
      "  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;"
    ],
    description: "Truncates a string up to a specified length.\n\nDetermine if the string's `length` is greater than `num`.\nReturn the string truncated to the desired length, with `'...'` appended to the end or the original string"
  },
  truthCheckCollection: {
    prefix: "30s_truthCheckCollection",
    body: [
      "const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);"
    ],
    description: "Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).\n\nUse `Array.prototype.every()` to check if each passed object has the specified property and if it returns a truthy value"
  },
  unary: {
    prefix: "30s_unary",
    body: [
      "const unary = fn => val => fn(val);"
    ],
    description: "Creates a function that accepts up to one argument, ignoring any additional arguments.\n\nCall the provided function, `fn`, with just the first argument given"
  },
  uncurry: {
    prefix: "30s_uncurry",
    body: [
      "const uncurry = (fn, n = 1) => (...args) => {",
      "  const next = acc => args => args.reduce((x, y) => x(y), acc);",
      "  if (n > args.length) throw new RangeError('Arguments too few!');",
      "  return next(fn)(args.slice(0, n));",
      "};"
    ],
    description: "Uncurries a function up to depth `n`.\n\nReturn a variadic function.\nUse `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.\nIf the `length` of the provided arguments is less than `n` throw an error.\nOtherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.\nOmit the second argument, `n`, to uncurry up to depth `1`"
  },
  unescapeHTML: {
    prefix: "30s_unescapeHTML",
    body: [
      "const unescapeHTML = str =>",
      "  str.replace(",
      "    /&amp;|&lt;|&gt;|&#39;|&quot;/g,",
      "    tag =>",
      "      ({",
      "        '&amp;': '&',",
      "        '&lt;': '<',",
      "        '&gt;': '>',",
      "        '&#39;': \"'\",",
      "        '&quot;': '\"'",
      "      }[tag] || tag)",
      "  );"
    ],
    description: "Unescapes escaped HTML characters.\n\nUse `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object)"
  },
  unflattenObject: {
    prefix: "30s_unflattenObject",
    body: [
      "const unflattenObject = obj =>",
      "  Object.keys(obj).reduce((acc, k) => {",
      "    if (k.indexOf('.') !== -1) {",
      "      const keys = k.split('.');",
      "      Object.assign(",
      "        acc,",
      "        JSON.parse(",
      "          '{' +",
      "            keys.map((v, i) => (i !== keys.length - 1 ? `\${v}\:{` : `\${v}\:`)).join('') +",
      "            obj[k] +",
      "            '}'.repeat(keys.length)",
      "        )",
      "      );",
      "    } else acc[k] = obj[k];",
      "    return acc;",
      "  }, {});"
    ],
    description: "Unflatten an object with the paths for keys.\n\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.\nIf the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.\nOtherwise, add the appropriate key-value pair to the accumulator object"
  },
  unfold: {
    prefix: "30s_unfold",
    body: [
      "const unfold = (fn, seed) => {",
      "  let result = [],",
      "    val = [null, seed];",
      "  while ((val = fn(val[1]))) result.push(val[0]);",
      "  return result;",
      "};"
    ],
    description: "Builds an array, using an iterator function and an initial seed value.\n\nUse a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.\nThe iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate"
  },
  union: {
    prefix: "30s_union",
    body: [
      "const union = (a, b) => Array.from(new Set([...a, ...b]));"
    ],
    description: "Returns every element that exists in any of the two arrays once.\n\nCreate a `Set` with all values of `a` and `b` and convert to an array"
  },
  unionBy: {
    prefix: "30s_unionBy",
    body: [
      "const unionBy = (a, b, fn) => {",
      "  const s = new Set(a.map(fn));",
      "  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));",
      "};"
    ],
    description: "Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying all `fn` to all values of `a`.\nCreate a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.\nReturn the last set converted to an array"
  },
  unionWith: {
    prefix: "30s_unionWith",
    body: [
      "const unionWith = (a, b, comp) =>",
      "  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));"
    ],
    description: "Returns every element that exists in any of the two arrays once, using a provided comparator function.\n\nCreate a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`"
  },
  uniqueElements: {
    prefix: "30s_uniqueElements",
    body: [
      "const uniqueElements = arr => [...new Set(arr)];"
    ],
    description: "Returns all unique values of an array.\n\nUse ES6 `Set` and the `...rest` operator to discard all duplicated values"
  },
  uniqueElementsBy: {
    prefix: "30s_uniqueElementsBy",
    body: [
      "const uniqueElementsBy = (arr, fn) =>",
      "  arr.reduce((acc, v) => {",
      "    if (!acc.some(x => fn(v, x))) acc.push(v);",
      "    return acc;",
      "  }, []);"
    ],
    description: "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared"
  },
  uniqueElementsByRight: {
    prefix: "30s_uniqueElementsByRight",
    body: [
      "const uniqueElementsByRight = (arr, fn) =>",
      "  arr.reduceRight((acc, v) => {",
      "    if (!acc.some(x => fn(v, x))) acc.push(v);",
      "    return acc;",
      "  }, []);"
    ],
    description: "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the last unique occurence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared"
  },
  uniqueSymmetricDifference: {
    prefix: "30s_uniqueSymmetricDifference",
    body: [
      "const uniqueSymmetricDifference = (a, b) => [",
      "  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])",
      "];"
    ],
    description: "Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values"
  },
  untildify: {
    prefix: "30s_untildify",
    body: [
      "const untildify = str => str.replace(/^~($|\\/|\\\\)/, `${require('os').homedir()}$1`);"
    ],
    description: "Converts a tilde path to an absolute path.\n\nUse `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory"
  },
  unzip: {
    prefix: "30s_unzip",
    body: [
      "const unzip = arr =>",
      "  arr.reduce(",
      "    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),",
      "    Array.from({",
      "      length: Math.max(...arr.map(x => x.length))",
      "    }).map(x => [])",
      "  );"
    ],
    description: "Creates an array of arrays, ungrouping the elements in an array produced by [zip](#zip).\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays"
  },
  unzipWith: {
    prefix: "30s_unzipWith",
    body: [
      "const unzipWith = (arr, fn) =>",
      "  arr",
      "    .reduce(",
      "      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),",
      "      Array.from({",
      "        length: Math.max(...arr.map(x => x.length))",
      "      }).map(x => [])",
      "    )",
      "    .map(val => fn(...val));"
    ],
    description: "Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.\nUse `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements"
  },
  URLJoin: {
    prefix: "30s_URLJoin",
    body: [
      "const URLJoin = (...args) =>",
      "  args",
      "    .join('/')",
      "    .replace(/[\\/]+/g, '/')",
      "    .replace(/^(.+):\\//, '$1://')",
      "    .replace(/^file:/, 'file:/')",
      "    .replace(/\\/(\\?|&|#[^!])/g, '$1')",
      "    .replace(/\\?/g, '&')",
      "    .replace('&', '?');"
    ],
    description: "Joins all given URL segments together, then normalizes the resulting URL.\n\nUse `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter)"
  },
  UUIDGeneratorBrowser: {
    prefix: "30s_UUIDGeneratorBrowser",
    body: [
      "const UUIDGeneratorBrowser = () =>",
      "  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>",
      "    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)",
      "  );"
    ],
    description: "Generates a UUID in a browser.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4"
  },
  UUIDGeneratorNode: {
    prefix: "30s_UUIDGeneratorNode",
    body: [
      "const crypto = require('crypto');",
      "const UUIDGeneratorNode = () =>",
      "  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>",
      "    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)",
      "  );"
    ],
    description: "Generates a UUID in Node.JS.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4"
  },
  validateNumber: {
    prefix: "30s_validateNumber",
    body: [
      "const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;"
    ],
    description: "Returns `true` if the given value is a number, `false` otherwise.\n\nUse `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.\nUse `isFinite()` to check if the number is finite.\nUse `Number()` to check if the coercion holds"
  },
  when: {
    prefix: "30s_when",
    body: [
      "const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);"
    ],
    description: "Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. \n\nReturn a function expecting a single value, `x`, that returns the appropriate value based on `pred`"
  },
  without: {
    prefix: "30s_without",
    body: [
      "const without = (arr, ...args) => arr.filter(v => !args.includes(v));"
    ],
    description: "Filters out the elements of an array, that have one of the specified values.\n\nUse `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.\n\n_(For a snippet that mutates the original array see [`pull`](#pull))"
  },
  words: {
    prefix: "30s_words",
    body: [
      "const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);"
    ],
    description: "Converts a given string into an array of words.\n\nUse `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.\nOmit the second argument to use the default regexp"
  },
  xProd: {
    prefix: "30s_xProd",
    body: [
      "const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);"
    ],
    description: "Creates a new array out of the two supplied by creating each possible pair from the arrays.\n\nUse `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array"
  },
  yesNo: {
    prefix: "30s_yesNo",
    body: [
      "const yesNo = (val, def = false) =>",
      "  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;"
    ],
    description: "Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.\n\nUse `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.\nOmit the second argument, `def` to set the default answer as `no`"
  },
  zip: {
    prefix: "30s_zip",
    body: [
      "const zip = (...arrays) => {",
      "  const maxLength = Math.max(...arrays.map(x => x.length));",
      "  return Array.from({ length: maxLength }).map((_, i) => {",
      "    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);",
      "  });",
      "};"
    ],
    description: "Creates an array of elements, grouped based on the position in the original arrays.\n\nUse `Math.max.apply()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found"
  },
  zipObject: {
    prefix: "30s_zipObject",
    body: [
      "const zipObject = (props, values) =>",
      "  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});"
    ],
    description: "Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.\n\nSince an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`"
  },
  zipWith: {
    prefix: "30s_zipWith",
    body: [
      "const zipWith = (...array) => {",
      "  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;",
      "  return Array.from(",
      "    { length: Math.max(...array.map(a => a.length)) },",
      "    (_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))",
      "  );",
      "};"
    ],
    description: "Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.\n\nCheck if the last argument provided is a function.\nUse `Math.max()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\nThe function is invoked with the elements of each group `(...group)`"
  }
}
