
const crypto = (pass) => {
    const passArr = pass.split('');
    if (pass.length < 6) { return null }
    const middle = Math.floor(passArr.length / 2);
    const firstPart = passArr.slice(0, middle).reverse();
    const secondPart = passArr.slice(middle);
    [secondPart[0], secondPart[secondPart.length - 1]] = [secondPart[secondPart.length - 1], secondPart[0]]
    return [...firstPart, ...secondPart].join('');

}

const check = (cryptoPass, pass) => {
    return crypto(cryptoPass) === pass;
}
crypto('password')
check('ssapdorw', 'password');
