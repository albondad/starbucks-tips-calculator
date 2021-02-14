export const getEmplpyeesWithbills = (employees, bills) => {
    console.log('getEmplpyeesWithbills bills', bills);
    const employeesWithBills = [...employees];
    employeesWithBills.sort((currentEmployee, nextEmployee) => {
        if (currentEmployee.roundedTipValue < nextEmployee.roundedTipValue) {
            return 1;
        }
        else if (currentEmployee.roundedTipValue > nextEmployee.roundedTipValue) {
            return -1;
        }
        else {
            return 0;
        }
    })
    console.log('employeesWithBills', employeesWithBills);
    const leftOverBills = {...bills}
    console.log('getEmplpyeesWithbills bills', bills);

    employeesWithBills.forEach(employee => {
        employee.bills = {
            100: 0,
            50: 0,
            20: 0,
            10: 0,
            5: 0,
            1: 0
        }
    })

    employeesWithBills.forEach(employee => {
        let roundedTipValue = employee.roundedTipValue;


        let counter = 0;
        let limit = parseInt(bills['1']) + parseInt(bills['5']) + parseInt(bills['10']) + parseInt(bills['20']) + parseInt(bills['50']) + parseInt(bills['100']);
        while (
            roundedTipValue > 0 &&
            counter < limit
        ) {
            counter ++;
            if (roundedTipValue >= 100 && leftOverBills['100'] > 0) {
                employee.bills['100'] += 1;
                roundedTipValue -= 100;
                leftOverBills['100'] -= 1;
            }
            else if (roundedTipValue >= 50 && leftOverBills['50'] > 0) {
                employee.bills['50'] += 1;
                roundedTipValue -= 50;
                leftOverBills['50'] -= 1;
            }
            else if (roundedTipValue >= 25 && leftOverBills['20'] > 0) {
                employee.bills['20'] += 1;
                roundedTipValue -= 20;
                leftOverBills['20'] -= 1;
            }
            else if (roundedTipValue >= 10 && leftOverBills['10'] > 0) {
                employee.bills['10'] += 1;
                roundedTipValue -= 10;
                leftOverBills['10'] -= 1;
            }
            else if (roundedTipValue >= 5 && leftOverBills['5'] > 0) {
                employee.bills['5'] += 1;
                roundedTipValue -= 5;
                leftOverBills['5'] -= 1;
            }
            else if (roundedTipValue >= 1 && leftOverBills['1'] > 0) {
                employee.bills['1'] += 1;
                roundedTipValue -= 1;
                leftOverBills['1'] -= 1;
            }
        }
    });

    return employeesWithBills;
}