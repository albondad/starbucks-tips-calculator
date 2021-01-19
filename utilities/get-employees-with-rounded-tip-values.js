const getEmployeesWithRoundedTipValues = (employees, tipRate) => {
    const employeesWithRoundedTipValue = [];
    
    employees.forEach(employee => {
        const tipValue = employee.hours * tipRate;
        let roundedTipValue;

        if (tipValue % 1 < 0.95) {
            roundedTipValue = Math.floor(tipValue);
        }
        else {
            roundedTipValue = Math.ceil(tipValue);
        }

        employeesWithRoundedTipValue.push({
            name: employee.name,
            hours: employee.hours,
            roundedTipValue: roundedTipValue
        })
    });

    return employeesWithRoundedTipValue;
}

module.exports = getEmployeesWithRoundedTipValues;