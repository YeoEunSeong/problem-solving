function isPalindrome2(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      let leftStr = str.substring(left, right);
      let rightStr = str.substring(left + 1, right + 1);

      if (leftStr === leftStr.split('').reverse().join('')) return "YES";
      if (rightStr === rightStr.split('').reverse().join('')) return "YES";
      return "NO";
    }
    left++;
    right--;
  }
  return "YES";
}

console.log(isPalindrome2("abcbdcba"));
console.log(isPalindrome2("abcabbakcba"));
console.log(isPalindrome2("abcacbakcba"));