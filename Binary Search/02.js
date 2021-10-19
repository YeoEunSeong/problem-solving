function solution(nums, k) {
  let answer;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] - mid - 1 < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(start);
  answer = start + k;
  return answer;
}

console.log(solution([2, 5, 7, 9, 12], 6));
