export const getEmployeesWithActualTipValues = (employees, tipRate) => {
    const employeesWithActualTipValues = [];
    
    employees.forEach(employee => {
        const actualTipValue = employee.hours * tipRate;

        employeesWithActualTipValues.push({
            name: employee.name,
            hours: employee.hours,
            actualTipValue: actualTipValue
        })
    });

    return employeesWithActualTipValues;
}