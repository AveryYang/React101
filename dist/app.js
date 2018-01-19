'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _react2.default.createClass({ displayName: "Title",
    render: function render() {
        return (
            // 元件的render函數 所return的參數只是能一個element，但h1&h2都各為一個element，所以需包進div避免造成錯誤
            _react2.default.createElement("div", null, _react2.default.createElement("h1", null, this.props.text), _react2.default.createElement("h2", null, "Author"))
        );
    }
});
(0, _reactDom.render)(
// 物件名稱必需是大寫
_react2.default.createElement(Title, { text: "Thinking in React" }), document.getElementById('example'));
//# sourceMappingURL=app.js.map
