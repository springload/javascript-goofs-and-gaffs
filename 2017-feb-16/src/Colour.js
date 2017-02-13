import React, { Component } from 'react';
import './Colour.css';

class Colour extends Component {

  constructor(props){
    super(props);

    function getColour(colour, start, length){
      return parseInt(colour.substring(start, length), 16);
    }

    const defaultColour = props.defaultColour ? props.defaultColour.replace(/^#/, '') : undefined;

    console.log(defaultColour);

    this.state = {
      red: defaultColour ? getColour(defaultColour, 0, 2) : 0,
      green: defaultColour ? getColour(defaultColour, 2, 4) : 0,
      blue: defaultColour ? getColour(defaultColour, 4, 6) : 0,
    }

    console.log(defaultColour, getColour(defaultColour, 4, 6), defaultColour.substring(4, 6));

    this.RED = 'red';
    this.GREEN = 'green';
    this.BLUE = 'blue';

    this.subtract = this.subtract.bind(this);
    this.add = this.add.bind(this);
  }

  render() {
    const { red, green, blue } = this.state;

    return (
      <div className="base">
        <table>
          <tbody>
            <tr>
                <td colSpan="3" style={{background: `rgba(${red},${green},${blue},255)`}} className="colour-digit-all">
                  #{this.formatHexColour(red)}{this.formatHexColour(green)}{this.formatHexColour(blue)}
                </td>
            </tr>
            <tr>
                <td style={{background: `rgba(${red},0,0,255)`}} className="colour-digit-piece">{this.formatHexColour(red)}</td>
                <td style={{background: `rgba(0,${green},0,255)`}} className="colour-digit-piece">{this.formatHexColour(green)}</td>
                <td style={{background: `rgba(0,0,${blue},255)`}} className="colour-digit-piece">{this.formatHexColour(blue)}</td>
            </tr>
            <tr>
                <td>{this.renderButtons(this.RED)}</td>
                <td>{this.renderButtons(this.GREEN)}</td>
                <td>{this.renderButtons(this.BLUE)}</td>
            </tr>
            <tr>
                <td className="colour-name">red</td>
                <td className="colour-name">green</td>
                <td className="colour-name">blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  formatHexColour(hexa){
    const hexaUpper = hexa.toString(16).toUpperCase();
    return hexaUpper.length === 1 ? `0${hexaUpper}` : hexaUpper;
  }

  renderButtons(COLOUR){
    return (
      <div>
        <button onClick={this.add.bind(this, COLOUR)} className="colour-button">Add</button>
        <button onClick={this.subtract.bind(this, COLOUR)} className="colour-button">Subtract</button>
      </div>
    );
  }

  subtract(COLOUR){
    if(this.state[COLOUR] > 0) {
      this.setState({
        [COLOUR]: this.state[COLOUR] - 1,
      });
    }
  }

  add(COLOUR){
    if(this.state[COLOUR] < 255) {
      this.setState({
        [COLOUR]: this.state[COLOUR] + 1,
      });
    }
  }
}

export default Colour;
