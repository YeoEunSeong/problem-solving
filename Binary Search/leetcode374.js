var guessNumber = function (n) {
  let start = 1;
  let end = 2147483647;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (guess(mid) === 0) return mid;
    else if (guess(mid) === -1) end = mid - 1;
    else start = mid + 1;
  }
};
