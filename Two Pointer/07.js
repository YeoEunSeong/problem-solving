function solution(s, t) {
  let answer = 0;
  const hs = new Map();

  for (const x of t) {
    hs.set(x, (hs.get(x) || 0) - 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    hs.set(s[i], (hs.get(s[i]) || 0) + 1);
    if (hs.get(s[i]) === 0) hs.delete(s[i]);
  }

  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    hs.set(s[rt], (hs.get(s[rt]) || 0) + 1);
    if (hs.get(s[rt]) === 0) hs.delete(s[rt]);

    answer += hs.size === 0 ? 1 : 0;

    hs.set(s[lt], (hs.get(s[lt]) || 0) - 1);
    if (hs.get(s[lt]) === 0) hs.delete(s[lt]);
    lt++;
  }

  return answer;
}

console.log(solution("bacacbcba", "abc"));
console.log(solution("bacaAacba", "abc"));
