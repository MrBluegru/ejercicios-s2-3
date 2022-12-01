const { useState } = require("react");

const useList = (
  initialValue = ["bromo", "zinc", "cobalto", "oro", "plomo"]
) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => {
    return value.length === 0;
  };

  const clear = () => {
    setValue([]);
  };

  const orderAsc = () => {
    setValue((oldValue) =>
      oldValue.sort(function (a, b) {
        if (a > b) {
          return 1;
        }
        if (b > a) {
          return -1;
        }
        return 0;
      })
    );
  };

  const orderDesc = () => {
    setValue((oldValue) =>
      oldValue.sort(function (a, b) {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      })
    );

  };

  return { value, setValue, push, remove, isEmpty, clear, orderAsc, orderDesc };
};

export default useList;
