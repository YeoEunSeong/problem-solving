function solution(nums) {
  let answer = [];
  let dy = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    nums[i].push(i + 1);
  }

  nums.sort((a, b) => b[0] - a[0]);
  let idx = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    idx[i] = Array(1).fill(nums[i][3]);
  }

  for (let i = 0; i < nums.length; i++) {
    dy[i] = nums[i][1];
    for (let j = 0; j < i; j++) {
      if (nums[i][2] < nums[j][2] && dy[i] < dy[j] + nums[i][1]) {
        dy[i] = dy[j] + nums[i][1];
        idx[i] = Array();
        idx[i].push(nums[i][3]);

        for (const x of idx[j]) {
          idx[i].push(x);
        }
      }
    }
  }

  let height = 0;
  for (let i = 0; i < nums.length; i++) {
    if (height < dy[i]) {
      height = dy[i];
      answer = idx[i];
    }
  }

  console.log(idx);
  console.log(answer.length);
  for (const x of answer) {
    console.log(x);
  }

  // return answer;
}

console.log(
  solution([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    // [4, 2, 2],
    // [1, 3, 1],
  ])
);
