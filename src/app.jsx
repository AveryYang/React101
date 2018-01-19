import React from 'react';
import { render } from 'react-dom';
import { Title } from './Components/Title';
render(
    // 物件名稱必需是大寫
    <Title text="Thinking in React" />,
    document.getElementById('example')
);