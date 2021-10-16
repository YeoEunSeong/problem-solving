function preorder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

function inorder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer += v + " ";
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

function postorder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v + " ";
    }
  }
  DFS(n);
  return answer;
}
console.log(preorder(1));
console.log(inorder(1));
console.log(postorder(1));
