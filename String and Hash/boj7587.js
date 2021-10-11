function isAnagram(hs, word) {
  let tempHs = new Map(hs);
  for (const x of word) {
    if (!tempHs.has(x)) return false;
    tempHs.set(x, tempHs.get(x) - 1);
    if (tempHs.get(x) == 0) tempHs.delete(x);
  }
  return true;
}

function solution(words) {
  let answerWord;
  let answerCount = 0;

  for (let i = 0; i < words.length; i++) {
    let count = 0;
    const hs = new Map();

    for (const x of words[i]) {
      hs.set(x, (hs.get(x) || 0) + 1);
    }

    for (let j = i + 1; j < words.length; j++) {
      count += isAnagram(hs, words[j]) ? 1 : 0;
    }

    if (answerCount < count) {
      answerWord = words[i];
      answerCount = count;
    }
  }

  return [answerWord, answerCount];
}

console.log(solution(["not", "ant", "tan", "ton", "cat", "nat"]));
console.log(solution(["time", "timer", "emit", "mote"]));
