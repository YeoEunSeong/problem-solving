function solution(nums, m) {
  let answer = 0;
  let sum = 0;

  let lt = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (m < sum) {
      sum -= nums[lt++];
    }

    answer += rt - lt + 1;
  }

  return answer;
}
