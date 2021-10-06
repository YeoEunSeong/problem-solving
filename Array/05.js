function solution(nums) {
  let answer = 0;
  let asc = 1;
  let desc = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      asc++;
    }
    else {
      answer = Math.max(answer, asc);
      asc = 1;
    }

    if (nums[i] > nums[i + 1]) {
      desc++;
    }
    else {
      answer = Math.max(answer, desc);
      desc = 1;
    } 
  }
  return answer;
}

console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7]));