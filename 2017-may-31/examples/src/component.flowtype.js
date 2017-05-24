// @flow
import React, { Component } from 'react';
import Message from './classes/message.js';

type propTypes = {
  array: Array<mixed>,
  bool: boolean,
  func: () => mixed,
  number: number,
  object: Object,
  string: string,

  // Symbols aren't supported https://flow.org/en/docs/types/primitives/#toc-symbols
  symbol: any, // Note: 'any'
 
  // Flow has no inherent concept of renderable but you
  // could do something like
  node: boolean | string | number | HTMLElement | ?React$Element<any> | null,
 
  // A React element.
  element: ?React$Element<any>,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  instance: Message,
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  enum: 'News' | 'Photos',
 
  // An object that could be one of many types
  union: string | number | Message,
 
  // An array of a certain type
  arrayOf: Array<number>,
 
  // An object with property values of a certain type
  objectOf: { [string]: number },
 
  // An object taking on a particular shape
  objectShape: {
    color: string,
    fontSize: number
  },
 
  // Any data type accepted
  any: any,

  // In flow everything is required by default.
  required: string,

  // Not required see '?' suffix on key
  notRequired?: string,

  // Flow has no custom validator mechanism (afaik).
  custom: any, // Note: 'any'
 
  // Flow has no custom validator mechanism (afaik).
  customArrayOf: any, // Note: 'any'
}

class TypedComponent extends Component {
  props: propTypes

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
        <li>Node:     {props.node && props.node.toString && props.node.toString()}</li>
        <li>Element:  {props.element && props.element.toString && props.element.toString()}</li>
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

export default TypedComponent;