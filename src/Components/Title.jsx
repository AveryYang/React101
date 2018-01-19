import React, { Component } from 'react';
export class Title extends Component{
    render() {
        return (
            // 元件的render函數 所return的參數只是能一個element，但h1&h2都各為一個element，所以需包進div避免造成錯誤
            <div>
                <h1>{this.props.text}</h1>
                <h2>Author</h2>
            </div>
        )
    };
}