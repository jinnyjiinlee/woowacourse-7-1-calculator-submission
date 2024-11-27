export const checkNormalOrCustom = (Numbers) => {
  if (Numbers[1] === ',' || Numbers[1] === ':') {
    return parseNumbersForNormal(Numbers);
  }

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
  const onlyNumbersAndDelimiter = Numbers.substr(5);
  const customDelimiter = Numbers[2];

  return onlyNumbersAndDelimiter
    .split(customDelimiter)
    .map((number) => number.trim())
    .map(Number);
};
