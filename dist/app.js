"use strict";

var Title = React.createClass({ displayName: "Title",
    render: function render() {
        return (
            // 元件的render函數 所return的參數只是能一個element，但h1&h2都各為一個element，所以需包進div避免造成錯誤
            React.createElement("div", null, React.createElement("h1", null, "Title"), React.createElement("h2", null, "Author"))
        );
    }
});
ReactDOM.render(
// 物件名稱必需是大寫
React.createElement(Title, null), document.getElementById('example'));
//# sourceMappingURL=app.js.map
