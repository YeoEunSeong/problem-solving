function solution(nums, m) {
  let answer;
  let start = 1;
  let end = 10e9;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    let sum = 0;
    let count = 1;
    for (const x of nums) {
      if (middle < sum + x) {
        sum = x;
        count++;
      } else {
        sum += x;
      }
    }

    if (count <= m) {
      answer = middle;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return answer;
}

console.log(solution([200, 300, 200, 200, 300, 100, 300], 3));
