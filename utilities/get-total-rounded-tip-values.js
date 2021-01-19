const getTotalRoundedTipValues = (employees) => {
    totalRoundedTipValues = 0;
    employees.forEach(employee => totalRoundedTipValues += employee.roundedTipValue);
    return totalRoundedTipValues;
}

module.exports = getTotalRoundedTipValues;