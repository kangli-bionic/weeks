{
  import: {
    prefix: "imp",
    body: "import ${2:moduleName} from '${1:module}'$0"
  },
  importNoModuleName: {
    prefix: "imn",
    body: "import '${1:module}'$0"
  },
  importDestructing: {
    prefix: "imd",
    body: "import { $2 } from '${1:module}'$0"
  },
  importEverything: {
    prefix: "ime",
    body: "import * as ${2:alias} from '${1:module}'$0"
  },
  importAs: {
    prefix: "ima",
    body: "import { ${2:originalName} as ${3:alias} } from '${1:module}'$0"
  },
  exportDefault: {
    prefix: "exp",
    body: "export default $1$0"
  },
  exportDestructing: {
    prefix: "exd",
    body: "export { $2 } from '${1:module}'$0"
  },
  exportAs: {
    prefix: "exa",
    body: "export { ${2:originalName} as ${3:alias} } from '${1:module}'$0"
  },
  exportNamedFunction: {
    prefix: "enf",
    body: [
      "export const ${1:functionName} = (${2:params}) => {",
      "\t$0",
      "}",
      ""
    ],
    description: "Export named function in ES7 syntax"
  },
  exportDefaultFunction: {
    prefix: "edf",
    body: ["export default (${1:params}) => {", "\t$0", "}", ""],
    description: "Export default function in ES7 syntax"
  },
  method: {
    prefix: "met",
    body: ["${1:methodName} = (${2:params}) => {", "\t${0}", "}", ""],
    description: "Creates a method inside a class in ES7 syntax"
  },
  propertyGet: {
    prefix: "pge",
    body: ["get ${1:propertyName}() {", "\treturn this.${0}", "}", ""],
    description: "Creates a getter property inside a class in ES7 syntax"
  },
  propertySet: {
    prefix: "pse",
    body: ["set ${1:propertyName}(${2:value}) {", "\t${0}", "}", ""],
    description: "Creates a setter property inside a class in ES7 syntax"
  },
  forEach: {
    prefix: "fre",
    body: ["${1:array}.forEach(${2:currentItem} => {", "\t${0}", "})", ""],
    description: "Creates a forEach statement in ES7 syntax"
  },
  forOf: {
    prefix: "fof",
    body: ["for(let ${1:item} of ${2:object}) {", "\t${0}", "}", ""],
    description: "Iterating over property names of iterable objects"
  },
  forIn: {
    prefix: "fin",
    body: ["for(let ${1:item} in ${2:object}) {", "\t${0}", "}", ""],
    description: "Iterating over property values of iterable objects"
  },
  anonymousFunction: {
    prefix: "anfn",
    body: ["(${1:params}) => {", "\t${2}", "}"],
    description: "Creates an anonymous function in ES7 syntax"
  },
  namedFunction: {
    prefix: "nfn",
    body: ["const ${1:name} = (${2:params}) => {", "\t${3}", "}", ""],
    description: "Creates a named function in ES7 syntax"
  },
  destructingObject: {
    prefix: "dob",
    body: "const {${1:propertyName}} = ${2:objectToDestruct}",
    description: "Creates and assigns a local variable using object destructing"
  },
  destructingArray: {
    prefix: "dar",
    body: "const [${1:propertyName}] = ${2:arrayToDestruct}",
    description: "Creates and assigns a local variable using array destructing"
  },
  setInterval: {
    prefix: "sti",
    body: ["setInterval(() => {", "\t${2}", "}, ${0:intervalInms})", ""],
    description: "Executes the given function at specified intervals in ES7 syntax"
  },
  setTimeOut: {
    prefix: "sto",
    body: ["setTimeout(() => {", "\t${2}", "}, ${1:delayInms})", ""],
    description: "Executes the given function after the specified delay in ES7 syntax"
  },
  promise: {
    prefix: "prom",
    body: ["return new Promise((resolve, reject) => {", "\t${1}", "})", ""],
    description: "Creates and returns a new Promise in the standard ES7 syntax"
  },
  consoleAssert: {
    prefix: "cas",
    body: "console.assert(${1:expression}, ${2:object})",
    description: "If the specified expression is false, the message is written to the console along with a stack trace"
  },
  consoleClear: {
    prefix: "ccl",
    body: "console.clear()",
    description: "Clears the console"
  },
  consoleCount: {
    prefix: "cco",
    body: "console.count(${1:label})",
    description: "Writes the the number of times that count() has been invoked at the same line and with the same label"
  },
  consoleDir: {
    prefix: "cdi",
    body: "console.dir(${1:object})",
    description: "Prints a JavaScript representation of the specified object"
  },
  consoleError: {
    prefix: "cer",
    body: "console.error(${1:object})",
    description: "Displays a message in the console and also includes a stack trace from where the method was called"
  },
  consoleGroup: {
    prefix: "cgr",
    body: "console.group(\"${1:label}\")",
    description: "Groups and indents all following output by an additional level, until console.groupEnd() is called."
  },
  consoleGroupEnd: {
    prefix: "cge",
    body: "console.groupEnd()",
    description: "Closes out the corresponding console.group()."
  },
  consoleLog: {
    prefix: "clg",
    body: "console.log(${1:object})",
    description: "Displays a message in the console"
  },
  consoleTrace: {
    prefix: "ctr",
    body: "console.trace(${1:object})",
    description: "Prints a stack trace from the point where the method was called"
  },
  consoleLogObject: {
    prefix: "clo",
    body: "console.log('${1:object}', ${1:object})",
    description: "Logs property with name."
  },
  consoleTime: {
    prefix: "ctm",
    body: "console.time('${1:object}')",
    description: "Console time wrapper"
  },
  consoleTimeEnd: {
    prefix: "cte",
    body: "console.timeEnd('${1:object}')",
    description: "Console time end wrapper"
  },
  consoleWarn: {
    prefix: "cwa",
    body: "console.warn(${1:object})",
    description: "Displays a message in the console but also displays a yellow warning icon along with the logged message"
  },
  consoleInfo: {
    prefix: "cin",
    body: "console.info(${1:object})",
    description: "Displays a message in the console but also displays a blue information icon along with the logged message"
  },
  destructProps: {
    prefix: "cp",
    body: ["const { $1 } = this.props"],
    description: "Creates and assigns a local variable using props destructing"
  },
  destructState: {
    prefix: "cs",
    body: ["const { $1 } = this.state"],
    description: "Creates and assigns a local variable using state destructing"
  },
  import React: {
    prefix: "imr",
    body: ["import React from 'react'", ""]
  },
  import ReactDOM: {
    prefix: "imrd",
    body: ["import ReactDOM from 'react-dom'", ""]
  },
  import React, { Component }: {
    prefix: "imrc",
    body: ["import React, { Component } from 'react'", ""]
  },
  import React, { Component } & PropTypes: {
    prefix: "imrcp",
    body: [
      "import React, { Component } from 'react'",
      "import PropTypes from 'prop-types'",
      ""
    ]
  },
  import React, { PureComponent }: {
    prefix: "imrpc",
    body: ["import React, { PureComponent } from 'react'", ""]
  },
  import React, { PureComponent } & PropTypes: {
    prefix: "imrpcp",
    body: [
      "import React, { PureComponent } from 'react'",
      "import PropTypes from 'prop-types'",
      ""
    ]
  },
  import React, { memo }: {
    prefix: "imrm",
    body: ["import React, { memo } from 'react'", ""]
  },
  import React, { memo } & PropTypes: {
    prefix: "imrmp",
    body: [
      "import React, { memo } from 'react'",
      "import PropTypes from 'prop-types'",
      ""
    ]
  },
  import React, {useState}: {
    prefix: "imrs",
    body: ["import React, { useState } from 'react'", ""]
  },
  import React, {useState, useEffect}: {
    prefix: "imrse",
    body: ["import React, { useState, useEffect } from 'react'", ""]
  },
  import PropTypes: {
    prefix: "impt",
    body: ["import PropTypes from 'prop-types'", ""]
  },
  import React Router: {
    prefix: "imrr",
    body: [
      "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
      ""
    ]
  },
  import React Browser Router: {
    prefix: "imbr",
    body: ["import { BrowserRouter as Router } from 'react-router-dom'", ""]
  },
  import React Browser Router - Route: {
    prefix: "imbrr",
    body: ["import { Route } from 'react-router-dom'", ""]
  },
  import React Browser Router - Route Combo: {
    prefix: "imbrc",
    body: [
      "import { Route, Switch, NavLink, Link } from 'react-router-dom'",
      ""
    ]
  },
  import React Browser Router - Switch: {
    prefix: "imbrs",
    body: ["import { Switch } from 'react-router-dom'", ""]
  },
  import React Browser Router - Link: {
    prefix: "imbrl",
    body: ["import { Link } from 'react-router-dom'", ""]
  },
  import React Browser Router - NavLink: {
    prefix: "imbrnl",
    body: ["import { NavLink } from 'react-router-dom'", ""]
  },
  import redux statement: {
    prefix: "redux",
    body: ["import { connect } from 'react-redux'", ""]
  },
  reactClassCompoment: {
    prefix: "rcc",
    body: [
      "import React, { Component } from 'react'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ],
    description: "Creates a React component class with ES7 module system"
  },
  reactClassExportComponent: {
    prefix: "rce",
    body: [
      "import React, { Component } from 'react'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React component class with ES7 module system"
  },
  reactFunctionalExportComponent: {
    prefix: "rfce",
    body: [
      "import React from 'react'",
      "",
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React Functional Component with ES7 module system"
  },
  reactFunctionalComponent: {
    prefix: "rfc",
    body: [
      "import React from 'react'",
      "",
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      ""
    ],
    description: "Creates a React Functional Component with ES7 module system"
  },
  reactFunctionalComponentWithPropTypes: {
    prefix: "rfcp",
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "function ${1:${TM_FILENAME_BASE}}(props) {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      "",
      ""
    ],
    description: "Creates a React Functional Component with ES7 module system with PropTypes"
  },
  reactArrowFunctionExportComponent: {
    prefix: "rafce",
    body: [
      "import React from 'react'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React Arrow Function Component with ES7 module system"
  },
  reactArrowFunctionComponent: {
    prefix: "rafc",
    body: [
      "import React from 'react'",
      "",
      "export const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      ""
    ],
    description: "Creates a React Arrow Function Component with ES7 module system"
  },
  reactArrowFunctionComponentWithPropTypes: {
    prefix: "rafcp",
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = props => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React Arrow Function Component with ES7 module system with PropTypes"
  },
  reactClassExportComponentWithPropTypes: {
    prefix: "rcep",
    body: [
      "import React, { Component } from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\tstatic propTypes = {",
      "",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React component class with ES7 module system"
  },
  reactClassPureComponent: {
    prefix: "rpc",
    body: [
      "import React, { PureComponent } from 'react'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ],
    description: "Creates a React pure component class with ES7 module system"
  },
  reactClassExportPureComponent: {
    prefix: "rpce",
    body: [
      "import React, { PureComponent } from 'react'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "export default ${1:$TM_FILENAME_BASE}",
      ""
    ],
    description: "Creates a React pure component class with ES7 module system export"
  },
  reactClassPureComponentWithPropTypes: {
    prefix: "rpcp",
    body: [
      "import React, { PureComponent } from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
      "\tstatic propTypes = {",
      "",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ],
    description: "Creates a React component class with ES7 module system"
  },
  reactFunctionMemoComponent: {
    prefix: "rmc",
    body: [
      "import React, { memo } from 'react'",
      "",
      "export default memo(function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "})",
      ""
    ],
    description: "Creates a React Memo Function Component with ES7 module system"
  },
  reactFunctionMemoComponentWithPropTypes: {
    prefix: "rmcp",
    body: [
      "import React, { memo } from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = memo(function ${1:${TM_FILENAME_BASE}}(props) {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "})",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React Memo Function Component with ES7 module system with PropTypes"
  },
  reactClassCompomentPropTypes: {
    prefix: "rccp",
    body: [
      "import React, { Component } from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\tstatic propTypes = {",
      "\t\t${2:prop}: ${3:PropTypes}",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ],
    description: "Creates a React component class with PropTypes and ES7 module system"
  },
  reactClassCompomentRedux: {
    prefix: "rcredux",
    body: [
      "import React, { Component } from 'react'",
      "import { connect } from 'react-redux'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "const mapStateToProps = (state) => ({",
      "\t",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      "",
      "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
      ""
    ],
    description: "Creates a React component class with connected redux and ES7 module system"
  },
  reactClassCompomentReduxPropTypes: {
    prefix: "rcreduxp",
    body: [
      "import React, { Component } from 'react'",
      "import PropTypes from 'prop-types'",
      "import { connect } from 'react-redux'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\tstatic propTypes = {",
      "\t\t${2:prop}: ${3:PropTypes}",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$0",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "const mapStateToProps = (state) => ({",
      "\t",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      "",
      "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
      ""
    ],
    description: "Creates a React component class with PropTypes with connected redux and ES7 module system"
  },
  reactFunctionalCompomentRedux: {
    prefix: "rfcredux",
    body: [
      "import React from 'react'",
      "import { connect } from 'react-redux'",
      "",
      "export const ${1:${TM_FILENAME_BASE}} = (props) => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "const mapStateToProps = (state) => ({",
      "\t",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      "",
      "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
      ""
    ],
    description: "Creates a React functional component with connected redux and ES7 module system"
  },
  reactFunctionalCompomentReduxPropTypes: {
    prefix: "rfcreduxp",
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "import { connect } from 'react-redux'",
      "",
      "export const ${1:${TM_FILENAME_BASE}} = (props) => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "\t${2:props}: ${3:PropTypes}",
      "}",
      "",
      "const mapStateToProps = (state) => ({",
      "\t",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      "",
      "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
      ""
    ],
    description: "Creates a React functional component with PropTypes with connected redux and ES7 module system"
  },
  mappingToProps: {
    prefix: "reduxmap",
    body: [
      "const mapStateToProps = (state) => ({",
      "\t${1}",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      ""
    ]
  },
  classConstructor: {
    prefix: "rconst",
    body: [
      "constructor(props) {",
      "\tsuper(props)",
      "",
      "\tthis.state = {",
      "\t\t $0",
      "\t}",
      "}",
      ""
    ],
    description: "Adds a default constructor for it('', () => {})the class that contains props as arguments"
  },
  emptyState: {
    prefix: "est",
    body: ["state = {", "\t$1", "}", ""],
    description: "Creates empty state object. To be used in a constructor."
  },
  componentWillMount: {
    prefix: "cwm",
    body: ["componentWillMount() {", "\t$0", "}", ""],
    description: "DEPRECATED!!!. Invoked once, both on the client and server, immediately before the initial rendering occurs"
  },
  componentDidMount: {
    prefix: "cdm",
    body: ["componentDidMount() {", "\t$0", "}", ""],
    description: "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
  },
  componentWillReceiveProps: {
    prefix: "cwr",
    body: ["componentWillReceiveProps(nextProps) {", "\t$0", "}", ""],
    description: "DEPRECATED!!!. Invoked when a component is receiving new props. This method is not called for the initial render."
  },
  shouldComponentUpdate: {
    prefix: "scu",
    body: ["shouldComponentUpdate(nextProps, nextState) {", "\t$0", "}", ""],
    description: "Invoked before rendering when new props or state are being received. "
  },
  componentWillUpdate: {
    prefix: "cwup",
    body: ["componentWillUpdate(nextProps, nextState) {", "\t$0", "}", ""],
    description: "DEPRECATED!!!. Invoked immediately before rendering when new props or state are being received."
  },
  componentDidUpdate: {
    prefix: "cdup",
    body: ["componentDidUpdate(prevProps, prevState) {", "\t$0", "}", ""],
    description: "Invoked immediately after the component's updates are flushed to the DOM."
  },
  componentWillUnmount: {
    prefix: "cwun",
    body: ["componentWillUnmount() {", "\t$0", "}", ""],
    description: "Invoked immediately before a component is unmounted from the DOM."
  },
  getDerivedStateFromProps: {
    prefix: "gdsfp",
    body: ["static getDerivedStateFromProps(props, state) {", "\t${1}", "}"],
    description: "Invoked right before calling the render method, both on the initial mount and on subsequent updates."
  },
  getSnapshotBeforeUpdate: {
    prefix: "gsbu",
    body: [
      "getSnapshotBeforeUpdate = (prevProps, prevState) => {",
      "\t$0",
      "}",
      ""
    ],
    description: "Called right before mutations are made (e.g. before the DOM is updated)"
  },
  componentRender: {
    prefix: "ren",
    body: [
      "render() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}"
    ],
    description: "Basic render."
  },
  createContext: {
    prefix: "rcontext",
    body: ["const ${1:contextName} = React.createContext()", ""],
    description: "Create React context"
  },
  createRef: {
    prefix: "cref",
    body: ["this.${1:refName}Ref = React.createRef()", ""],
    description: "Create ref statement used inside constructor"
  },
  forwardRef: {
    prefix: "fref",
    body: ["const ref = React.createRef()", ""],
    description: "Forward ref statement used inside component"
  },
  componentSetStateObject: {
    prefix: "sst",
    body: "this.setState({$0})",
    description: "Performs a shallow merge of nextState into current state"
  },
  componentSetStateFunc: {
    prefix: "ssf",
    body: ["this.setState((state, props) => { return { $0 }})", ""],
    description: "Performs a shallow merge of nextState into current state"
  },
  componentProps: {
    prefix: "props",
    body: "this.props.$0",
    description: "Access component's props"
  },
  componentState: {
    prefix: "state",
    body: "this.state.$0"
  },
  bindThis: {
    prefix: "bnd",
    body: "this.${1:methodName} = this.${1:methodName}.bind(this)$0",
    description: "Binds this to a method"
  },
  reduxAction: {
    prefix: "rxaction",
    body: [
      "export const ${1:actionName} = (payload) => ({",
      "\ttype: ${3:type},",
      "\tpayload",
      "})",
      ""
    ]
  },
  reduxConst: {
    prefix: "rxconst",
    body: "export const ${1:constantName} = '${1:constantName}'"
  },
  reduxReducer: {
    prefix: "rxreducer",
    body: [
      "const initialState = {",
      "",
      "}",
      "",
      "export default (state = initialState, { type, payload }) => {",
      "\tswitch (type) {",
      "",
      "\tcase ${1:typeName}:",
      "\t\treturn { ...state, ...payload }",
      "",
      "\tdefault:",
      "\t\treturn state",
      "\t}",
      "}",
      ""
    ]
  },
  reduxSelector: {
    prefix: "rxselect",
    body: [
      "import { createSelector } from 'reselect'",
      "",
      "export const ${1:selectorName} = state => state.${2:selector}",
      ""
    ]
  },
  reduxSlice: {
    prefix: "rxslice",
    body: [
      "import { createSlice } from '@reduxjs/toolkit'",
      "",
      "const initialState = {",
      "",
      "}",
      "",
      "const ${1:${TM_FILENAME_BASE}} = createSlice({",
      "\tname: ${2:sliceName},",
      "\tinitialState,",
      "\treducers: {",
      "\t",
      "\t}",
      "});",
      "",
      "export const {",
      "",
      "} = ${1:${TM_FILENAME_BASE}}.actions",
      "export default ${1:${TM_FILENAME_BASE}}.reducer"
    ]
  },
  reactNativeComponent: {
    prefix: "rnc",
    body: [
      "import React, { Component } from 'react'",
      "import { Text, View } from 'react-native'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ]
  },
  reactNativeComponentWithStyles: {
    prefix: "rncs",
    body: [
      "import React, { Component } from 'react'",
      "import { Text, StyleSheet, View } from 'react-native'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "const styles = StyleSheet.create({})",
      ""
    ]
  },
  reactNativeComponentExport: {
    prefix: "rnce",
    body: [
      "import React, { Component } from 'react'",
      "import { Text, View } from 'react-native'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ]
  },
  reactNativePureComponent: {
    prefix: "rnpc",
    body: [
      "import React, { PureComponent } from 'react'",
      "import { Text, View } from 'react-native'",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      ""
    ]
  },
  reactNativePureComponentExport: {
    prefix: "rnpce",
    body: [
      "import React, { PureComponent } from 'react'",
      "import { Text, View } from 'react-native'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ]
  },
  reactNativeClassComponentRedux: {
    prefix: "rncredux",
    body: [
      "import React, { Component } from 'react'",
      "import { View, Text } from 'react-native'",
      "import PropTypes from 'prop-types'",
      "import { connect } from 'react-redux'",
      "",
      "export class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\tstatic propTypes = {",
      "\t\t${2:prop}: ${3:PropTypes}",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<View>",
      "\t\t\t\t<Text> ${2:textInComponent} </Text>",
      "\t\t\t</View>",
      "\t\t)",
      "\t}",
      "}",
      "",
      "const mapStateToProps = (state) => ({",
      "\t",
      "})",
      "",
      "const mapDispatchToProps = {",
      "\t",
      "}",
      "",
      "export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
      ""
    ],
    description: "Creates a React Native component class with PropTypes with connected redux and ES7 module system"
  },
  reactNativeFunctionalExportComponent: {
    prefix: "rnfe",
    body: [
      "import React from 'react'",
      "import { View, Text } from 'react-native'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ]
  },
  reactNativeFunctionalExportComponentWithStyles: {
    prefix: "rnfes",
    body: [
      "import React from 'react'",
      "import { StyleSheet, Text, View } from 'react-native'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      "",
      "const styles = StyleSheet.create({})",
      ""
    ]
  },
  reactNativeFunctionalComponent: {
    prefix: "rnf",
    body: [
      "import React from 'react'",
      "import { View, Text } from 'react-native'",
      "",
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      ""
    ]
  },
  reactNativeFunctionalComponentWithStyles: {
    prefix: "rnfs",
    body: [
      "import React from 'react'",
      "import { StyleSheet, Text, View } from 'react-native'",
      "",
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "const styles = StyleSheet.create({})",
      ""
    ]
  },
  reactNativeImport: {
    prefix: "imrn",
    body: "import { ${1:moduleName} } from 'react-native'"
  },
  reactNativeStyles: {
    prefix: "rnstyle",
    body: ["const styles = StyleSheet.create({", "\t${1:style}", "})", ""]
  },
  propTypeArray: {
    prefix: "pta",
    body: "PropTypes.array,",
    description: "Array prop type"
  },
  propTypeArrayRequired: {
    prefix: "ptar",
    body: "PropTypes.array.isRequired,",
    description: "Array prop type required"
  },
  propTypeBool: {
    prefix: "ptb",
    body: "PropTypes.bool,",
    description: "Bool prop type"
  },
  propTypeBoolRequired: {
    prefix: "ptbr",
    body: "PropTypes.bool.isRequired,",
    description: "Bool prop type required"
  },
  propTypeFunc: {
    prefix: "ptf",
    body: "PropTypes.func,",
    description: "Func prop type"
  },
  propTypeFuncRequired: {
    prefix: "ptfr",
    body: "PropTypes.func.isRequired,",
    description: "Func prop type required"
  },
  propTypeNumber: {
    prefix: "ptn",
    body: "PropTypes.number,",
    description: "Number prop type"
  },
  propTypeNumberRequired: {
    prefix: "ptnr",
    body: "PropTypes.number.isRequired,",
    description: "Number prop type required"
  },
  propTypeObject: {
    prefix: "pto",
    body: "PropTypes.object,",
    description: "Object prop type"
  },
  propTypeObjectRequired: {
    prefix: "ptor",
    body: "PropTypes.object.isRequired,",
    description: "Object prop type required"
  },
  propTypeString: {
    prefix: "pts",
    body: "PropTypes.string,",
    description: "String prop type"
  },
  propTypeStringRequired: {
    prefix: "ptsr",
    body: "PropTypes.string.isRequired,",
    description: "String prop type required"
  },
  propTypeNode: {
    prefix: "ptnd",
    body: "PropTypes.node,",
    description: "Anything that can be rendered: numbers, strings, elements or an array"
  },
  propTypeNodeRequired: {
    prefix: "ptndr",
    body: "PropTypes.node.isRequired,",
    description: "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  propTypeElement: {
    prefix: "ptel",
    body: "PropTypes.element,",
    description: "React element prop type"
  },
  propTypeElementRequired: {
    prefix: "ptelr",
    body: "PropTypes.element.isRequired,",
    description: "React element prop type required"
  },
  propTypeInstanceOf: {
    prefix: "pti",
    body: "PropTypes.instanceOf($0),",
    description: "Is an instance of a class prop type"
  },
  propTypeInstanceOfRequired: {
    prefix: "ptir",
    body: "PropTypes.instanceOf($0).isRequired,",
    description: "Is an instance of a class prop type required"
  },
  propTypeEnum: {
    prefix: "pte",
    body: "PropTypes.oneOf(['$0']),",
    description: "Prop type limited to specific values by treating it as an enum"
  },
  propTypeEnumRequired: {
    prefix: "pter",
    body: "PropTypes.oneOf(['$0']).isRequired,",
    description: "Prop type limited to specific values by treating it as an enum required"
  },
  propTypeOneOfType: {
    prefix: "ptet",
    body: ["PropTypes.oneOfType([", "\t$0", "]),"],
    description: "An object that could be one of many types"
  },
  propTypeOneOfTypeRequired: {
    prefix: "ptetr",
    body: ["PropTypes.oneOfType([", "\t$0", "]).isRequired,"],
    description: "An object that could be one of many types required"
  },
  propTypeArrayOf: {
    prefix: "ptao",
    body: "PropTypes.arrayOf($0),",
    description: "An array of a certain type"
  },
  propTypeArrayOfRequired: {
    prefix: "ptaor",
    body: "PropTypes.arrayOf($0).isRequired,",
    description: "An array of a certain type required"
  },
  propTypeObjectOf: {
    prefix: "ptoo",
    body: "PropTypes.objectOf($0),",
    description: "An object with property values of a certain type"
  },
  propTypeObjectOfRequired: {
    prefix: "ptoor",
    body: "PropTypes.objectOf($0).isRequired,",
    description: "An object with property values of a certain type required"
  },
  propTypeShape: {
    prefix: "ptsh",
    body: ["PropTypes.shape({", "\t$0", "}),"],
    description: "An object taking on a particular shape"
  },
  propTypeShapeRequired: {
    prefix: "ptshr",
    body: ["PropTypes.shape({", "\t$0", "}).isRequired,"],
    description: "An object taking on a particular shape required"
  },
  propTypeExact: {
    prefix: "ptex",
    body: ["PropTypes.exact({", "\t$0", "}),"],
    description: "An object with warnings on extra properties"
  },
  propTypeExactRequired: {
    prefix: "ptexr",
    body: ["PropTypes.exact({", "\t$0", "}).isRequired,"],
    description: "An object with warnings on extra properties required"
  },
  staticPropTpyes: {
    prefix: "ptypes",
    body: ["static propTypes = {", "$0", "}", ""]
  },
  propTypeAny: {
    prefix: "ptany",
    body: "PropTypes.any,",
    description: "Any prop type"
  },
  Comment Big Block: {
    prefix: "cmmb",
    body: ["/**", " * ${0}", " */"]
  },
  describeBlock: {
    prefix: "desc",
    body: ["describe('$1', () => {", "\t$0", "})", ""],
    description: "Testing `describe` block"
  },
  testBlock: {
    prefix: "test",
    body: ["test('should $1', () => {", "\t$0", "})", ""],
    description: "Testing `test` block"
  },
  testAsyncBlock: {
    prefix: "testa",
    body: ["test('should $1', async () => {", "\t$0", "})", ""],
    description: "Testing `asynchronous test` block"
  },
  itBlock: {
    prefix: "tit",
    body: ["it('should $1', () => {", "\t$0", "})", ""],
    description: "Testing `it` block"
  },
  itAsyncBlock: {
    prefix: "tita",
    body: ["it('should $1', async () => {", "\t$0", "})", ""],
    description: "Testing asynchronous `it` block"
  },
  setupReactTest: {
    prefix: "stest",
    body: [
      "import React from 'react'",
      "import renderer from 'react-test-renderer'",
      "",
      "import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  setupReactNativeTest: {
    prefix: "sntest",
    body: [
      "import 'react-native'",
      "import React from 'react'",
      "import renderer from 'react-test-renderer'",
      "",
      "import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  setupReactComponentTestWithRedux: {
    prefix: "srtest",
    body: [
      "import React from 'react'",
      "import renderer from 'react-test-renderer'",
      "import { Provider } from 'react-redux'",
      "",
      "import store from 'src/store'",
      "import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(",
      "\t\t<Provider store={store}>",
      "\t\t <${1:${TM_FILENAME_BASE}} {...defaultProps} />",
      "\t\t</Provider>,",
      "\t)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ],
    description: "Create test component"
  },
  setupReactNativeTestWithRedux: {
    prefix: "snrtest",
    body: [
      "import 'react-native'",
      "import React from 'react'",
      "import renderer from 'react-test-renderer'",
      "import { Provider } from 'react-redux'",
      "",
      "import store from 'src/store'",
      "import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(",
      "\t\t<Provider store={store}>",
      "\t\t\t<${1:${TM_FILENAME_BASE}} {...defaultProps} />",
      "\t\t</Provider>,",
      "\t)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  graphQLForComponent: {
    prefix: "graphql",
    body: ["import { compose, graphql } from 'react-apollo'", ""]
  },
  exportGraphQL: {
    prefix: "expgql",
    body: [
      "export default compose(",
      "\tgraphql(${1:queryOrMutation}, { name: ${2:name} }),",
      ")(${1:${TM_FILENAME_BASE}})"
    ]
  },
  hocComponentWithRedux: {
    prefix: "hocredux",
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "import { connect } from 'react-redux'",
      "",
      "export const mapStateToProps = state => ({",
      "",
      "})",
      "",
      "export const mapDispatchToProps = {",
      " ",
      "}",
      "",
      "export const ${1:hocComponentName} = (WrappedComponent) => {",
      "\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "\thocComponent.propTypes = {",
      "\t}",
      "",
      "\treturn hocComponent",
      "}",
      "",
      "export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))",
      ""
    ]
  },
  hocComponent: {
    prefix: "hoc",
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "",
      "export default (WrappedComponent) => {",
      "\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "\thocComponent.propTypes = {",
      "\t}",
      "",
      "\treturn hocComponent",
      "}",
      ""
    ]
  },
  useState: {
    prefix: "useState",
    body: [
      "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState})"
    ]
  },
  useEffect: {
    prefix: "useEffect",
    body: [
      "useEffect(() => {",
      "\t${1:effect}",
      "\treturn () => {",
      "\t\t${2:cleanup}",
      "\t}",
      "}, [${3:input}])"
    ]
  },
  useContext: {
    prefix: "useContext",
    body: ["const ${1:context} = useContext(${2:contextValue})"]
  },
  useReducer: {
    prefix: "useReducer",
    body: [
      "const [state, dispatch] = useReducer(${1:reducer}, ${2:initialState}, ${3:init})"
    ]
  },
  useCallback: {
    prefix: "useCallback",
    body: [
      "useCallback(",
      "\t() => {",
      "\t\t${1:callback}",
      "\t},",
      "\t[${2:input}],",
      ")"
    ]
  },
  useMemo: {
    prefix: "useMemo",
    body: ["useMemo(() => ${1:function}, ${2:input})"]
  },
  useRef: {
    prefix: "useRef",
    body: ["const ${1:ref} = useRef(${2:initialValue})"]
  },
  useImperativeHandle: {
    prefix: "useImperativeHandle",
    body: [
      "useImperativeHandle(",
      "\t${1:ref},",
      "\t() => {",
      "\t\t${2:handler}",
      "\t},",
      "\t[${3:input}],",
      ")"
    ]
  },
  useDebugValue: {
    prefix: "useDebugValue",
    body: ["useDebugValue(${1:value})"]
  },
  useLayoutEffect: {
    prefix: "useLayoutEffect",
    body: [
      "useLayoutEffect(() => {",
      "\t${1:effect}",
      "\treturn () => {",
      "\t\t${2:cleanup}",
      "\t};",
      "}, [${3:input}])"
    ]
  },
  useSelector: {
    prefix: "useSelector",
    body: ["const ${1:state} = useSelector(state => state.${1:state})"]
  },
  useDispatch: {
    prefix: "useDispatch",
    body: ["const dispatch = useDispatch(${1:function})"]
  },
  typeof: {
    prefix: "tpf",
    body: ["typeof ${0}"]
  },
  _reactFunctionalExportComponent: {
    prefix: "_rfce",
    body: [
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React 17 Functional Component with ES7 module system"
  },
  _reactFunctionalComponent: {
    prefix: "_rfc",
    body: [
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      ""
    ],
    description: "Creates a React 17 Functional Component with ES7 module system"
  },
  _reactFunctionalComponentWithPropTypes: {
    prefix: "_rfcp",
    body: [
      "import PropTypes from 'prop-types'",
      "",
      "function ${1:${TM_FILENAME_BASE}}(props) {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      "",
      ""
    ],
    description: "Creates a React 17 Functional Component with ES7 module system with PropTypes"
  },
  _reactArrowFunctionExportComponent: {
    prefix: "_rafce",
    body: [
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React 17 Arrow Function Component with ES7 module system"
  },
  _reactArrowFunctionComponent: {
    prefix: "_rafc",
    body: [
      "export const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      ""
    ],
    description: "Creates a React 17 Arrow Function Component with ES7 module system"
  },
  _reactArrowFunctionComponentWithPropTypes: {
    prefix: "_rafcp",
    body: [
      "import PropTypes from 'prop-types'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = props => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "${1:${TM_FILENAME_BASE}}.propTypes = {",
      "",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    description: "Creates a React 17 Arrow Function Component with ES7 module system with PropTypes"
  },
  _reactNativeFunctionalExportComponent: {
    prefix: "_rnfe",
    body: [
      "import { View, Text } from 'react-native'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ]
  },
  _reactNativeFunctionalExportComponentWithStyles: {
    prefix: "_rnfes",
    body: [
      "import { StyleSheet, Text, View } from 'react-native'",
      "",
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      "",
      "const styles = StyleSheet.create({})",
      ""
    ]
  },
  _reactNativeFunctionalComponent: {
    prefix: "_rnf",
    body: [
      "import { View, Text } from 'react-native'",
      "",
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      ""
    ]
  },
  _reactNativeFunctionalComponentWithStyles: {
    prefix: "_rnfs",
    body: [
      "import { StyleSheet, Text, View } from 'react-native'",
      "",
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<View>",
      "\t\t\t<Text>$0</Text>",
      "\t\t</View>",
      "\t)",
      "}",
      "",
      "const styles = StyleSheet.create({})",
      ""
    ]
  },
  _setupReactTest: {
    prefix: "_stest",
    body: [
      "import renderer from 'react-test-renderer'",
      "",
      "import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  _setupReactNativeTest: {
    prefix: "_sntest",
    body: [
      "import 'react-native'",
      "import renderer from 'react-test-renderer'",
      "",
      "import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  _setupReactComponentTestWithRedux: {
    prefix: "_srtest",
    body: [
      "import renderer from 'react-test-renderer'",
      "import { Provider } from 'react-redux'",
      "",
      "import store from 'src/store'",
      "import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(",
      "\t\t<Provider store={store}>",
      "\t\t <${1:${TM_FILENAME_BASE}} {...defaultProps} />",
      "\t\t</Provider>,",
      "\t)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ],
    description: "Create test component"
  },
  _setupReactNativeTestWithRedux: {
    prefix: "_snrtest",
    body: [
      "import 'react-native'",
      "import renderer from 'react-test-renderer'",
      "import { Provider } from 'react-redux'",
      "",
      "import store from 'src/store'",
      "import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
      "",
      "describe('<${1:${TM_FILENAME_BASE}} />', () => {",
      "\tconst defaultProps = {}",
      "\tconst wrapper = renderer.create(",
      "\t\t<Provider store={store}>",
      "\t\t\t<${1:${TM_FILENAME_BASE}} {...defaultProps} />",
      "\t\t</Provider>,",
      "\t)",
      "",
      "\ttest('render', () => {",
      "\t\texpect(wrapper).toMatchSnapshot()",
      "\t})",
      "})",
      ""
    ]
  },
  _hocComponentWithRedux: {
    prefix: "_hocredux",
    body: [
      "import PropTypes from 'prop-types'",
      "import { connect } from 'react-redux'",
      "",
      "export const mapStateToProps = state => ({",
      "",
      "})",
      "",
      "export const mapDispatchToProps = {",
      " ",
      "}",
      "",
      "export const ${1:hocComponentName} = (WrappedComponent) => {",
      "\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "\thocComponent.propTypes = {",
      "\t}",
      "",
      "\treturn hocComponent",
      "}",
      "",
      "export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))",
      ""
    ]
  },
  _hocComponent: {
    prefix: "_hoc",
    body: [
      "import PropTypes from 'prop-types'",
      "",
      "export default (WrappedComponent) => {",
      "\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "\thocComponent.propTypes = {",
      "\t}",
      "",
      "\treturn hocComponent",
      "}",
      ""
    ]
  }
}
