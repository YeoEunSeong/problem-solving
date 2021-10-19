function solution(stables, c) {
  let answer;
  stables.sort((a, b) => a - b);
  let start = 0;
  let end = 10e9;

  while (start <= end) {
    let middle = parseInt((start + end) / 2);
    let a = 0;
    let count = 1;
    for (let i = 1; i < stables.length; i++) {
      if (stables[i] - stables[a] < middle) continue;
      a = i;
      count++;
    }

    if (count >= c) {
      answer = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
