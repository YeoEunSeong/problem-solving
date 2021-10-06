function isExclusive(arr) {
  let stringHash = new Map();
  
  for (const x of arr) {
    if (stringHash.has(x)) return false;
    stringHash.set(x, 1);
  }
  return true;
}

function distinguiushStr(arr) {
  arr.sort((a, b) => b.length - a.length);

  for (let i = 1; i <= arr[0].length; i++) {
    let temp = [];
    for (const x of arr) {
      temp.push(x.substring(0, i));
    }

    if (isExclusive(temp)) return i;
  }
}



console.log(distinguiushStr(["seeasue", "sesseysu", "semeas"]));
console.log(distinguiushStr(["ackky", "kabck", "yokkcs"]));
console.log(distinguiushStr(["longlong", "lonngtong", "longbig"]));