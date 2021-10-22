function solution(s) {
  let answer = 0;

  let lt = 0;
  let rt = s.length - 1;

  while (lt < rt) {
    if (s[lt] === s[rt]) {
      lt++;
      rt--;
      continue;
    }
    if (
      s.substring(lt, rt) ===
        s.substring(lt, rt).split("").reverse().join("") ||
      s.substring(lt + 1, rt + 1) ===
        s
          .substring(lt + 1, rt + 1)
          .split("")
          .reverse()
          .join("")
    )
      return 1;
    else return 2;
  }
  return answer;
}
