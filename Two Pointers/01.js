function solution(nums, k) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k - 1; i++) {
    sum += nums[i];
  }

  let lt = 0;
  for (let rt = k - 1; rt < nums.length; rt++) {
    sum += nums[rt];
    answer = Math.max(answer, sum);

    sum -= nums[lt++];
  }

  return answer;
}
