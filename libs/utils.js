export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timeout);
    if (immediate && !timeout) func.apply(context, args);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};

export const throttle = (callback, delay) => {
  let timer = null;
  return () => {
    if (timer) return;
    timer = window.setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};
