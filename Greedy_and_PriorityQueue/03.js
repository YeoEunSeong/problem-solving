function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a[0] - b[0]);

  let start = nums[0][0];
  let end = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= end && end < nums[i][1]) {
      end = nums[i][1];
    } else if (end < nums[i][0]) {
      answer += end - start;
      start = nums[i][0];
      end = nums[i][1];
    }
  }
  answer += end - start;
  return answer;
}
