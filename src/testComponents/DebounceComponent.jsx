import React, { useState } from "react";
import useDebounce from "../hooks/customHooks/useDebounce";

export default function DebounceComponent() {
  const [count, setCount] = useState(0);

  // Replace the alert with your own function
  // example: api call
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
