import { React } from "react";
import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("empty");

  const increment = () => {
    setCounter(counter + 1);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>.......useState.....</h1>
      {counter}
      <button onClick={increment}>increment</button>
      <p>input</p>
      <input onChange={handleInput} />
      <p>{input}</p>
    </>
  );
};

export default UseState;
