function add(numbersString) {
  if (!numbersString) return 0;
  const numbers = extractNumbers(numbersString);
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}

function extractNumbers(inputString) {
  const numberSeparator = ["\n"];

  let numbers = inputString;
  for (const separator of numberSeparator) {
    numbers = numbers.split(separator).join(",");
  }
  return numbers.split(",");
}

export default add;
