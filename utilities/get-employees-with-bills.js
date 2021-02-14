export const getEmplpyeesWithbills = (employees, bills) => {
    const employeesWithBills = [...employees];
    const leftOverBills = {...bills}

    employeesWithBills.forEach(employee = () => {
        employee.bills = {
            100: 0,
            50: 0,
            25: 0,
            10: 0,
            5: 0,
            1: 0
        }
    })

    employeesWithBills.forEach(employee = () => {
        const roundedTipValue = employee.roundedTipValue;

        while (rounedTipValue > 0) {
            if (roundedTipValue >= 100 && bills[100] > 1) {
                employee.bills[100] += 1;
                roundedTipValue -= 100;
            }
            else if (roundedTipValue >= 50 && bills[50] > 1) {
                employee.bills[50] += 1;
                roundedTipValue -= 50;
            }
            else if (roundedTipValue >= 25 && bills[25] > 1) {
                employee.bills[25] += 1;
                roundedTipValue -= 25;
            }
            else if (roundedTipValue >= 10 && bills[10] > 1) {
                employee.bills[10] += 1;
                roundedTipValue -= 10;
            }
            else if (roundedTipValue >= 5 && bills[5] > 1) {
                employee.bills[5] += 1;
                roundedTipValue -= 5;
            }
            else if (roundedTipValue >= 1 && bills[1] > 1) {
                employee.bills[1] += 1;
                roundedTipValue -= 1;
            }
        }
    });

    return employeesWithBills;
}