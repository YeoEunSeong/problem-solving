function solution(nums) {
  let answer = 0;
  let temp = 0;

  nums.push(0);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      answer = Math.max(answer, temp);
      temp = 0;
    }
    else {
      temp += nums[i + 1] - nums[i];
    }
  }

  return answer;
}

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
console.log(solution([8, 12, 2, 3, 7, 6, 20, 3]));