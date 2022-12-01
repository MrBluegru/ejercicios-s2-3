import React from "react";
import useCounter from "../hooks/useCounter.js";
import "../styles/counter.css";

const Counter = () => {
  const counter = useCounter();

  function handlerRemove() {
    if (counter.value > 0) {
      counter.decrement();
    } else {
      alert("Value cannot be less than 0");
    }
  }

  function handlerAdd() {
    if (counter.value < 10) {
      counter.increment();
    } else {
      alert("Value cannot be greater than 10");
    }
  }

  return (
    <div className="counterC">
      <p>Current Value: {counter.value}</p>
      <div>
        <button className="btnCounter remove" onClick={handlerRemove}>
          1 ◀ Remove
        </button>
        <button className="btnCounter reset" onClick={() => counter.reset()}>
          RESET
        </button>
        <button className="btnCounter add" onClick={handlerAdd}>
          Add ▶ 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
