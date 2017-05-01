import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import LoginForm from './LoginForm';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Submit Validation</h2>

            <ul>
                <li>
                    Usernames that will pass validation:
                    {' '}
                    <code>john</code>
                    ,
                    {' '}
                    <code>paul</code>
                    ,
                    {' '}
                    <code>george</code>
                    , or
                    {' '}
                    <code>ringo</code>
                    .
                </li>
                <li>Valid password for all users: <code>redux-form</code>.</li>
            </ul>

            <LoginForm onSubmit={showResults} />
            <Values form="loginForm" />
        </div>
    </Provider>,
    rootEl,
);
