/*jshint esnext: true */

import React from 'react';
import {render} from 'react-dom';
import App from './app.js';
import store from './store.js';

console.log(store);

function rerender(){
    render(
      <App/>,
      document.getElementById('container')
    )
}

rerender();

store.subscribe(rerender);
