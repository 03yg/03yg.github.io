const React = require('react');
const ReactDom = require('react-dom');

const Stock = require('./src/Stock');

ReactDom.render(<Stock />, document.querySelector('#root'));
