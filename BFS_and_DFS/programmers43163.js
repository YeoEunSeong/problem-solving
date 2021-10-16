function solution(begin, target, words) {
  let answer = 10e9;
  let visited = Array(words.length).fill(false);

  function dfs(word, cnt) {
    if (word === target) {
      answer = Math.min(answer, cnt);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (visited[i]) continue;

        let match = 0;
        for (let j = 0; j < words[i].length; j++) {
          if (words[i][j] === word[j]) match++;
        }

        if (match === word.length - 1) {
          visited[i] = true;
          dfs(words[i], cnt + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(begin, 0);
  answer = answer === 10e9 ? 0 : answer;
  return answer;
}
