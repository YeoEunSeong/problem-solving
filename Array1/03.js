function solution(nums, m) {
  let answer = Array(1000).fill(0);
  let minNum = Number.MAX_SAFE_INTEGER;
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (const x of nums) {
    minNum = Math.min(minNum, x);
    maxNum = Math.max(maxNum, x);

    answer[x]++;
  }

  for (let cnt = 0; cnt < m; cnt++) {
    if (minNum === maxNum) return 0;
    answer[minNum]--;
    answer[maxNum]--;
    
    answer[minNum+1]++;
    answer[maxNum-1]++;
    
    minNum += answer[minNum] === 0 ? 1 : 0;
    maxNum -= answer[maxNum] === 0 ? 1 : 0;
  }
  
  return maxNum - minNum;
}

console.log(solution([2, 1, 3, 7, 5], 2));
console.log(solution([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50));