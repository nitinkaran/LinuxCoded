import React from "react";
import { render } from 'react-dom';
import TodoApp from "./TodoApp";
import store from './Redux/store';
import { Provider } from "react-redux";
import './index.css'

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,
    document.getElementById('root')
);
