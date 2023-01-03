
const ExchangeRatesUSDandEUR = {
    USD: 1.07,
    EUR: 0.95,
};
const ExchangeRatesUSDandRUB = {
    USD: 72,
    RUB: 0.014
};

function convertRub(sum, objRate) {
    const objKeysRate = Object.keys(objRate);
    const [currency, targetСurrency] = objKeysRate
    const converterCurrencytoTargetСurrency = () => sum / objRate[currency];
    const converterTargetСurrencytoСurrency = () => sum * objRate[targetСurrency];
    switch (`${currency}/${targetСurrency}`) {
        case (`${currency}/${targetСurrency}`):
            return converterCurrencytoTargetСurrency();
            break;
        case (`${currency}/${targetСurrency}`):
            return converterTargetСurrencytoСurrency();
            break;
        default:
            return null;
            break;
    }

}
