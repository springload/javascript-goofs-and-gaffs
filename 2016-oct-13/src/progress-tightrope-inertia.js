import React, {Component} from 'react';
import ReactDOM           from 'react-dom';

export default class ProgressTightrope extends Component {
  constructor(props){
    super(props);
    this.recentPercent = props.percent;
    this.steadyLine = this.steadyLine.bind(this);
    this.heavy = .5;
    this.scaleX = 1.6;
  }
  render(){
    const middleX = this.props.percent * this.scaleX;
    const middleY = 45 + this.props.percent * this.heavy - (this.props.percent > 50 ? this.props.percent - 50 : 0);
    const rotateString = "rotate("+ (this.props.percent - this.recentPercent) * 20 + "deg)";
    const rotateProps = {transform: rotateString, transition: 'all 0.1s'};
    const translateString = 'translate(' + middleX + ', ' + (middleY - 12.5) + ')';
    const textStyle = this.props.textStyle || {fontFamily: 'sans-serif', fill:'white', fontSize:8, fontWeight:'bold'};
    Object.assign(textStyle, rotateProps);

    return <svg width="160" height="90" style={{border: "solid 1px lightgrey"}} viewBox="0 0 160 90">
      <g transform={translateString}>
        <polyline points={[-10,-10, -10,5, -5,5, 0,10, 5,5, 10,5, 10,-10 ].join(" ")} strokeLinejoin="round" style={rotateProps} strokeWidth="3" stroke="#FF7D00" fill="#FF7D00"/>
        <text x="-7.9" y="0" style={textStyle}>{parseInt(this.props.percent, 10)}%</text>
      </g>
      <polyline points={[0,45, middleX,middleY, 160,45].join(" ")} fill="none" strokeWidth="2" stroke="#F262D3"/>
    </svg>
  }
  componentWillReceiveProps(nextProps){
    this.recentPercent = this.props.percent;
    if(this.steadyTimer) clearTimeout(this.steadyTimer);
    this.steadyTimer = setTimeout(this.steadyLine, 250);
  }
  steadyLine(){
    this.recentPercent = this.props.percent;
    this.forceUpdate();
  }
}

const render = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollHeight = document.body.offsetHeight - window.innerHeight;

  ReactDOM.render(
    <ProgressTightrope percent={(scrollPosition / scrollHeight) * 100}/>,
    document.getElementById("container")
  )
}

document.addEventListener('scroll', render);
document.documentElement.style.height = "200%";
document.body.style.height = "200%";
document.getElementById("container").style.position = "fixed";

render();
