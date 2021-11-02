var alertNames = function (keyName, keyTime) {
  const n = keyName.length;
  let answer = [];
  for (let i = 0; i < n; i++) {
    let tmp = keyTime[i].split(":");
    keyTime[i] = parseInt(tmp[0]) * 60 + parseInt(tmp[1]);
  }

  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(keyName[i])) {
      let tmp = hash.get(keyName[i]);
      tmp.push(keyTime[i]);
      hash.set(keyName[i], tmp);
    } else {
      hash.set(keyName[i], [keyTime[i]]);
    }
  }

  console.log(hash);

  for (const [key, value] of hash) {
    if (value.legnth < 3) continue;
    value.sort((a, b) => a - b);

    for (let i = 2; i < value.length; i++) {
      let time = value[i] - value[i - 2];
      if (0 < time && time <= 60) {
        answer.push(key);
        break;
      }
    }
  }
  answer.sort();
  return answer;
};
