import React from 'react';
import ReactDOM from 'react-dom';
import BaseWidget from './App';
import './index.css';

const bases = document.querySelectorAll('[data-base]');

bases.forEach( base => {
  ReactDOM.render(
    <BaseWidget
      base={parseInt(base.getAttribute('data-base'), 10)}
      defaultNumber={parseInt(base.getAttribute('data-number'), 10)} 
    />,
    base
  );
})
