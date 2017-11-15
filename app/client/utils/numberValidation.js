
/**
 * Checks if a value is a number
 * @param {number} num  -number
 *
 * @returns {boolean} - true or false
 */
const checkNum = (num) => {
  const rawNum = parseInt(num, 10);
  if (isNaN(rawNum)) {
    return false;
  }
  return true;
};


module.exports = checkNum;
