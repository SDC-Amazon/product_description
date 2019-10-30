import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Footer from './Footer.js';
import Header from './Header.js';

ReactDOM.render(<App />, document.getElementById('description'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
ReactDOM.render(<Header />, document.getElementById('header'))