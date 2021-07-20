const React = require('react');
const { useState, useRef } = React;

const Stocks = () => {
  const [stocks, setStocks] = [];

  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
        />
        <button>입력!</button>
      </form>
    </>
  );
};

module.exports = Stocks;