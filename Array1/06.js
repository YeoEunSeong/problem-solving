function solution(nums) {
  let i = 0;
  while (i < nums.length && nums[i] < nums[i+1]) i++;
  if (i === 0 || i === nums.length - 1 ) return "NO";

  while (i < nums.length && nums[i] > nums[i + 1]) i++;
  if (i !== nums.length - 1) return "NO";
  return "YES";
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));