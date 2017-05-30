import React, { Component, PropTypes } from 'react';
import Message from './classes/message.js';

const propTypes = {
  // Based on official https://github.com/reactjs/prop-types examples
  arrayProp: PropTypes.array,
  boolProp: PropTypes.bool,
  funcProp: PropTypes.func,
  numberProp: PropTypes.number,
  objectProp: PropTypes.object,
  stringProp: PropTypes.string,
  symbolProp: PropTypes.symbol,
 
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  nodeProp: PropTypes.node,
 
  // A React element.
  elementProp: PropTypes.element,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  instanceProp: PropTypes.instanceOf(Message),
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  enumProp: PropTypes.oneOf(['News', 'Photos']),
 
  // An object that could be one of many types
  unionProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
 
  // An array of a certain type
  arrayOfProp: PropTypes.arrayOf(PropTypes.number),
 
  // An object with property values of a certain type
  objectOfProp: PropTypes.objectOf(PropTypes.number),
 
  // An object taking on a particular shape
  objectShapeProp: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
 
  // A value of any data type
  anyProp: PropTypes.any.isRequired,

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredProp: PropTypes.string.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
 
  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayOfProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

class TypedComponent extends Component {
  render() {
    const props = this.props;
    return (
      <ul>
        <li>Array:    {props.arrayProp.toString()}</li>
        <li>Bool:     {props.boolProp.toString()}</li>
        <li>Function: {props.funcProp.toString()}</li>
        <li>Number:   {props.numberProp.toString()}</li>
        <li>Object:   {props.objectProp.toString()}</li>
        <li>String:   {props.stringProp.toString()}</li>
        <li>Symbol:   {props.symbolProp.toString()}</li>
        <li>Node:     {props.nodeProp.toString()}</li>
        <li>Element:  {props.elementProp.toString()}</li>
        <li>Instance: {props.instanceProp.toString()}</li>
        <li>Enum:     {props.enumProp.toString()}</li>
        <li>Union:    {props.unionProp.toString()}</li>
        <li>arrayOf:  {props.arrayOfProp.toString()}</li>
        <li>objOf:    {props.objectOfProp.toString()}</li>
        <li>objShape: {props.objectShapeProp.toString()}</li>
        <li>Any:      {props.anyProp.toString()}</li>
        <li>Required: {props.requiredProp ? props.requiredProp.toString() : '(not in props)'}</li>
        <li>Custom:   {props.customProp.toString()}</li>
        <li>customArrayOf: {props.customArrayOfProp.toString()}</li>
      </ul>
    );
  }
}

TypedComponent.propTypes = propTypes;

export default TypedComponent;