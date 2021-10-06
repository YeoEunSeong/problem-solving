function reverseStr(str) {
  const isAlphabet = RegExp(/[a-zA-Z]/);
  str = str.split('');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (!isAlphabet.test(str[left])) {
      console.log(str[left]);
      left++;
    }
    else if (!isAlphabet.test(str[right])) {
      right--;
    }
    else {
      let temp = str[left];
      str[left] = str[right];
      str[right] = temp;
      left++;
      right--;
    }
  }

  return str.join('');  
}

console.log(reverseStr("a#b!GE*T@S"));