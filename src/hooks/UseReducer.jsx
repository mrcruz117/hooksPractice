import React from "react";

export default function UseReducer() {
  const [count, setCout] = React.useState(0);

  const increment = () => {
    setCout((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCout((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCout(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
