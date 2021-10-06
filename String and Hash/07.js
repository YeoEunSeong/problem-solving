function isUnique(origin, target) {
  for (const x of origin) {
    if (target.lastIndexOf(x) > -1) return false;
  }
  return true;
}

function maxProduct(words) {
  words.sort((a, b) => a.length - b.length);

  let answer = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isUnique(words[i], words[j])) {
        answer = Math.max(answer, words[i].length * words[j].length)
      }
    }
  }
  return answer;
}

console.log(maxProduct(["skudy", "kstue", "time", "back", "good"]));
console.log(maxProduct(["kk", "k", "kkk", "kkkkk", "kkkk"]));