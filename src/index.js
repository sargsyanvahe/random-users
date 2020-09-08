import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import App from "./App";

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
