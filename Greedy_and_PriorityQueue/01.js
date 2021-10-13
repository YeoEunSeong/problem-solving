function solution(nums, k) {
  let answer = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer += parseInt(k / nums[i]);
    k %= nums[i];
  }

  return answer;
}

console.log(solution([1, 5, 10], 15));
