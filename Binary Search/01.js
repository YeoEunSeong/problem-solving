function solution(nums, m) {
  let answer;
  let start = 0;
  let end = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (start <= end) {
    let middle = parseInt((start + end) / 2);
    if (nums[middle] === m) {
      answer = middle + 1;
      break;
    } else if (nums[middle] < m) {
      start = middle + 1;
    } else if (nums[middle] > m) {
      end = middle - 1;
    }
  }

  return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
