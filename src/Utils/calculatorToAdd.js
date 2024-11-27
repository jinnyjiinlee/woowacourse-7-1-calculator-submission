export const addNumbers = (parsedNumbers) => {
  let sum = 0;

  console.log('parsedNumbers: ', parsedNumbers);

  parsedNumbers.forEach((num) => {
    sum += num;
  });

  return sum;
};
