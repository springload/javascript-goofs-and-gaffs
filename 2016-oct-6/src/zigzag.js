import React, {Component} from 'react';

export default class ZigZag extends Component {
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {scrollPosition: document.body.scrollTop};
  }
  render(){
    //
    return <div className="zigzag-root">
      <p>Scroll Position: {this.state.scrollPosition}px</p>
      <div className="zigzag-line">
        <div style={{transform: `translate(0px, ${this.state.scrollPosition / 2}px)`}} className="zigzag-text">
          {this.props.children}
        </div>
      </div>
      <div className="zigzag-line" aria-hidden="true">
        <div style={{transform: `translate(${-40 + this.state.scrollPosition / 2}px, ${-100 + (this.state.scrollPosition / 2)}px) skewX(45deg)`}} className="zigzag-text">
          {this.props.children}
        </div>
      </div>
      <div className="zigzag-line" aria-hidden="true">
        <div style={{transform: `translate(${240 - this.state.scrollPosition / 2}px, ${-200 + (this.state.scrollPosition / 2)}px)  skewX(-45deg)`}} className="zigzag-text">
          {this.props.children}
        </div>
      </div>
    </div>;
  }
  componentDidMount(){
    document.addEventListener('scroll', this.onScroll);
  }
  comopnentWillUnmount(){
    document.removeEventListener('scroll', this.onScroll);
  }
  onScroll(){
    this.setState({
      scrollPosition: document.body.scrollTop
    });
  }
}





















// <div className="zigzag-line" aria-hidden="true"><div style={{transform: `translate(${-40 + this.state.scrollPosition / 2}px, ${-100 + (this.state.scrollPosition / 2)}px) skewX(45deg)`}} className="zigzag-text">{this.props.children}</div></div>
// <div className="zigzag-line" aria-hidden="true"><div style={{transform: `translate(${240 - this.state.scrollPosition / 2}px, ${-200 + (this.state.scrollPosition / 2)}px)  skewX(-45deg)`}} className="zigzag-text">{this.props.children}</div></div>
