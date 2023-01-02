function check(cryptoPass) {
    const passArr = cryptoPass.split('');
    const passLength = passArr.length;
    const firstElement = passArr.slice(0, 1)[0];
    passArr.push(firstElement);
    passArr.splice(0, 1);
    const secondElement = passArr.slice(-2)[0];
    passArr.splice(passArr.indexOf(secondElement), 1);
    passArr.splice(1, 0, secondElement);

    if (cryptoPass.length > 4) {
        const middle = passArr.slice(Math.floor(passLength / 2), passArr.indexOf(Math.floor(passLength / 2) + 1)).reverse();
        passArr.splice(passArr.indexOf(middle[0]), 1, middle[0]);
        passArr.splice(passArr.indexOf(middle[1]) + 1, 1, middle[1]);
    }

    return passArr.join('');
};

function crypto(pass) {
    const passArr = pass.split('');
    const passLength = passArr.length;
    const last = passArr.slice(-1);
    const secondElement = passArr.slice(1, 2);
    const middle = passArr.slice(Math.floor(passLength / 2), Math.floor(passLength / 2) + 2).reverse();
    passArr.unshift(last[0]);
    passArr.splice(-1);
    passArr.splice(passArr.indexOf(middle[0]), 1, middle[1]);
    passArr.splice(passArr.indexOf(middle[1]), 1, middle[0]);
    passArr.splice(passArr.indexOf(secondElement[0]), 1);
    passArr.push(secondElement[0])
    return passArr.join('');
};