
const str = '8243-3345-5456-6367';

function luna(str) {
    const oddArr = [];
    const formatSrt = str.replace(/-/g, '');

    if (formatSrt < 16) { return false }

    const cardArr = formatSrt.split('');
    const firstStep = cardArr.filter((x, index) => {
        if (index % 2 === 0) { return x; } else {
            oddArr.push(x);
        };
    });
    const secondStep = firstStep.map(x => {
        return Number(x) * 2;
    });

    const thirdStep = secondStep.map((x) => {
        if (x > 9) {
            let numbers = x.toString().split('');
            let res = numbers.reduce((acc, current) => {
                return acc += current;
            }, 0)
            return res;
        } else { return x; }
    })

    const fifthStep = oddArr.map(x => Number(x)).concat(thirdStep);
    const sixtStep = fifthStep.reduce((acc, current) => {
        return acc += current;
    }, 0)

    return (sixtStep % 10 === 0) ? true : false;
}

luna(str);

