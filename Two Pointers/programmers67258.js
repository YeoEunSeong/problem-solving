function solution(gems) {
  let answer = [];
  let minLen = Number.MAX_SAFE_INTEGER;
  let st = new Set();
  let hs = new Map();

  for (const gem of gems) {
    st.add(gem);
  }

  let lt = 0;
  for (let rt = 0; rt < gems.length; ++rt) {
    hs.set(gems[rt], (hs.get(gems[rt]) || 0) + 1);

    while (1 < hs.get(gems[lt])) {
      hs.set(gems[lt], hs.get(gems[lt]) - 1);
      if (hs.get(gems[lt]) === 0) hs.delete(gems[lt]);
      lt++;
    }

    if (rt - lt < minLen && hs.size === st.size) {
      answer = [lt + 1, rt + 1];
      minLen = rt - lt;
    }
  }

  return answer;
}
