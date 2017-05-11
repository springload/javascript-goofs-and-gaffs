// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TypedComponent from './component.proptypes';
// import TypedComponent from './component.flowtype';
import Message from './classes/message';

const validProps = {
  array:       [1, 'a', true],
  bool:        true,
  func:        () => {},
  number:      3.1337,
  object:      {a:1},
  string:      'rope',
  symbol:      Symbol('es2015'),
  node:        'renderable',
  element:     <i />,
  instance:    new Message,
  enum:        'News',
  union:       3,
  arrayOf:     [9, 2.00, 3.10, 4.20],
  objectOf:    {a: 1, b: 3},
  objectShape: {color: 'red', fontSize: 5},
  any:         'anything',
  required:    'bottle',
  custom:      'does not match error state',
  customArrayOf: ['does not match error state'],
};

const invalidProps = {
  array:       false,
  bool:        'false',
  func:        false,
  number:      false,
  object:      false,
  string:      false,
  symbol:      false,
  node:        false,
  element:     false,
  instance:    false,
  enum:        false,
  union:       false,
  arrayOf:     ['a', 1],
  objectOf:    {a: 'a', b: 'b'},
  objectShape: {color: 335588, fontSize: 'big'},
  any:         false, // won't fail, anything is supported
  custom:      'matchme',
  customArrayOf: ['matchme'],
};

ReactDOM.render(
  <TypedComponent
    {...invalidProps}
  />,
  document.getElementById('container')
);
