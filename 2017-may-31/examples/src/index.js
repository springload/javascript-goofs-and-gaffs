// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TypedComponent from './component.proptypes';
// import TypedComponent from './component.flowtype';
import Message from './classes/message';

const validProps = {
  arrayProp:       [1, 'a', true],
  boolProp:        true,
  funcProp:        () => {},
  numberProp:      3.1337,
  objectProp:      {a:1},
  stringProp:      'rope',
  symbolProp:      Symbol('es2015'),
  nodeProp:        'renderable',
  elementProp:     <i />,
  instanceProp:    new Message,
  enumProp:        'News',
  unionProp:       3,
  arrayOfProp:     [9, 2.00, 3.10, 4.20],
  objectOfProp:    {a: 1, b: 3},
  objectShapeProp: {color: 'red', fontSize: 5},
  anyProp:         'anything',
  requiredProp:    'bottle',
  customProp:      'does not match error state',
  customArrayOfProp: ['does not match error state'],
};

const invalidProps = {
  arrayProp:       false,
  boolProp:        'false',
  funcProp:        false,
  numberProp:      false,
  objectProp:      false,
  stringProp:      false,
  symbolProp:      false,
  nodeProp:        false,
  elementProp:     false,
  instanceProp:    false,
  enumProp:        false,
  unionProp:       false,
  arrayOfProp:     ['a', 1],
  objectOfProp:    {a: 'a', b: 'b'},
  objectShapeProp: {color: 335588, fontSize: 'big'},
  anyProp:         false, // won't fail, anything is supported
  requiredProp:    false,
  customProp:      'matchme',
  customArrayOfProp: ['matchme'],
};

ReactDOM.render(
  <TypedComponent
    {...invalidProps}
  />,
  document.getElementById('container')
);
