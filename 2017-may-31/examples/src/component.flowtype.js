// @flow
import React, { Component } from 'react';
import Message from './classes/message.js';

class TypedComponent extends Component {
  props: {
    arrayProp: Array<mixed>,
    boolProp: boolean,
    funcProp: () => mixed,
    numberProp: number,
    objectProp: Object,
    stringProp: string,

    // Symbols aren't supported https://flow.org/en/docs/types/primitives/#toc-symbols
    symbolProp: any, // Note: 'any'
  
    // Flow has no inherent concept of renderable but you
    // could do something like
    nodeProp: boolean | string | number | HTMLElement | ?React$Element<any> | null,
    // or use 3rd-party libraries like https://www.npmjs.com/package/react-flow-types
  
    // A React element.
    elementProp: ?React$Element<any>,
  
    // You can also declare that a prop is an instance of a class. This uses
    // JS's instanceof operator.
    instanceProp: Message,
  
    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    enumProp: 'News' | 'Photos',
  
    // An object that could be one of many types
    unionProp: string | number | Message,
  
    // An array of a certain type
    arrayOfProp: Array<number>,
  
    // An object with property values of a certain type
    objectOfProp: { [string]: number },
  
    // An object taking on a particular shape
    objectShapeProp: {
      color: string,
      fontSize: number
    },
  
    // Any data type accepted
    anyProp: any,

    // In flow everything is required by default.
    requiredProp: string,

    // Not required see '?' suffix on key
    notRequired?: string,

    // Flow has no custom validator mechanism (afaik).
    customProp: any, // NoteProp: 'any'
  
    // Flow has no custom validator mechanism (afaik).
    customArrayOfProp: any, // NoteProp: 'any'
  }

  render() {
    const props = this.props;
    return (
      <ul>
        <li>ArrayProp:    {props.arrayProp.toString()}</li>
        <li>BoolProp:     {props.boolProp.toString()}</li>
        <li>FunctionProp: {props.funcProp.toString()}</li>
        <li>NumberProp:   {props.numberProp.toString()}</li>
        <li>ObjectProp:   {props.objectProp.toString()}</li>
        <li>StringProp:   {props.stringProp.toString()}</li>
        <li>SymbolProp:   {props.symbolProp.toString()}</li>
        <li>NodeProp:     {props.nodeProp && props.nodeProp.toString && props.nodeProp.toString()}</li>
        <li>ElementProp:  {props.elementProp && props.elementProp.toString && props.elementProp.toString()}</li>
        <li>InstanceProp: {props.instanceProp.toString()}</li>
        <li>EnumProp:     {props.enumProp.toString()}</li>
        <li>UnionProp:    {props.unionProp.toString()}</li>
        <li>arrayOfProp:  {props.arrayOfProp.toString()}</li>
        <li>objOfProp:    {props.objectOfProp.toString()}</li>
        <li>objShapeProp: {props.objectShapeProp.toString()}</li>
        <li>AnyProp:      {props.anyProp.toString()}</li>
        <li>RequiredProp: {props.requiredProp ? props.requiredProp.toString() : '(not in props)'}</li>
        <li>CustomProp:   {props.customProp.toString()}</li>
        <li>customArrayOfProp: {props.customArrayOfProp.toString()}</li>
      </ul>
    );
  }
}

export default TypedComponent;
