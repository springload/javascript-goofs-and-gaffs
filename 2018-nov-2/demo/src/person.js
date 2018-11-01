import React from "react";
import PersonPNG from "./person.png";

export default ({ opacity, transform, style, count }) => {
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: "center",
        transform,
        opacity
      }}
    >
      <img
        src={PersonPNG}
        width="130"
        alt=""
        style={{
          ...style
        }}
      />
    </div>
  );
};
