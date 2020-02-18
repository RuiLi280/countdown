import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = 'http://cdapi.thewatercats.com:4000/';
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://localhost:4000/';

ReactDOM.render(<App />, document.getElementById("root"));