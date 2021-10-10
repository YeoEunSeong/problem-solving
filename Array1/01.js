function solution(nums, m) {
  let answer;

  for (let i = 1; i <= m; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      nums[j] = nums[j + 1] - nums[j];
    }
  }

  answer = nums.slice(0, nums.length - m)
  return answer;
}

console.log(solution([5, 3, 7, 9, -2], 1));
console.log(solution([5, 3, 7, 9, -2], 2));