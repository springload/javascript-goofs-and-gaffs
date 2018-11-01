import React, { useState, Fragment } from "react";
import Population from "./population";
// import Population from "./population-spring";
// import Population from "./population-trail";

const total = 10;

export default () => {
  const [count, setCount] = useState(total);

  const items = Array.from(Array(total)).map((x, i) => ({
    opacity: i < count ? 1 : 0.5,
    key: i
  }));

  return (
    <div style={{ padding: 50 }}>
      <Population items={items} />
      <Change setCount={setCount} count={count} />
    </div>
  );
};

const Change = ({ setCount, count }) => (
  <Fragment>
    <hr />
    <button
      onClick={() => {
        const randomNumber = parseInt(Math.random() * total, 10);
        setCount(randomNumber);
      }}
      style={{ padding: 10 }}
    >
      Randomise selection (current: {count})
    </button>
  </Fragment>
);
