var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  const hs = new Map();

  let lt = 0;
  for (let rt = 0; rt < s.length; rt++) {
    if (hs.has(s[rt])) {
      lt = hs.get(s[rt]) + 1;
    }

    for (const [key, value] of hs) {
      if (value < lt) hs.delete(key);
    }

    hs.set(s[rt], rt);
    answer = Math.max(answer, rt - lt + 1);
  }

  return answer;
};
