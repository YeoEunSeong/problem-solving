function solution(nums, k) {
  let answer = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer += parseInt(k / nums[i]);
    k %= nums[i];
  }

  return answer;
}
