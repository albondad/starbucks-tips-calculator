export const getEmployeesWithActualTipValues = (employees, tipRate) => {
    const employeesWithActualTipValues = [];
    
    employees.forEach(employee => {
        const actualTipValue = employee.hours * tipRate;

        employeesWithActualTipValues.push({
            ...employee,
            actualTipValue: actualTipValue
        })
    });

    return employeesWithActualTipValues;
}