const getTotalTips = (bills) => {
    return (
        bills[1] * 1 + 
        bills[5] * 5 + 
        bills[10] * 10 + 
        bills[20] * 20 + 
        bills[50] * 50 + 
        bills[100] * 100
    )
}

module.exports = getTotalTips;