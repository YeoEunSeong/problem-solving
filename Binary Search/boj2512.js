const solution = (budgets, maxBudget) => {
  let start = 1;
  let end = Math.max(...budgets);

  const count = budget =>
    budgets.reduce((prev, curr) => prev + Math.min(curr, budget), 0);

  let answer = 0;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const budget = count(middle);

    if (budget <= maxBudget) {
      answer = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return answer;
};

console.log(solution([120, 110, 140, 150], 485));
console.log(solution([70, 80, 30, 40, 100], 450));
