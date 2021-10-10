function solution(nums) {
  let answer = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let n = nums.length;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let flag = true;
      for (let i = 0; i < 4; i++) {
        let nx = row - dx[i];
        let ny = col - dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (nums[row][col] <= nums[nx][ny]) {
          flag = false;
          break;
        }
      }
      answer += flag ? 1 : 0;
    }
  }

  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
