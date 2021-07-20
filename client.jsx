const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./src/Stock');

ReactDom.render(<Stock />, document.querySelector('#root'));
