const checkNum = (num) => {
  const rawNum = parseInt(num, 10);
  if (isNaN(rawNum)) {
    return false;
  }
  return true;
};


export default checkNum;
