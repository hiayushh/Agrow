/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ItemAdd.jsx":
/*!*************************!*\
  !*** ./src/ItemAdd.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ItemAdd = function (_React$Component) {\n    _inherits(ItemAdd, _React$Component);\n\n    function ItemAdd() {\n        _classCallCheck(this, ItemAdd);\n\n        var _this = _possibleConstructorReturn(this, (ItemAdd.__proto__ || Object.getPrototypeOf(ItemAdd)).call(this));\n\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n        return _this;\n    }\n\n    _createClass(ItemAdd, [{\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            e.preventDefault();\n            var form = document.forms.itemAdd;\n            this.props.createItem({\n                name: form.name.value,\n                quantity: form.quantity.value,\n                rate: form.rate.value\n            });\n            //Clear the form\n            form.name.value = '';\n            form.quantity.value = '';\n            form.rate.value = '';\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'form',\n                    { name: 'itemAdd', onSubmit: this.handleSubmit },\n                    React.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),\n                    React.createElement('input', { type: 'text', name: 'quantity', placeholder: 'Quantity' }),\n                    React.createElement('input', { type: 'text', name: 'rate', placeholder: 'Rate' }),\n                    React.createElement(\n                        'button',\n                        null,\n                        'Add Item'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ItemAdd;\n}(React.Component);\n\nexports.default = ItemAdd;\n\n//# sourceURL=webpack:///./src/ItemAdd.jsx?");

/***/ }),

/***/ "./src/ItemFilter.jsx":
/*!****************************!*\
  !*** ./src/ItemFilter.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ItemFilter = function (_React$Component) {\n  _inherits(ItemFilter, _React$Component);\n\n  function ItemFilter() {\n    _classCallCheck(this, ItemFilter);\n\n    return _possibleConstructorReturn(this, (ItemFilter.__proto__ || Object.getPrototypeOf(ItemFilter)).apply(this, arguments));\n  }\n\n  _createClass(ItemFilter, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        null,\n        \"Have to setup ItemFilter here!\"\n      );\n    }\n  }]);\n\n  return ItemFilter;\n}(React.Component);\n\nexports.default = ItemFilter;\n\n//# sourceURL=webpack:///./src/ItemFilter.jsx?");

/***/ }),

/***/ "./src/ItemList.jsx":
/*!**************************!*\
  !*** ./src/ItemList.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ItemAdd = __webpack_require__(/*! ./ItemAdd.jsx */ \"./src/ItemAdd.jsx\");\n\nvar _ItemAdd2 = _interopRequireDefault(_ItemAdd);\n\nvar _ItemFilter = __webpack_require__(/*! ./ItemFilter.jsx */ \"./src/ItemFilter.jsx\");\n\nvar _ItemFilter2 = _interopRequireDefault(_ItemFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ItemRow = function ItemRow(props) {\n    return React.createElement(\n        'tr',\n        null,\n        React.createElement(\n            'td',\n            null,\n            props.item._id\n        ),\n        React.createElement(\n            'td',\n            null,\n            props.item.name\n        ),\n        React.createElement(\n            'td',\n            null,\n            props.item.quantity\n        ),\n        React.createElement(\n            'td',\n            null,\n            props.item.rate\n        )\n    );\n};\n\nfunction ItemTable(props) {\n    var itemRows = props.items.map(function (item) {\n        return React.createElement(ItemRow, { key: item._id, item: item });\n    });\n    return React.createElement(\n        'table',\n        { className: 'bordered-table' },\n        React.createElement(\n            'thead',\n            null,\n            React.createElement(\n                'tr',\n                null,\n                React.createElement(\n                    'th',\n                    null,\n                    'ID'\n                ),\n                React.createElement(\n                    'th',\n                    null,\n                    'Name'\n                ),\n                React.createElement(\n                    'th',\n                    null,\n                    'Quantity'\n                ),\n                React.createElement(\n                    'th',\n                    null,\n                    'Rate'\n                )\n            )\n        ),\n        React.createElement(\n            'tbody',\n            null,\n            itemRows\n        )\n    );\n}\n\nvar ItemList = function (_React$Component) {\n    _inherits(ItemList, _React$Component);\n\n    function ItemList() {\n        _classCallCheck(this, ItemList);\n\n        var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this));\n\n        _this.state = { items: [] };\n        _this.createItem = _this.createItem.bind(_this);\n        return _this;\n    }\n\n    _createClass(ItemList, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadData();\n        }\n    }, {\n        key: 'loadData',\n        value: function loadData() {\n            var _this2 = this;\n\n            fetch('/api/items').then(function (response) {\n                return response.json();\n            }).then(function (data) {\n                _this2.setState({ items: data.records });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'createItem',\n        value: function createItem(newItem) {\n            var _this3 = this;\n\n            this.loadData();\n            fetch('/addItem', {\n                method: 'POST',\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify(newItem)\n            }).then(function (response) {\n                return response.json();\n            }).then(function (updatedItem) {\n                var newItems = _this3.state.items.concat(updatedItem);\n                _this3.setState({ items: newItems });\n            }).catch(function (err) {\n                alert(err.message);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'h4',\n                    null,\n                    'Welcome to ItemList'\n                ),\n                React.createElement(_ItemFilter2.default, null),\n                React.createElement('hr', null),\n                React.createElement(ItemTable, { items: this.state.items }),\n                React.createElement('hr', null),\n                React.createElement(_ItemAdd2.default, { createItem: this.createItem })\n            );\n        }\n    }]);\n\n    return ItemList;\n}(React.Component);\n\nexports.default = ItemList;\n\n//# sourceURL=webpack:///./src/ItemList.jsx?");

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ItemList = __webpack_require__(/*! ./ItemList.jsx */ \"./src/ItemList.jsx\");\n\nvar _ItemList2 = _interopRequireDefault(_ItemList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar contentNode = document.getElementById('contents');\nReactDOM.render(React.createElement(_ItemList2.default, null), contentNode);\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ })

/******/ });