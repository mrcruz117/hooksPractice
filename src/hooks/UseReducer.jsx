import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    //     case "reset":
    //       return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCout] = React.useState(0);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const reset = () => {
    setCout(0);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>Count: {state.count}</span>
      <button onClick={increment}>+</button>
      {/* <button onClick={reset}>Reset</button> */}
    </div>
  );
}
