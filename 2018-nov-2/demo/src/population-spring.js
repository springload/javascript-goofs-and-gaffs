import React from "react";
import { Spring } from "react-spring";
import Person from "./person";

export default ({ items }) =>
  items.map(item => (
    <Spring
      to={{
        opacity: item.opacity
      }}
      children={Person}
    />
  ));

//  transform: `translateX(${-item.opacity * 50}px)`
// { tension: 180, friction: 12 }; // wobbly spring
