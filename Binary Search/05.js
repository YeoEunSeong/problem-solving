function solution(songs, m) {
  let answer;
  let start = 1;
  let end = 10e9;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let count = 1;
    let sum = 0;

    for (const s of songs) {
      if (mid < sum + s) {
        sum = s;
        count++;
      } else {
        sum += s;
      }
    }

    if (count <= m) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
