exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    counter = 0;
    if (start <= end) {
      setTimeout(() => {
        counter++;

        this.count(counter, end);
      }, 100);
    }
    return counter;
  }
};
