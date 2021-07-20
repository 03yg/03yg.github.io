const React = require('react');
const ReactDom = require('react-dom');

const Stocks = require('/src/Stocks');

ReactDom.render(<Stocks />, document.querySelector('#root'));
