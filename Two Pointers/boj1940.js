function solution(n, m, nums) {
  let answer = 0;

  nums.sort((a, b) => a - b);
  let lt = 0;
  let rt = n - 1;

  while (lt < rt) {
    let result = nums[lt] + nums[rt];
    answer += result === m ? 1 : 0;
    lt += result <= m ? 1 : 0;
    rt -= result >= m ? 1 : 0;
  }
  return answer;
}

console.log(solution(6, 9, [2, 7, 4, 1, 5, 3]));
