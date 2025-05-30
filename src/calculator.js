function add(numbersString) {
  if (!numbersString) return 0;
  const numbers = numbersString.split(",");
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}

export default add;
