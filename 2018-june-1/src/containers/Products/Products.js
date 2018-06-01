import React from "react";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap";
import creature from "../../images/creature_red.png";

class Products extends React.Component {
  handleEnterAnimation = () => {

    TweenLite.killTweensOf(this.el);

    TweenLite.set(this.el, {
      autoAlpha: 0,
      x: 0 ,
      rotation: -860,
      scale:1.5,
      y: window.innerHeight
    });

    TweenLite.to(this.el, this.props.animationProps.time, {
      autoAlpha: 1,
      y: 400,
      x: window.innerWidth/2,
      scale:1,
      rotation: 0,
      delay: this.props.animationProps.delay
    });
  };
  handleExitAnimation = () => {
    TweenLite.killTweensOf(this.el);
    TweenLite.to(this.el, this.props.animationProps.time, {
      autoAlpha: 0,
      y:-10,
      delay: this.props.animationProps.delay
    });
  };
  onRef = e => (this.el = e);
  render() {
    const totalTime = this.props.totalTime;

    return (
      <Transition
        in={this.props.shouldAppear}
        timeout={totalTime}
        onEnter={this.handleEnterAnimation}
        onExit={this.handleExitAnimation}
      >
        <div style={{ position: "absolute" }} ref={this.onRef}>
          <img src={creature} />
        </div>
      </Transition>
    );
  }
}

export default Products;
