function solution(nums, m) {
  let answer = 0;
  let sum = 0;
  const hs = new Map();

  for (const x of nums) {
    sum += x;
    answer += sum === m ? 1 : 0;

    answer += hs.get(sum - m) || 0;
    hs.set(sum, (hs.get(sum) || 0) + 1);
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3));
console.log(solution([-1, 0, 1], 0));
console.log(solution([-1, -1, -1, 1], 0));
