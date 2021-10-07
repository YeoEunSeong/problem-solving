function solution(nums, m) {
  let answer = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > m) {
      sum -= nums[left++];
    }
    answer += sum === m ? 1 : 0;
  }
  return answer;
}
