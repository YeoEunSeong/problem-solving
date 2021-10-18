var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = 10e9 + 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = 0;
    for (const p of piles) {
      result += Math.ceil(p / mid);
    }

    if (result <= h) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};
