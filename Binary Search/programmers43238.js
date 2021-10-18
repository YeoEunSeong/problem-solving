function solution(n, times) {
  var answer = 0;
  let start = 1;
  let end = 1000000000000000000;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = 0;
    for (let t of times) {
      result += Math.floor(mid / t);
    }

    if (n <= result) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
