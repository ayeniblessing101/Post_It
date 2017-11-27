/**
 * Checks if an input value is a number
 * @param {number} number  -number
 *
 * @returns {boolean} - true or false
 */
const checkNum = (number) => {
  const rawNum = parseInt(number, 10);
  if (isNaN(rawNum)) {
    return false;
  }
  return true;
};

module.exports = checkNum;
