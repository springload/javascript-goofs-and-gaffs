import React, {Component} from 'react';
import ReactDOM           from 'react-dom';

const scaleX = 1.6;
const heavy = .5;

export default class ProgressTightrope extends Component {
  render(){
    const middleX = this.props.percent * scaleX;
    const middleY = 45 + this.props.percent * heavy - (this.props.percent > 50 ? this.props.percent - 50 : 0);

    return <svg width="640" height="360" style={{border: "solid 1px red"}} viewBox="0 0 160 90">
      <line x1="0" y1="45" x2={middleX} y2={middleY} strokeWidth="2" stroke="black"/>
      <line x1={middleX} y1={middleY} x2="160" y2="45"  strokeWidth="2" stroke="black"/>
      <circle cx={middleX} cy={middleY - 3} r="4"></circle>
    </svg>
  }
}

const render = () => {
  ReactDOM.render(
    <ProgressTightrope percent={(document.body.scrollTop / document.body.offsetHeight) * 100}/>,
    document.getElementById("container")
  )
}

document.addEventListener('scroll', render);
document.documentElement.style.height = "200%";
document.body.style.height = "200%";
document.getElementById("container").style.position = "fixed";
