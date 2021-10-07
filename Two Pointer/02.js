function solution(nums, k) {
  let answer = [];
  let hs = new Map();

  for (let i = 0; i < k - 1; i++) {
    hs.set(nums[i], (hs.get(nums[i]) || 0) + 1);
  }

  let lt = 0;
  for (let rt = k - 1; rt < nums.length; rt++) {
    hs.set(nums[rt], (hs.get(nums[rt]) || 0) + 1);
    answer.push(hs.size);

    hs.set(nums[lt], hs.get(nums[lt]) - 1);
    if (hs.get(nums[lt]) === 0) hs.delete(nums[lt]);
    lt++;
  }
  return answer;
}
