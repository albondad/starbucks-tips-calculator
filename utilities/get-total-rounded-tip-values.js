export const getTotalRoundedTipValues = (employees) => {
    let totalRoundedTipValues = 0;
    employees.forEach(employee => totalRoundedTipValues += employee.roundedTipValue);
    return totalRoundedTipValues;
}