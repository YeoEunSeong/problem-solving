const solution = (n, k) => {
  const result = [];
  const dfs = (curr, res) => {
    if (curr === n) {
      result.push(res.join('+'));
    } else if (curr < n) {
      dfs(curr + 1, [...res, 1]);
      dfs(curr + 2, [...res, 2]);
      dfs(curr + 3, [...res, 3]);
    }
  };

  dfs(0, []);

  result.sort();
  if (result.length < k) {
    return -1;
  } else {
    return result[k - 1];
  }
};

console.log(solution(4, 8));
