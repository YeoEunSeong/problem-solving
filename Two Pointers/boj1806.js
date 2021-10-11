function solution(nums, s) {
  let answer = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (s <= sum) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left++];
    }
  }
  answer = answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
  return answer;
}
