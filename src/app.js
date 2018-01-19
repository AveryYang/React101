'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Title = require('./Components/Title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(
// 物件名稱必需是大寫
_react2.default.createElement(_Title.Title, { text: "Thinking in React" }), document.getElementById('example'));
//# sourceMappingURL=app.js.map
