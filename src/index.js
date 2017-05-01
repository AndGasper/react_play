import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // If you want to notify components of state changes, you're going to need the store. "Yo, state's changed for (affected Components)!;
import LoginForm from 'components/LoginForm';
import loginReducer from ''
let store = createStore(loginReducer); // createStore(reducerFunction);)

render(
    <Provider store = {store}>
        <LoginForm />
    </Provider>,
    document.getElementById('root');
)