const filterCost = (param) => {
  const splittedCost = param.split('-');

  if (splittedCost.length === 2) {
    if (splittedCost[0] !== '' && splittedCost[1] !== '')
      return {$gte: splittedCost[0], $lte: splittedCost[1]};
    if (splittedCost[0] !== '' && splittedCost[1] === '') return {$gte: splittedCost[0]};
    if (splittedCost[0] === '' && splittedCost[1] !== '') return {$lte: splittedCost[1]};
  } else {
    return splittedCost;
  }
};

module.exports = filterCost;
