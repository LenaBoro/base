function convertRub(summ, currency, targetСurrency) {
    const rateUSD = 72;
    const converterRubtoUSD = () => summ / rateUSD;
    const converterUSDtoRub = () => summ * rateUSD;

    switch (`${currency}/${targetСurrency}`) {
        case ('rub/usd'):
            return converterRubtoUSD();
            break;
        case ('usd/rub'):
            return converterUSDtoRub();
            break;
        default:
            return null;
            break;
    }
}
