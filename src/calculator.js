function add(numbersString) {
  if (!numbersString) return 0;

  const numbers = extractNumbers(numbersString);
  const validatedNumbers = validateNumbers(numbers);

  return validatedNumbers.reduce((sum, num) => sum + num, 0);
}

function extractNumbers(inputString) {
  const numberSeparator = ["\n"];
  let numbers = inputString;

  const customDelimiters = extractDelimiters(inputString);

  if (customDelimiters.length > 0) {
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  const allDelimiters = [...numberSeparator, ...customDelimiters];

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
  if (!inputString.startsWith("//")) return [];

  const customDelimiterString = inputString.split("\n")[0];
  const matches = [...customDelimiterString.matchAll(/\[(.*?)\]/g)];
  return matches.length > 0
    ? matches.map((m) => m[1])
    : [customDelimiterString.charAt(2)];
}

export default add;
