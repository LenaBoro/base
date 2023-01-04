
const ExchangeRates = {
    USD: {
        RUB: 71,
        USD: 1,
        EUR: 0.94,
    },
    EUR: {
        RUB: 77,
        USD: 1.06,
        EUR: 1,
    },
    RUB: {
        RUB: 1,
        USD: 0.014,
        EUR: 0.013,
    }
};

function convert(sum, currency, targetСurrency) {
    const rate = ExchangeRates[currency]?.[targetСurrency];
    if (!rate) { return null }

    const converterCurrencytoTargetСurrency = () => sum / rate;
    const converterTargetСurrencytoСurrency = () => sum * rate;

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
