const debounce = (fn, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
        return fn(...args);
      }, delay);
    }
  };
};
