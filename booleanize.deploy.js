!function webpackUniversalModuleDefinition(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.booleanize=factory():root.booleanize=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){"use strict";var truly=__webpack_require__(1),booleanize=function booleanize(entity){if("string"==typeof entity){if("true"==entity.toLowerCase())return!0;if("false"==entity.toLowerCase())return!1}return"boolean"==typeof entity?entity:truly(entity)};module.exports=booleanize},function(module,exports,__webpack_require__){"use strict";var truly=function truly(value){return"number"==typeof value?!isNaN(value):void 0!==value&&null!==value&&""!==value};module.exports=truly}])});
//# sourceMappingURL=booleanize.deploy.js.map