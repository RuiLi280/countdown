import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import { Main } from './views';

import './assets/css/style.css';

export default function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}