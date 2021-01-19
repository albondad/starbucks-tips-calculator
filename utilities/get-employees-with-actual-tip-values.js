const getEmployeesWithActualTipValues = (employees, tipRate) => {
    const employeesWithActualTipValues = [];
    
    employees.forEach(employee => {
        const actualTipValue = employee.hours * tipRate;

        employeesWithActualTipValues.push({
            name: employee.name,
            hours: employee.hours,
            actualTipValue: actualTipValue
        })
    });

    
    console.log('test2', typeof employeesWithActualTipValues)

    return employeesWithActualTipValues;
}

module.exports = getEmployeesWithActualTipValues;