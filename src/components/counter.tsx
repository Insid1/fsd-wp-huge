import {useState} from "react";
import classes from "./counter.module.scss"

function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      {/*<span className={classes.active}>{counter}</span>*/}
      <span className={counter > 2 && classes.active}>{counter}</span>
      <button onClick={() => setCounter((prevState) => ++prevState)}>+</button>
      <button onClick={() => setCounter((prevState) => --prevState)}>-</button>
    </>
  );
}

export default Counter;
