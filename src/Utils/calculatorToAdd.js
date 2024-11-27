export const addNumbers = (parsedNumbers) => {
  let sum = 0;
  parsedNumbers.forEach((number) => {
    sum += number;
  });

  return sum;
};
