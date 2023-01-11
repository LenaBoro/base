
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
        if (i % 2 === 0) {
            formatSrt[i] *= 2;
            if (formatSrt[i] > 9) {
                formatSrt[i] = formatSrt[i].toString().split('');
                formatSrt[i] = Number(formatSrt[i][0]) + Number(formatSrt[i][1]);
            }
        }
        lunaCount += Number(formatSrt[i]);
    }
    if (lunaCount % 10 === 0) { return true } else { return false }

}

lunaLoop(str);

function lunaReduce(str) {
    const regexpLuna = new RegExp('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}');
    if (regexpLuna.test(str) === false) {
        return false;
    }
    const formatSrt = str.replace(/-/g, '').split('');
    let res = formatSrt.reduce((acc, curr, index, arrStr) => {

        if (index % 2 == 0) {
            arrStr[index] = Number(curr) * 2;

            if (Number(arrStr[index]) > 9) {
                arrStr[index] = arrStr[index].toString().split('');
                arrStr[index] = Number(arrStr[index][0]) + Number(arrStr[index][1]);
            }
        }
        acc += Number(arrStr[index]);
        return acc
    }, 0);
    if (res % 10 === 0) { return true } else { return false }
}
