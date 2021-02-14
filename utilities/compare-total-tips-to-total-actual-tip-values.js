export const compareTotalTipsToTotalActualTipValues = (totalTips, totalActualTipValues) => {
    const difference = Math.abs(totalTips - totalActualTipValues);

    if (difference <= 0.25) {
        return 'accurate';
    }
    else if (difference <= 1) {
        return 'inaccurate';
    }
    else {
        return 'very inaccurate';
    }
}