import {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter((prevState) => prevState++)}>+</button>
      <button onClick={() => setCounter((prevState) => --prevState)}>-</button>
    </>
  );
}

export default Counter;
