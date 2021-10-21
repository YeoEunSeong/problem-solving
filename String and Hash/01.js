function compress(str) {
  let answer = "";
  str += " ";

  let count = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      answer += str[i];
      answer += count > 1 ? count : "";
      count = 1;
    } else {
      count++;
    }
  }

  return answer;
}
