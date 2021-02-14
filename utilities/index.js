// enter person information (name and hours)
// enter bill information (provide type and number of bills)
// get total hours
// get total tip value 
// get tip value actual for each person
// get tip value rounded for each person
// get total tip value actual
// get total tip value rounded
// compare total tips value actual to total tips
// compare total tips value rounded to toal tips
// get bills for each person

// const getTotalHours = require('./get-total-hours');
// const getTotalRoudedTipValues = require('./get-total-rounded-tip-values');
// const getEmployeesWithRoundedTipValues = require('./get-employees-with-rounded-tip-values')

// const employees = [
//     {
//         name: 'Michele S Berdichevsky',
//         hours: 18.33
//     },
//     {
//         name: 'Opasan D Bondad',
//         hours: 23.52
//     },
//     {
//         name: 'Eunice V De la Cruz',
//         hours: 20.83
//     },
//     {
//         name: 'Tracy Friendman',
//         hours: 11.65
//     },
//     {
//         name: 'Brianna M Hall',
//         hours: 30.48
//     },
//     {
//         name: 'Skylar N Jaffe',
//         hours: 18.95
//     },
//     {
//         name: 'Jacki W Jolcover',
//         hours: 23.27
//     },
//     {
//         name: 'Phillip Kwon',
//         hours: 15.85
//     },
//     {
//         name: 'Ben P Leff',
//         hours: 22.05
//     },
//     {
//         name: 'Erica Mazeffi',
//         hours: 17.58
//     },
//     {
//         name: 'Nick Mccullagh',
//         hours: 23.55
//     },
//     {
//         name: 'Alice Mockenhapt',
//         hours: 20.23
//     },
//     {
//         name: 'Cindy L Rojas',
//         hours: 25.20
//     },
//     {
//         name: 'Kelly Smith',
//         hours: 15.10
//     },
//     {
//         name: 'Veanna C Smith',
//         hours: 22.35
//     },
//     {
//         name: 'Anastasiaa',
//         hours: 20.98
//     },
//     {
//         name: 'Seth Stein',
//         hours: 22.68
//     },
//     {
//         name: 'Eddy Tranquilino',
//         hours: 24.67
//     },
//     {
//         name: 'Carson Trevino',
//         hours: 22.05
//     },
// ]

// const bills = {
//     1: 0,
//     5: 0,
//     10: 5,
//     20: 0,
//     50: 2,
//     100: 1
// }

// console.log(getTotalHours(employees))
// console.log(getEmployeesWithRoundedTipValues(employees, 2))
// console.log(getTotalRoudedTipValues(getEmployeesWithRoundedTipValues(employees, 2)))

export * from './get-total-hours';
export * from './get-total-tips';
export * from './get-employees-with-actual-tip-values';
export * from './get-employees-with-rounded-tip-values';
export * from './get-total-actual-tip-values';
export * from './get-total-rounded-tip-values';
export * from './get-tip-rate';
export * from './get-employees-with-bills';