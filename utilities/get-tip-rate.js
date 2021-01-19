const getTipRate = (totalTips, totalHours) => {
    return parseFloat((totalTips/totalHours).toFixed(2))
}

module.exports = getTipRate;