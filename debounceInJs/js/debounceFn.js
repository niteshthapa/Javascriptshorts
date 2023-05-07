const debounce = (fn, delay) => {
  let clearIntervalID;
  return function (...args) {
    clearInterval(clearIntervalID);
    clearIntervalID = setTimeout(() => {
      return fn(...args);
    }, delay);
  };
};
