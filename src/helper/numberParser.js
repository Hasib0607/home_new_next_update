export const numberParser = (digit, ceil) => {
  const parsed = parseFloat(digit);

  if (ceil) {
    return isNaN(parsed) ? 0 : Math.ceil(parseFloat(parsed.toFixed(2)));
  }

  return isNaN(parsed) ? 0 : parseFloat(parsed.toFixed(2));
};
