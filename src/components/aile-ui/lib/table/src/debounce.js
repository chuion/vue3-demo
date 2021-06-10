export default function(fn, wait) {
  wait = wait || 0;
  var timerId;

  function debounced() {
    if (timerId) {
      clearTimeout(timerId);

      timerId = null;
    }
    timerId = setTimeout(function() {
      fn();
    }, wait);
  }
  return debounced;
}
