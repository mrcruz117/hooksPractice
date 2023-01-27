import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const prevName = useRef("");
  // {current: 0}

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    prevName.current.focus();
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
