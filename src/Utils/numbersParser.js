export const checkNormalOrCustom = (Numbers) => {
  if (Numbers[1] === ',' || Numbers[1] === ':') {
    return parseNumbersForNormal(Numbers);
  }

  // if (Numbers[1] === ',' || Numbers[1] === ':') {
  //   return parseNumbersForCustom(Numbers);
  // }

  // if (
  //   Numbers[0] === '/' &&
  //   Numbers[1] === '/' &&
  //   Numbers[3] === '\\' &&
  //   Numbers[4] === 'n'
  // ) {
  // }
};

const parseNumbersForNormal = (Numbers) => {
  // 쉼표 , 로 나눠질 경우
  if (Numbers[1] === ',' || Numbers[1] === ':') {
    return Numbers.split((/,|:/))
      .map((number) => number.trim())
      .map(Number);
  }
};

const parseNumbersForCustom = () => {
  // 4번째 요소붙터 커스텀으로 구분하기
  // 4번째 배열을 다시 배열로 만들어서
  // 다시 입력 받기
};
