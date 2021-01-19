const getTotalHours = (employees) => {
    let totalHours = 0;
    employees.forEach(employee => totalHours += parseFloat(employee.hours));
    console.log(parseFloat(totalHours))
    totalHours = parseFloat(totalHours).toFixed(2)
    return totalHours;
}

module.exports = getTotalHours;