import React from 'react';
import store from './store'
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { Provider } from 'react-redux'

ReactDOM.render(
    // provider 把store映射到它的所有组件
    // 它的子组件都有能力获取store的数据
    <Provider store={ store }>
        <ToDoList />
    </Provider>, 
    document.getElementById('root')
);
