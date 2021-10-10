function solution(nums) {
  let answer = Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      answer[index] = nums[right] * nums[right--];
    }
    else {
      answer[index] = nums[left] * nums[left++];
    }
    index--;
  }
  return answer;
}

console.log(solution([-4, -1, 0, 3, 10]));
console.log(solution([-7, -3, 2, 3, 11]));
