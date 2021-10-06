function anagram(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2 ? "YES" : "NO";
}

function solution(s1, s2) {
  let hash = new Map();
  for (const x of s1) {
    hash.set(x, (hash.get(x) || 0) + 1);
  }

  for (const x of s2) {
    if (!hash.has(x) || hash.get(x) === 0) return "NO";
    hash.set(x, hash.get(x) - 1);
  }
  return "YES";
}

console.log(anagram("AbaAeCe", "baeeACA"));
console.log(solution("AbaAeCe", "baeeACA"));