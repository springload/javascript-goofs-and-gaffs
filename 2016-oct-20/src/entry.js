/*jshint esnext: true */

import React from 'react';
import {render} from 'react-dom';
import App from './app.js';

const someMap = {d:App}

render(
  <someMap.d/>,
  document.getElementById('container')
)
