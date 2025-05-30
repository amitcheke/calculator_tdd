function add(numbersString) {
  if (!numbersString) return 0;
  const numbers = extractNumbers(numbersString);
  const validatedNumbers = validateNumbers(numbers);
  return validatedNumbers.reduce((sum, num) => sum + num, 0);
}

function extractNumbers(inputString) {
  const numberSeparator = ["\n"];
  let numbers = inputString;

  const customDelimiter = extractDelimiters(inputString);

  if (customDelimiter) {
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  const allDelimiters = customDelimiter
    ? [customDelimiter, ...numberSeparator]
    : numberSeparator;

  for (const separator of allDelimiters) {
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
    if (val <= 1000) result.push(val);
  }

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed ${negatives.join(",")}`);
  }
  return result;
}

function extractDelimiters(inputString) {
  if (!inputString.startsWith("//")) return null;

  const customDelimiterString = inputString.split("\n")[0];
  const match = customDelimiterString.match(/\[(.*)\]/);
  return match ? match[1] : customDelimiterString.charAt(2);
}

export default add;
