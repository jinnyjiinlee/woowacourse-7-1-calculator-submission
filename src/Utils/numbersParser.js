export const checkNormalOrCustom = (Numbers) => {
  if (Numbers[1] === ',' || Numbers[1] === ':') {
    return parseNumbersForNormal(Numbers);
  }
  // console.log('Numbers[0]: ', Numbers[0]);
  // console.log('Numbers[1]: ', Numbers[1]);
  // console.log('Numbers[2]: ', Numbers[2]);
  // console.log('Numbers[3]: ', Numbers[3]);
  // console.log('Numbers[4]: ', Numbers[4]);

  if (
    Numbers[0] === '/' &&
    Numbers[1] === '/' &&
    Numbers[3] === '\\' &&
    Numbers[4] === 'n'
  ) {
    return parseNumbersForCustom(Numbers);
  }
};

const parseNumbersForNormal = (Numbers) => {
  // 쉼표 , 로 나눠질 경우
  if (Numbers[1] === ',' || Numbers[1] === ':') {
    return Numbers.split(/,|:/)
      .map((number) => number.trim())
      .map(Number);
  }
};

const parseNumbersForCustom = (Numbers) => {
  // 4번째 요소부터 배열부터 문자열 생성
  const onlyNumbersAndDelimiter = Numbers.substr(5);
  console.log('onlyNumbersAndDelimiter: ', onlyNumbersAndDelimiter);

  const customDelimiter = Numbers[2];
  console.log('customDelimiter ', customDelimiter);

  return onlyNumbersAndDelimiter
    .split(customDelimiter)
    .map((number) => number.trim())
    .map(Number);
};
