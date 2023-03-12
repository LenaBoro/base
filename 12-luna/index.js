
const str = '8243-3345-5456-6367';

// function luna(str) {
//     const oddArr = [];
//     const formatSrt = str.replace(/-/g, '');

//     if (formatSrt < 16) { return false }

//     const cardArr = formatSrt.split('');
//     const firstStep = cardArr.filter((x, index) => {
//         if (index % 2 === 0) { return x; } else {
//             oddArr.push(x);
//         };
//     });
//     const secondStep = firstStep.map(x => {
//         return Number(x) * 2;
//     });

//     const thirdStep = secondStep.map((x) => {
//         if (x > 9) {
//             let numbers = x.toString().split('');
//             let res = numbers.reduce((acc, current) => {
//                 return acc += current;
//             }, 0)
//             return res;
//         } else { return x; }
//     })

//     const fifthStep = oddArr.map(x => Number(x)).concat(thirdStep);
//     const sixtStep = fifthStep.reduce((acc, current) => {
//         return acc += current;
//     }, 0)

//     return (sixtStep % 10 === 0) ? true : false;
// }

function lunaLoop(str) {
    const regexpLuna = new RegExp('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}');
    if (regexpLuna.test(str) === false) {
        return false;
    }
    const formatSrt = str.replace(/-/g, '').split('');
    let lunaCount = 0;
    for (let i = 0; i < formatSrt.length; i++) {
        let numberStr = formatSrt[i];

        if (i % 2 === 0) {
            numberStr *= 2;
            if (numberStr > 9) {
                numberStr = numberStr.toString().split('');
                numberStr = Number(numberStr[0]) + Number(numberStr[1]);
            }
        }

        lunaCount += Number(numberStr);
    }
    return !(lunaCount % 10);
}

lunaLoop(str);

function lunaReduce(str) {
    if (str.replace(/-/g, '').length < 16) {
        return false;
    }

    const formatSrt = str.replace(/-/g, '').split('');
    const res = formatSrt.reduce((acc, curr, index) => {
        let numberStr = curr;
        if (index % 2 == 0) {
            numberStr = numberStr * 2;
            if (numberStr > 9) {
                numberStr = numberStr.toString().split('');
                numberStr = Number(numberStr[0]) + Number(numberStr[1]);
            }
        }
        acc += Number(numberStr);
        return acc;
    }, 0);

    return !(res % 10);
}
