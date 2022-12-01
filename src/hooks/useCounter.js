import { useState } from "react";

const useCounter = (initialValues = 0) => {
  const [value, setValue] = useState(initialValues);

  const increment = () => {
    setValue((oldValue) => 1 + oldValue);
  };

  const decrement = () => {
    setValue((oldValue) => oldValue - 1);
  };

  const reset = () => {
    setValue(initialValues);
  };

  return {
    value,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
