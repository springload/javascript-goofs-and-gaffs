import React, { useEffect, useState } from "react";
import { Trail } from "react-spring";
import Person from "./person";

export default ({ items }) => {
  const [x, setX] = useState(0);

  trackMouse(setX);

  return (
    <Trail
      items={items}
      keys={(item, i) => i}
      to={{ transform: `translateX(${x}px)` }}
    >
      {(item, i) => style => {
        return <Person {...item} style={style} />;
      }}
    </Trail>
  );
};

const trackMouse = setX => {
  useEffect(() => {
    const handleMove = e => {
      setX(e.clientX);
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  });
};
