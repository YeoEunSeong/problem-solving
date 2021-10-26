function solution(k, n, nums) {
  let answer = 0;
  let start = 0;
  let end = 10e9;

  function count(mid) {
    let result = 0;
    for (const x of nums) {
      result += Math.floor(x / mid);
    }
    return result;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (count(mid) < n) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }

  return answer;
}
