{
  // ==========================================================================================================================
  // React Native
  "reactNativeComponent": {
    "prefix": "rnc",
    "body": [
      "import React, { Component } from 'react';",
      "import { View, Text } from 'react-native';",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends Component {",
      "  constructor(props) {",
      "    super(props);",
      "    this.state = {",
      "    };",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View>",
      "        <Text> ${2:${TM_FILENAME_BASE}} </Text>",
      "      </View>",
      "    );",
      "  }",
      "}",
      ""
    ],
    "description": "React Native Component"
  },
  "reactNativeComponentExport": {
    "prefix": "rnce",
    "body": [
      "import React, { Component } from 'react';",
      "import { View, Text } from 'react-native';",
      "",
      "class ${1:${TM_FILENAME_BASE}} extends Component {",
      "  constructor(props) {",
      "    super(props);",
      "    this.state = {",
      "    };",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View>",
      "        <Text> ${2:${TM_FILENAME_BASE}} </Text>",
      "      </View>",
      "    );",
      "  }",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}};",
      ""
    ],
    "description": "React Native Component Export"
  },
  "reactNativePureComponent": {
    "prefix": "rnpc",
    "body": [
      "import React, { PureComponent } from 'react';",
      "import {  View, Text } from 'react-native';",
      "",
      "export default class ${0:${TM_FILENAME_BASE}} extends PureComponent {",
      "  constructor(props) {",
      "    super(props);",
      "    this.state = {",
      "    };",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View>",
      "        <Text> ${0:componentText} </Text>",
      "      </View>",
      "    );",
      "  }",
      "}",
      ""
    ],
    "description": "React Native PureComponent"
  },
  "reactNativePureComponentExport": {
    "prefix": "rnpce",
    "body": [
      "import React, { PureComponent } from 'react';",
      "import {  View, Text } from 'react-native';",
      "",
      "class ${1:componentName} extends PureComponent {",
      "  constructor(props) {",
      "    super(props);",
      "    this.state = {",
      "    };",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <View>",
      "        <Text> ${0:componentText} </Text>",
      "      </View>",
      "    );",
      "  }",
      "}",
      "",
      "export default ${1:componentName};",
      ""
    ],
    "description": "React Native PureComponent with export"
  },
  "reactNativeComponentStateLess": {
    "prefix": "rncsl",
    "body": [
      "import React from 'react';",
      "import { Text, View } from 'react-native';",
      "",
      "const ${1:componentName} = ({",
      "    ${2:params},",
      "}) => (",
      "    <View>",
      "        <Text>${1:textName}</Text>",
      "    </View>",
      ");",
      "",
      "export default ${1:componentName};",
      ""
    ],
    "description": "React Native component stateless"
  },
  "reactNativeComponentStateLessWC": {
    "prefix": "rncslwc",
    "body": [
      "import React from 'react';",
      "import { View } from 'react-native';",
      "",
      "const ${1:componentName} = ({",
      "    children, style, ...rest",
      "}) => (",
      "    <View style={style}>",
      "        {children}",
      "    </View>",
      ");",
      "",
      "export default ${1:componentName};",
      ""
    ],
    "description": "React Native component stateless with view children"
  },
  // ==========================================================================================================================
  // Style Sheet
  "StyleSheet Style": {
    "prefix": "rnss",
    "body": [
      "const styles = StyleSheet.create({",
      "\t$1",
      "});"
    ],
    "description": "React Native Stylesheet"
  },
  "style={...}": {
    "prefix": "sty",
    "body": "style={{${1}}}",
    "description": "styleProps"
  },
  "justifyContent": {
    "prefix": "just",
    "body": "justifyContent: '${1:center}',",
    "description": "justifyContent"
  },
  "alignItems": {
    "prefix": "align",
    "body": "alignItems: '${1:center}',",
    "description": "alignItems"
  },
  "alignSelf": {
    "prefix": "align",
    "body": "alignSelf: '${1:center}',",
    "description": "alignSelf"
  },
  "alignContent": {
    "prefix": "align",
    "body": "alignContent: '${1}',",
    "description": "alignContent"
  },
  "aspectRatio": {
    "prefix": "as",
    "body": "aspectRatio: '${1}',",
    "description": "aspectRatio"
  },
  "borderBottomWidth": {
    "prefix": "bor",
    "body": "borderBottomWidth: ${1},",
    "description": "borderBottomWidth"
  },
  "borderLeftWidth": {
    "prefix": "bor",
    "body": "borderLeftWidth: ${1},",
    "description": "borderLeftWidth"
  },
  "borderRightWidth": {
    "prefix": "bor",
    "body": "borderRightWidth: ${1},",
    "description": "borderRightWidth"
  },
  "borderTopWidth": {
    "prefix": "bor",
    "body": "borderTopWidth: ${1},",
    "description": "borderTopWidth"
  },
  "borderWidth": {
    "prefix": "bor",
    "body": "borderWidth: ${1},",
    "description": "borderWidth"
  },
  "borderColor": {
    "prefix": "bor",
    "body": "borderColor: ${1},",
    "description": "borderColor"
  },
  "borderRadius": {
    "prefix": "bor",
    "body": "borderRadius: ${1},",
    "description": "borderRadius"
  },
  "borderLeftColor": {
    "prefix": "bor",
    "body": "borderLeftColor: ${1},",
    "description": "borderLeftColor"
  },
  "borderRightColor": {
    "prefix": "bor",
    "body": "borderRightColor: ${1},",
    "description": "borderRightColor"
  },
  "borderTopColor": {
    "prefix": "bor",
    "body": "borderTopColor: ${1},",
    "description": "borderTopColor"
  },
  "borderBottomColor": {
    "prefix": "bor",
    "body": "borderBottomColor: ${1},",
    "description": "borderBottomColor"
  },
  "borderBottomLeftRadius": {
    "prefix": "bor",
    "body": "borderBottomLeftRadius: ${1},",
    "description": "borderBottomLeftRadius"
  },
  "borderBottomRightRadius": {
    "prefix": "bor",
    "body": "borderBottomRightRadius: ${1},",
    "description": "borderBottomRightRadius"
  },
  "borderTopLeftRadius": {
    "prefix": "bor",
    "body": "borderTopLeftRadius: ${1},",
    "description": "borderTopLeftRadius"
  },
  "borderTopRightRadius": {
    "prefix": "bor",
    "body": "borderTopRightRadius: ${1},",
    "description": "borderTopRightRadius"
  },
  "backgroundColor": {
    "prefix": "bac",
    "body": "backgroundColor: ${1},",
    "description": "backgroundColor"
  },
  "display": {
    "prefix": "di",
    "body": "display: '${1:none}',",
    "description": "display"
  },
  "opacity": {
    "prefix": "op",
    "body": "opacity: ${1},",
    "description": "opacity"
  },
  "shadowColor": {
    "prefix": "sha",
    "body": "shadowColor: '${1:none}',",
    "description": "shadowColor"
  },
  "shadowOffset": {
    "prefix": "sha",
    "body": "shadowOffset: ${1},",
    "description": "shadowOffset"
  },
  "shadowOpacity": {
    "prefix": "sha",
    "body": "shadowOpacity: ${1},",
    "description": "shadowOpacity"
  },
  "shadowRadius": {
    "prefix": "sha",
    "body": "shadowRadius: ${1},",
    "description": "shadowRadius"
  },
  "elevation": {
    "prefix": "e",
    "body": "elevation: ${1},",
    "description": "elevation"
  },
  "flex": {
    "prefix": "flex",
    "body": "flex: ${1},",
    "description": "flex"
  },
  "flexBasis": {
    "prefix": "flex",
    "body": "flexBasis: '${1}',",
    "description": "flexBasis"
  },
  "flexDirection": {
    "prefix": "flex",
    "body": "flexDirection: '${1:column}',",
    "description": "flexDirection"
  },
  "flexGrow": {
    "prefix": "flex",
    "body": "flexGrow: '${1}',",
    "description": "flexGrow"
  },
  "flexShrink": {
    "prefix": "flex",
    "body": "flexShrink: '${1}',",
    "description": "flexShrink"
  },
  "flexWrap": {
    "prefix": "flex",
    "body": "flexWrap: '${1}',",
    "description": "flexWrap"
  },
  "fontSize": {
    "prefix": "fo",
    "body": "fontSize: ${1},",
    "description": "fontSize"
  },
  "fontStyle": {
    "prefix": "fo",
    "body": "fontStyle: '${1:normal}',",
    "description": "fontStyle"
  },
  "fontFamily": {
    "prefix": "fo",
    "body": "fontFamily: '${1}',",
    "description": "fontFamily"
  },
  "fontWeight": {
    "prefix": "fo",
    "body": "fontWeight: '${1:normal}',",
    "description": "fontWeight"
  },
  "height": {
    "prefix": "h",
    "body": "height: ${1},",
    "description": "height"
  },
  "left": {
    "prefix": "l",
    "body": "left: ${1},",
    "description": "left"
  },
  "margin": {
    "prefix": "mar",
    "body": "margin: '${1}',",
    "description": "margin"
  },
  "marginBottom": {
    "prefix": "mar",
    "body": "marginBottom: ${1},",
    "description": "marginBottom"
  },
  "marginHorizontal": {
    "prefix": "mar",
    "body": "marginHorizontal: '${1}',",
    "description": "marginHorizontal"
  },
  "marginLeft": {
    "prefix": "mar",
    "body": "marginLeft: ${1},",
    "description": "marginLeft"
  },
  "marginRight": {
    "prefix": "mar",
    "body": "marginRight: ${1},",
    "description": "marginRight"
  },
  "marginTop": {
    "prefix": "mar",
    "body": "marginTop: ${1},",
    "description": "marginTop"
  },
  "marginVertical": {
    "prefix": "mar",
    "body": "marginVertical: '${1}',",
    "description": "marginVertical"
  },
  "maxHeight": {
    "prefix": "max",
    "body": "maxHeight: ${1},",
    "description": "maxHeight"
  },
  "maxWidth": {
    "prefix": "max",
    "body": "maxWidth: ${1},",
    "description": "maxWidth"
  },
  "minHeight": {
    "prefix": "min",
    "body": "minHeight: ${1},",
    "description": "minHeight"
  },
  "minWidth": {
    "prefix": "min",
    "body": "minWidth: ${1},",
    "description": "minWidth"
  },
  "overflow": {
    "prefix": "over",
    "body": "overflow: '${1}',",
    "description": "overflow"
  },
  "padding": {
    "prefix": "padding",
    "body": "padding: ${1},",
    "description": "padding"
  },
  "paddingBottom": {
    "prefix": "padding",
    "body": "paddingBottom: ${1},",
    "description": "paddingBottom"
  },
  "paddingHorizontal": {
    "prefix": "padding",
    "body": "paddingHorizontal: ${1},",
    "description": "paddingHorizontal"
  },
  "paddingLeft": {
    "prefix": "padding",
    "body": "paddingLeft: ${1},",
    "description": "paddingLeft"
  },
  "paddingRight": {
    "prefix": "padding",
    "body": "paddingRight: ${1},",
    "description": "paddingRight"
  },
  "paddingTop": {
    "prefix": "padding",
    "body": "paddingTop: ${1},",
    "description": "paddingTop"
  },
  "paddingVertical": {
    "prefix": "padding",
    "body": "paddingVertical: ${1},",
    "description": "paddingVertical"
  },
  "position": {
    "prefix": "pos",
    "body": "position: ${1},",
    "description": "position"
  },
  "right": {
    "prefix": "ri",
    "body": "right: ${1},",
    "description": "right"
  },
  "top": {
    "prefix": "top",
    "body": "top: ${1},",
    "description": "top"
  },
  "width": {
    "prefix": "w",
    "body": "width: ${1},",
    "description": "width"
  },
  "zIndex": {
    "prefix": "z",
    "body": "zIndex: ${1},",
    "description": "zIndex"
  },
  "direction": {
    "prefix": "di",
    "body": "direction: ${1},",
    "description": "direction"
  },
  "barStyle": {
    "prefix": "bar",
    "body": "barStyle = '${1:light-content}'",
    "description": "barStyle"
  },
  // ==========================================================================================================================
  // Redux
  "import redux statement": {
    "prefix": "rx",
    "body": [
      "import { connect } from 'react-redux';",
      ""
    ],
    "description": "import { connect } from 'react-redux';"
  },
  "mappingToProps": {
    "prefix": "rxmap",
    "body": [
      "const mapStateToProps = (state) => ({",
      "",
      "});",
      "const mapDispatchToProps = (dispatch) => ({",
      "",
      "});"
    ]
  },
  "reduxAction": {
    "prefix": "rxaction",
    "body": [
      "export const ${1:actionName} = (${2:param}) => ({",
      "  type: ${3:type},",
      "  payload: ${4:payload}",
      "})",
      ""
    ]
  },
  "reduxConst": {
    "prefix": "rxconst",
    "body": "export const ${1:constantName} = '${1:constantName}';"
  },
  "reduxReducer": {
    "prefix": "rxreducer",
    "body": [
      "const initialState = {",
      "",
      "}",
      "",
      "export default (state = initialState, action) => {",
      "  switch (action.type) {",
      "",
      "  case ${1:typeName}:",
      "    return { ...state };",
      "",
      "  default:",
      "    return state",
      "  }",
      "};",
      ""
    ]
  },
  "reduxSelector": {
    "prefix": "rxselect",
    "body": [
      "import { createSelector } from 'reselect';",
      "",
      "export const ${1:selectorName} = state => state.${2:selector}",
      ""
    ]
  },
  // ==========================================================================================================================
  // React
  "reactComponent": {
    "prefix": "rcc",
    "body": [
      "import React, { Component } from 'react';",
      "",
      "export default class ${1:componentName} extends Component {",
      "  render() {",
      "    return (",
      "      <div> ${2:textInComponent} </div>",
      "    );",
      "  }",
      "}",
      ""
    ],
    "description": "React Component"
  },
  "reactComponentExport": {
    "prefix": "rce",
    "body": [
      "import React, { Component } from 'react';",
      "",
      "class ${1:componentName} extends Component {",
      "  render() {",
      "    return (",
      "      <div> ${2:textInComponent} </div>",
      "    );",
      "  }",
      "}",
      "",
      "export default ${1:componentName};",
      ""
    ],
    "description": "React Component Export"
  },
  "import React": {
    "prefix": "imr",
    "body": [
      "import React from 'react';",
      ""
    ],
    "description": "import React from 'react';"
  },
  "import React, { Component }": {
    "prefix": "imrc",
    "body": [
      "import React, { Component } from 'react';",
      ""
    ],
    "description": "import React, { Component } from 'react';"
  },
  "Import React-Native Element": {
    "prefix": "imrn",
    "body": "import { $1 } from 'react-native';",
    "description": "Import React-Native Element"
  },
  "import React, { Component } & PropTypes": {
    "prefix": "imrcp",
    "body": [
      "import React, { Component } from 'react';",
      "import PropTypes from 'prop-types';",
      ""
    ]
  },
  "import React, { PureComponent }": {
    "prefix": "imrpc",
    "body": [
      "import React, { PureComponent } from 'react';",
      ""
    ],
    "description": "import React, { PureComponent } from 'react';"
  },
  "import React, { PureComponent } & PropTypes": {
    "prefix": "imrpcp",
    "body": [
      "import React, { PureComponent } from 'react';",
      "import PropTypes from 'prop-types';",
      ""
    ],
    "description": [
      "import React, { PureComponent } from 'react';",
      "import PropTypes from 'prop-types';",
      ""
    ]
  },
  "classConstructor": {
    "prefix": "rconst",
    "body": [
      "constructor(props) {",
      "  super(props)",
      "",
      "  this.state = {",
      "     $0",
      "  };",
      "};",
      ""
    ],
    "description": "Adds a default constructor for it('', () => {})the class that contains props as arguments"
  },
  "emptyState": {
    "prefix": "est",
    "body": [
      "this.state = {",
      "  $1",
      "};",
      ""
    ],
    "description": "Creates empty state object. To be used in a constructor."
  },
  "componentWillMount": {
    "prefix": "cwm",
    "body": [
      "componentWillMount = () => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked once, both on the client and server, immediately before the initial rendering occurs"
  },
  "componentDidMount": {
    "prefix": "cdm",
    "body": [
      "componentDidMount = () => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
  },
  "componentWillReceiveProps": {
    "prefix": "cwr",
    "body": [
      "componentWillReceiveProps = (nextProps) => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked when a component is receiving new props. This method is not called for the initial render."
  },
  "shouldComponentUpdate": {
    "prefix": "scu",
    "body": [
      "shouldComponentUpdate = (nextProps, nextState) => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked before rendering when new props or state are being received. "
  },
  "componentWillUpdate": {
    "prefix": "cwup",
    "body": [
      "componentWillUpdate = (nextProps, nextState) => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked immediately before rendering when new props or state are being received."
  },
  "componentDidUpdate": {
    "prefix": "cdup",
    "body": [
      "componentDidUpdate = (prevProps, prevState) => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked immediately after the component's updates are flushed to the DOM."
  },
  "componentWillUnmount": {
    "prefix": "cwun",
    "body": [
      "componentWillUnmount = () => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Invoked immediately before a component is unmounted from the DOM."
  },
  "componentRender": {
    "prefix": "ren",
    "body": [
      "render() {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "};"
    ],
    "description": "Basic render."
  },
  "componentSetStateObject": {
    "prefix": "sst",
    "body": "this.setState({$0})",
    "description": "Performs a shallow merge of nextState into current state"
  },
  "componentSetStateFunc": {
    "prefix": "ssf",
    "body": [
      "this.setState((state, props) => { return { $0 }})",
      ""
    ],
    "description": "Performs a shallow merge of nextState into current state"
  },
  // ==========================================================================================================================
  // BASIC ES7 JS
  "import": {
    "prefix": "imp",
    "body": "import ${2:moduleName} from '${1:module}';$0"
  },
  "importNoModuleName": {
    "prefix": "imn",
    "body": "import '${1:module}';$0"
  },
  "importDestructing": {
    "prefix": "imd",
    "body": "import { $2 } from '${1:module}';$0"
  },
  "importEverything": {
    "prefix": "ime",
    "body": "import * as ${2:alias} from '${1:module}';$0"
  },
  "importAs": {
    "prefix": "ima",
    "body": "import { ${2:originalName} as ${3:alias} } from '${1:module}';$0"
  },
  "exportDefault": {
    "prefix": "exp",
    "body": "export default $1$0"
  },
  "exportDestructing": {
    "prefix": "exd",
    "body": "export { $2 } from '${1:module}';$0"
  },
  "exportAs": {
    "prefix": "exa",
    "body": "export { ${2:originalName} as ${3:alias} } from '${1:module}';$0"
  },
  "exportNamedFunction": {
    "prefix": "enf",
    "body": [
      "export const ${1:functionName} = (${2:params}) => {",
      "  $0",
      "};",
      ";"
    ],
    "description": "Export named function in ES7 syntax"
  },
  "exportDefaultFunction": {
    "prefix": "edf",
    "body": [
      "export default (${1:params}) => {",
      "  $0",
      "};",
      ""
    ],
    "description": "Export default function in ES7 syntax"
  },
  "method": {
    "prefix": "met",
    "body": [
      "${1:methodName} = (${2:params}) => {",
      "  ${0};",
      "};",
      ""
    ],
    "description": "Creates a method inside a class in ES7 syntax"
  },
  "propertyGet": {
    "prefix": "pge",
    "body": [
      "get ${1:propertyName} = () => {",
      "  return this.${0};",
      "};",
      ""
    ],
    "description": "Creates a getter property inside a class in ES7 syntax"
  },
  "propertyset": {
    "prefix": "pse",
    "body": [
      "set ${1:propertyName} = (${2:value}) => {",
      "  ${0};",
      "}",
      ""
    ],
    "description": "Creates a setter property inside a class in ES7 syntax"
  },
  "forEach": {
    "prefix": "fre",
    "body": [
      "${1:array}.forEach(${2:currentItem} => {",
      "  ${0}",
      "})",
      ""
    ],
    "description": "Creates a forEach statement in ES7 syntax"
  },
  "forOf": {
    "prefix": "fof",
    "body": [
      "for(let ${1:item} of ${2:object}) {",
      "  ${0}",
      "}",
      ""
    ],
    "description": "Iterating over property names of iterable objects"
  },
  "forIn": {
    "prefix": "fin",
    "body": [
      "for(let ${1:item} in ${2:object}) {",
      "  ${0}",
      "}",
      ""
    ],
    "description": "Iterating over property values of iterable objects"
  },
  "anonymousFunction": {
    "prefix": "anfn",
    "body": [
      "(${1:params}) => {",
      "  ${2}",
      "}",
      ""
    ],
    "description": "Creates an anonymous function in ES7 syntax"
  },
  "namedFunction": {
    "prefix": "nfn",
    "body": [
      "const ${1:name} = (${2:params}) => {",
      "  ${3}",
      "}",
      ""
    ],
    "description": "Creates a named function in ES7 syntax"
  },
  "destructingObject": {
    "prefix": "dob",
    "body": "const {${1:propertyName}} = ${2:objectToDestruct}",
    "description": "Creates and assigns a local variable using object destructing"
  },
  "destructingArray": {
    "prefix": "dar",
    "body": "const [${1:propertyName}] = ${2:arrayToDestruct};",
    "description": "Creates and assigns a local variable using array destructing"
  },
  "setInterval": {
    "prefix": "sti",
    "body": [
      "setInterval(() => {",
      "  ${2}",
      "}, ${0:intervalInms})",
      ""
    ],
    "description": "Executes the given function at specified intervals in ES7 syntax"
  },
  "setTimeOut": {
    "prefix": "sto",
    "body": [
      "setTimeout(() => {",
      "  ${2}",
      "}, ${1:delayInms})",
      ""
    ],
    "description": "Executes the given function after the specified delay in ES7 syntax"
  },
  "promise": {
    "prefix": "prom",
    "body": [
      "return new Promise((resolve, reject) => {",
      "  ${1}",
      "})",
      ""
    ],
    "description": "Creates and returns a new Promise in the standard ES7 syntax"
  },
  "consoleAssert": {
    "prefix": "cas",
    "body": "console.assert(${1:expression}, ${2:object})",
    "description": "If the specified expression is false, the message is written to the console along with a stack trace"
  },
  "consoleClear": {
    "prefix": "ccl",
    "body": "console.clear()",
    "description": "Clears the console"
  },
  "consoleCount": {
    "prefix": "cco",
    "body": "console.count(${1:label})",
    "description": "Writes the the number of times that count() has been invoked at the same line and with the same label"
  },
  "consoleDir": {
    "prefix": "cdi",
    "body": "console.dir(${1:object})",
    "description": "Prints a JavaScript representation of the specified object"
  },
  "consoleError": {
    "prefix": "cer",
    "body": "console.error(${1:object})",
    "description": "Displays a message in the console and also includes a stack trace from where the method was called"
  },
  "consoleGroup": {
    "prefix": "cgr",
    "body": "console.group(\"${1:label}\")",
    "description": "Groups and indents all following output by an additional level, until console.groupEnd() is called."
  },
  "consoleGroupEnd": {
    "prefix": "cge",
    "body": "console.groupEnd()",
    "description": "Closes out the corresponding console.group()."
  },
  "consoleLog": {
    "prefix": "clg",
    "body": "console.log(${1:object})",
    "description": "Displays a message in the console"
  },
  "consoleTrace": {
    "prefix": "ctr",
    "body": "console.trace(${1:object})",
    "description": "Prints a stack trace from the point where the method was called"
  },
  "consoleWarn": {
    "prefix": "cwa",
    "body": "console.warn(${1:object})",
    "description": "Displays a message in the console but also displays a yellow warning icon along with the logged message"
  },
  "consoleInfo": {
    "prefix": "cin",
    "body": "console.info(${1:object})",
    "description": "Displays a message in the console but also displays a blue information icon along with the logged message"
  },
  // ==========================================================================================================================
  // PropTypes
  "ImportPropTypes": {
    "prefix": "ipt",
    "body": "import PropTypes from 'prop-types';",
    "description": "import PropTypes from 'prop-types';"
  },
  "PropTypes": {
    "prefix": "pt",
    "body": [
      "${1}.propTypes = {",
      "",
      "};"
    ],
    "description": "Create PropTypes"
  },
  "defaultProps": {
    "prefix": "dfp",
    "body": [
      "${1}.defaultProps = {",
      "",
      "};"
    ],
    "description": "Create Default Props"
  },
  "propTypeArray": {
    "prefix": "pta",
    "body": "PropTypes.array,",
    "description": "Array prop type"
  },
  "propTypeArrayRequired": {
    "prefix": "ptar",
    "body": "PropTypes.array.isRequired,",
    "description": "Array prop type required"
  },
  "propTypeBool": {
    "prefix": "ptb",
    "body": "PropTypes.bool,",
    "description": "Bool prop type"
  },
  "propTypeBoolRequired": {
    "prefix": "ptbr",
    "body": "PropTypes.bool.isRequired,",
    "description": "Bool prop type required"
  },
  "propTypeFunc": {
    "prefix": "ptf",
    "body": "PropTypes.func,",
    "description": "Func prop type"
  },
  "propTypeFuncRequired": {
    "prefix": "ptfr",
    "body": "PropTypes.func.isRequired,",
    "description": "Func prop type required"
  },
  "propTypeNumber": {
    "prefix": "ptn",
    "body": "PropTypes.number,",
    "description": "Number prop type"
  },
  "propTypeNumberRequired": {
    "prefix": "ptnr",
    "body": "PropTypes.number.isRequired,",
    "description": "Number prop type required"
  },
  "propTypeObject": {
    "prefix": "pto",
    "body": "PropTypes.object,",
    "description": "Object prop type"
  },
  "propTypeObjectRequired": {
    "prefix": "ptor",
    "body": "PropTypes.object.isRequired,",
    "description": "Object prop type required"
  },
  "propTypeString": {
    "prefix": "pts",
    "body": "PropTypes.string,",
    "description": "String prop type"
  },
  "propTypeStringRequired": {
    "prefix": "ptsr",
    "body": "PropTypes.string.isRequired,",
    "description": "String prop type required"
  },
  "propTypeNode": {
    "prefix": "ptnd",
    "body": "PropTypes.node,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array"
  },
  "propTypeNodeRequired": {
    "prefix": "ptndr",
    "body": "PropTypes.node.isRequired,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  "propTypeElement": {
    "prefix": "ptel",
    "body": "PropTypes.element,",
    "description": "React element prop type"
  },
  "propTypeElementRequired": {
    "prefix": "ptelr",
    "body": "PropTypes.element.isRequired,",
    "description": "React element prop type required"
  },
  "propTypeInstanceOf": {
    "prefix": "pti",
    "body": "PropTypes.instanceOf($0),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($0).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$0']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$0']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": [
      "PropTypes.oneOfType([",
      "  $0",
      "]),"
    ],
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": [
      "PropTypes.oneOfType([",
      "  $0",
      "]).isRequired,"
    ],
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($0),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($0).isRequired,",
    "description": "AcomponentNamen array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($0),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($0).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": [
      "PropTypes.shape({",
      "  $0",
      "}),"
    ],
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": [
      "PropTypes.shape({",
      "  $0",
      "}).isRequired,"
    ],
    "description": "An object taking on a particular shape required"
  },
  // ==========================================================================================================================
  // Comments
  "Comment Big Block": {
    "prefix": "cmmb",
    "body": [
      "/**",
      "|--------------------------------------------------",
      "| $1",
      "|--------------------------------------------------",
      "*/"
    ]
  },
  "Full Region Block": {
    "prefix": "fregion",
    "body": [
      "// #region ${1:title}",
      "",
      "${2}",
      "",
      "// #endregion $0"
    ]
  },
  // ==========================================================================================================================
  // Testing
  "describeBlock": {
    "prefix": "desc",
    "body": [
      "describe('$1', () => {",
      "  $0",
      "})",
      ""
    ],
    "description": "Testing `describe` block"
  },
  "testBlock": {
    "prefix": "test",
    "body": [
      "test('should $1', () => {",
      "  $0",
      "})",
      ""
    ],
    "description": "Testing `test` block"
  },
  "itBlock": {
    "prefix": "tit",
    "body": [
      "it('should $1', () => {",
      "  $0",
      "})",
      ""
    ],
    "description": "Testing `it` block"
  },
  "setupTest": {
    "prefix": "stest",
    "body": [
      "import { ${1:ComponentName}, mapStateToProps, mapDispatchToProps } from '../${1:ComponentName}';",
      "",
      "describe('<${1:ComponentName} />', () => {",
      "  const defaultProps = {",
      "",
      "  };",
      "",
      "  const setup = buildSetup(${1:ComponentName}, defaultProps)",
      "",
      "  test('render', () => {",
      "    expect(setup().wrapper).toMatchSnapshot()",
      "  })",
      "})",
      ""
    ]
  },
  "setupTestWithEnzymeToJson": {
    "prefix": "sjtest",
    "body": [
      "import toJson from 'enzyme-to-json';",
      "import { ${1:ComponentName}, mapStateToProps, mapDispatchToProps } from '../${1:ComponentName}';",
      "",
      "describe('<${1:ComponentName} />', () => {",
      "  const defaultProps = {",
      "",
      "  };",
      "",
      "  const setup = buildSetup(${1:ComponentName}, defaultProps)",
      "",
      "  test('render', () => {",
      "    expect(toJson(setup().wrapper)).toMatchSnapshot()",
      "  })",
      "})",
      ""
    ]
  },
  "setupReactNativeTest": {
    "prefix": "sntest",
    "body": [
      "import 'react-native';",
      "import React from 'react';",
      "import renderer from 'react-test-renderer';",
      "",
      "import ${1:ComponentName} from '../${1:ComponentName}';",
      "",
      "it('renders correctly', () =>{",
      "const tree = renderer.create(<${1:ComponentName} />).toJSON()",
      "",
      "expect(tree).toMatchSnapshot()",
      "})",
      ""
    ]
  },
  // ==========================================================================================================================
  // GraphQL
  "graphQLForComponent": {
    "prefix": "graphql",
    "body": [
      "import { compose, graphql } from 'react-apollo';",
      ""
    ]
  },
  "exportGraphQL": {
    "prefix": "expgql",
    "body": [
      "export default compose(",
      "  graphql(${1:queryOrMutation}, { name: ${2:name} }),",
      ")(${3:ComponentName})"
    ]
  },
  // ==========================================================================================================================
  // Other
  "hocComponentWithRedux": {
    "prefix": "hocredux",
    "body": [
      "import React from 'react';",
      "import PropTypes from 'prop-types';",
      "import { connect } from 'react-redux';",
      "",
      "export const mapStateToProps = state => ({",
      "",
      "})",
      "",
      "export const mapDispatchToProps = {",
      " ",
      "};",
      "",
      "export const ${1:hocComponentName} = (WrappedComponent) => {",
      "  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "  hocComponent.propTypes = {",
      "  };",
      "",
      "  return hocComponent",
      "};",
      "",
      "export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))",
      ""
    ]
  },
  "hocComponent": {
    "prefix": "hoc",
    "body": [
      "import React from 'react';",
      "import PropTypes from 'prop-types';",
      "",
      "export default (WrappedComponent) => {",
      "  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
      "",
      "  hocComponent.propTypes = {",
      "  };",
      "",
      "  return hocComponent",
      "};",
      ""
    ]
  },
  "EslintDisableLine": {
    "prefix": "edl",
    "body": "// eslint-disable-line",
    "description": "Eslint Disable Line"
  },
  "Comment Block": {
    "prefix": "cm",
    "body": [
      "/**",
      " * ${1}",
      " */"
    ]
  },
  // ==========================================================================================================================
  // Lorem Ipsum
  "LoremIpsumOnce": {
    "prefix": "li1",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  "LoremIpsumTwo": {
    "prefix": "li2",
    "body": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ],
    "description": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ]
  },
  "LoremIpsumThree": {
    "prefix": "li3",
    "body": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    ],
    "description": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    ]
  },
  "LoremIpsumFour": {
    "prefix": "li4",
    "body": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ],
    "description": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ]
  },
  "LoremIpsumFive": {
    "prefix": "li5",
    "body": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    ],
    "description": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    ]
  }
}
