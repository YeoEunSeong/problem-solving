function selectNumber(str) {
  let answer = "";
  
  for (const x of str) {
    if (!isNaN(x)) answer += x;
  }

  answer = parseInt(answer);
  return answer;
}

console.log(selectNumber("g0en2T0s8eSoft"));