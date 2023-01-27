import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  // {current: 0}

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
