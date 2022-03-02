const solution = s => {
  const n = s.length;
  let answer = n;

  let reverse = s.split('').reverse().join('');

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < n - i; j++) {
      if (s[i + j] !== reverse[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer += i;
      break;
    }
  }
  return answer;
};

const 풀이 = 문자열 => {
  const 길이 = 문자열.length;

  const 팰린드롬인가 = 문자열 => {
    let 시작점 = 0;
    let 끝점 = 문자열.length - 1;
    while (시작점 <= 끝점) {
      if (문자열[시작점++] !== 문자열[끝점--]) return false;
    }
    return true;
  };

  for (let 인덱스 = 0; 인덱스 < 길이; 인덱스++) {
    if (팰린드롬인가(문자열.substring(인덱스, 길이))) return 길이 + 인덱스;
  }
};

console.log(풀이('abab'));
console.log(풀이('abaa'));
console.log(풀이('abacaba'));
console.log(풀이('qwerty'));
console.log(풀이('abdfhdyrbdbsdfghjkllkjhgfds'));
