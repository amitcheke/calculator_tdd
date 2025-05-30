function add(numbersString) {
  if (!numbersString) return 0;
  const numbers = extractNumbers(numbersString);
  const validatedNumbers = validateNumbers(numbers);
  return validatedNumbers.reduce((sum, num) => sum + num, 0);
}

function extractNumbers(inputString) {
  const numberSeparator = ["\n"];
  let numbers = inputString;
  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.split("\n")[0].charAt(2);
    numberSeparator.push(customDelimiter);
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  for (const separator of numberSeparator) {
    numbers = numbers.split(separator).join(",");
  }
  return numbers.split(",");
}

function validateNumbers(numbers) {
  const negatives = [];
  const result = [];

  for (const num of numbers) {
    const val = parseInt(num);
    if (val < 0) negatives.push(num);
    result.push(val);
  }

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed ${negatives.join(",")}`);
  }
  return result;
}

export default add;
