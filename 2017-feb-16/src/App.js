import React, { Component } from 'react';
import './App.css';
import { formatBaseHeader, formatBaseCell } from './utils';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      number: props.defaultNumber,
      base: props.base
    }

    this.subtractOne = this.subtractOne.bind(this);
    this.addOne = this.addOne.bind(this);
  }

  render() {
    const { base, number } = this.state;

    const numberInBase = number.toString(base);
    let numberInBaseParts = Array.from(numberInBase);
    while(numberInBaseParts.length < 3){
      numberInBaseParts.unshift('');
    }

    return (
      <div className="base">
        <table>
          <caption> Counting in Base {base} </caption>
          <thead>
            <tr>
              {numberInBaseParts.map((part, index) => {
                return <th key={index}>{formatBaseHeader(numberInBaseParts.length - index - 1, base)}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {numberInBaseParts.map((part, index) => {
                return <td key={index}>{formatBaseCell(part)}</td>
              })}
            </tr>
            { base !== 10 ? <tr><td colSpan={numberInBaseParts.length + 1} className="base-equals">...is <b>{number}</b> in Base 10</td></tr> : null }
          </tbody>
        </table>
        <button onClick={this.addOne} className="base-button">Add</button>
        <button onClick={this.subtractOne} className="base-button">Subtract</button>

      </div>

    );
  }

  subtractOne(){
    if(this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  }

  addOne(){
    this.setState({
      number: this.state.number + 1,
    });
  }
}

export default App;
