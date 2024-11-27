export const parseNumbers = (Numbers) => {
  // 쉼표 , 로 나눠질 경우
  if (Numbers[1] === ',') {
    return Numbers.split(',')
      .map((number) => number.trim())
      .map(Number);
  }

  // 클론 : 로 나눠질 경우
  if (Numbers[1] === ':') {
    return Numbers.split(':')
      .map((number) => number.trim())
      .map(Number);
  }
};
