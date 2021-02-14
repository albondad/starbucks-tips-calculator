export const compareTotalTipsToTotalRoundedTipValues = (totalTips, totalRoundedTipValues) => {
    if (totalTips >= totalRoundedTipValues) {
        return 'greater than';
    }
    return 'less than';
}