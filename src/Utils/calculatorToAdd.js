export const addNumbers = (parsedNumbers) => {
  let sum = 0;
  parsedNumbers.forEach((num) => {
    sum += num;
  });

  return sum;
};
