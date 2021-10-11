function solution(nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i]--;
    let count = 0;
    for (let j = 2; j <= nums[i]; j++) {
      nums[i] -= j;
      count += nums[i] % j === 0 ? 1 : 0;
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution([6, 9, 8, 1800, 987654321, 987654323, 987654325]));
