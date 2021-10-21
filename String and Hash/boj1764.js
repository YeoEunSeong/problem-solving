function solution(p1, p2) {
  let answer = [];

  let hs = new Map();

  for (const name of p1) {
    hs.set(name, 1);
  }

  for (const name of p2) {
    hs.set(name, (hs.get(name) || 0) + 1);
  }

  let cnt = 0;
  for (const [key, value] of hs) {
    if (value === 2) {
      cnt++;
      answer.push(key);
    }
  }
  answer.sort();
  return [cnt, answer];
}
