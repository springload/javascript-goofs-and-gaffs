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

// Step 1: Add this to the `to` object,
//     transform: `translateX(${-item.opacity * 50}px)`
// Step 2: config <Spring> to make it wobbly!
//     config = {{ tension: 180, friction: 12 }};
