function solution(n, nums) {
  let answer = 1;
  nums.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let start = nums[0][0];
  let end = nums[0][1];

  for (let i = 1; i < n; i++) {
    if (end <= nums[i][0]) {
      answer++;
      start = nums[i][0];
      end = nums[i][1];
    }
  }

  return answer;
}
