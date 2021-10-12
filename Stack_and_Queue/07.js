function solution(nums) {
  let answer = Array(nums.length).fill(0);
  // 매개 변수 nums와 같은 길이의 배열 생성 후 0으로 초기화
  // 시청을 방해하는 학생이 없다면 정답 배열에 0이 저장되어있어야 하기 때문에 처음에 0으로 초기화 해주는 것이 편함
  let stack = []; // 학생의 인덱스를 저장할 스택

  for (let i = nums.length - 1; i >= 0; i--) {
    // 내 시야를 가리는 학생은 나보다 앞에 있기 때문에 배열의 끝에서 처음으로 탐색
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      // stack.length -> 스택이 비어있으면 while문을 실행하지 않음
      // 현재 인덱스 학생의 앉은 키가 스택에 들어있는 앉은 키보다 크면(=현재 학생이 뒷 학생의 시야를 방해하면)
      answer[stack.pop()] = i + 1;
      // 스택에 들어있는 모든 학생의 시야를 방해하는 최초 학생으로 현재 학생의 인덱스를 저장(학생은 1번부터기 때문에 i+1)
    }
    stack.push(i);
    // 현재 학생의 인덱스를 스택에 삽입
    // 현재까지 학생보다 키가 커서 시청에 방해가 되지 않는 학생만 저장되어있음
  }
  // 반복문이 끝날 때까지 스택에 남아있는 학생들은 시청에 방해가 되지 않는 학생
  // 정답 배열의 초기값을 0으로 설정했기 때문에 따로 설정해줄 필요가 없음
  return answer;
}

console.log(solution([50, 57, 52, 53, 51]));
console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
