function solution(nums, m) {
  let answer = 0;
  nums.sort((a, b) => b - a);

  let light = nums.length - 1;
  for (let heavy = 0; heavy < light; heavy++) {
    light -= m >= nums[heavy] + nums[light] ? 1 : 0;
    answer++;
  }

  return answer;
}
