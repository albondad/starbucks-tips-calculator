const getTotalActualTipValues = (employees) => {
    console.log('test1', employees)
    let totalActualTipValues = 0;
    employees.forEach(employee => totalActualTipValues += employee.actualTipValue);
    return totalActualTipValues;
}

module.exports = getTotalActualTipValues;