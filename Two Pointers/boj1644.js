function getPrimeNums(n) {
  let result = [];
  let nums = Array(n + 2).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (nums[i]) {
      for (let j = i * i; j <= n; j += i) {
        nums[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (nums[i]) result.push(i);
  }
  return result;
}

function solution(n) {
  let answer = 0;
  let pirmeNums = getPrimeNums(n);

  let left = 0;
  let sum = 0;

  for (let right = 0; right < pirmeNums.length; right++) {
    sum += pirmeNums[right];

    while (n < sum) {
      sum -= pirmeNums[left++];
    }
    answer += sum === n ? 1 : 0;
  }

  return answer;
}
