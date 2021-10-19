function solution(nums, n) {
  let answer;
  let start = 1;
  let end = 10e9;

  while (start <= end) {
    let middle = parseInt((start + end) / 2);
    let result = 0;
    for (const x of nums) {
      result += Math.floor(x / middle);
    }

    if (n <= result) {
      answer = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return answer;
}

console.log(solution([802, 743, 457, 539], 11));
