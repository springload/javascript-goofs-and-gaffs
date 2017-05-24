import React, { Component, PropTypes } from 'react';
import Message from './classes/message.js';

const propTypes = {
  // Based on official https://github.com/reactjs/prop-types examples
  array: PropTypes.array,
  bool: PropTypes.bool,
  func: PropTypes.func,
  number: PropTypes.number,
  object: PropTypes.object,
  string: PropTypes.string,
  symbol: PropTypes.symbol,
 
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  node: PropTypes.node,
 
  // A React element.
  element: PropTypes.element,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  instance: PropTypes.instanceOf(Message),
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  enum: PropTypes.oneOf(['News', 'Photos']),
 
  // An object that could be one of many types
  union: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
 
  // An array of a certain type
  arrayOf: PropTypes.arrayOf(PropTypes.number),
 
  // An object with property values of a certain type
  objectOf: PropTypes.objectOf(PropTypes.number),
 
  // An object taking on a particular shape
  objectShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
 
  // A value of any data type
  any: PropTypes.any.isRequired,

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  required: PropTypes.string.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  custom: function(props, propName, componentName) {
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
  customArrayOf: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
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
        <li>Array:    {props.array.toString()}</li>
        <li>Bool:     {props.bool.toString()}</li>
        <li>Function: {props.func.toString()}</li>
        <li>Number:   {props.number.toString()}</li>
        <li>Object:   {props.object.toString()}</li>
        <li>String:   {props.string.toString()}</li>
        <li>Symbol:   {props.symbol.toString()}</li>
        <li>Node:     {props.node.toString()}</li>
        <li>Element:  {props.element.toString()}</li>
        <li>Instance: {props.instance.toString()}</li>
        <li>Enum:     {props.enum.toString()}</li>
        <li>Union:    {props.union.toString()}</li>
        <li>arrayOf:  {props.arrayOf.toString()}</li>
        <li>objOf:    {props.objectOf.toString()}</li>
        <li>objShape: {props.objectShape.toString()}</li>
        <li>Any:      {props.any.toString()}</li>
        <li>Required: {props.required ? props.required.toString() : '(not in props)'}</li>
        <li>Custom:   {props.custom.toString()}</li>
        <li>customArrayOf: {props.customArrayOf.toString()}</li>
      </ul>
    );
  }
}

TypedComponent.propTypes = propTypes;

export default TypedComponent;