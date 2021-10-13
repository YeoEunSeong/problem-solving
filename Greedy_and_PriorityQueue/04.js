function solution(nums) {
  let answer = 0;
  nums.sort(function compare(a, b) {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let endTime = 0;
  for (let i = 0; i < nums.length; i++) {
    if (endTime <= nums[i][0]) {
      answer++;
      endTime = nums[i][1];
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
