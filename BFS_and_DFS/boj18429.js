const solution = (n, k, arr) => {
  let answer = 0;
  const visited = Array(n).fill(false);

  const isValid = res => {
    let val = 0;

    for (const w of res) {
      val += arr[w] - k;
      if (val < 0) return false;
    }

    return true;
  };

  const dfs = res => {
    if (res.length === n) {
      answer += isValid(res) ? 1 : 0;
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs([...res, i]);
        visited[i] = false;
      }
    }
  };

  dfs([]);
  return answer;
};

console.log(solution(3, 4, [3, 7, 5]));
