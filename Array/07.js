function solution(nums) {
  let answer = 0;
  let d = 100;
  let dist = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    d = nums[i] === 1 ? 0 : d + 1;
    dist[i] = d;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    d = nums[i] === 1 ? 0 : d + 1;
    dist[i] = Math.min(dist[i], d);
    answer = Math.max(answer, dist[i]);
  }

  return answer;
}

console.log(solution([0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0]));