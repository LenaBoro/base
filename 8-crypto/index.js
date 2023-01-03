function check(cryptoPass, pass) {
    const passArr = cryptoPass.split('');
    const ssLetters = passArr.slice(0, 2);
    passArr.splice(passArr.indexOf(ssLetters[0]), 2);
    passArr.splice(3, 0, ssLetters[0], ssLetters[1]);
    const apLetters = passArr.slice(0, 2).reverse();
    passArr.splice(0, 2, apLetters[0], apLetters[1]);
    const dLetter = passArr.slice(2, 3)[0];
    passArr.splice(passArr.indexOf(dLetter), 1);
    passArr.push(dLetter);
    const wLetter = passArr.slice(-2)[0];
    passArr.splice(passArr.indexOf(wLetter), 1);
    passArr.splice(4, 0, wLetter);
    let res = passArr.join('');
    return res === pass;
}
check('ssapdorw', 'password');

function crypto(pass) {
    if (pass.length < 6) { return null }
    const passArr = pass.split('');
    const ssLetters = passArr.slice(2, 4);
    passArr.splice(passArr.indexOf(ssLetters[0]), passArr.indexOf(ssLetters[1]));
    passArr.unshift(ssLetters[0], ssLetters[1]);
    const aLetter = passArr.slice(3, 4)[0];
    passArr.splice(passArr.indexOf(aLetter), 1);
    passArr.splice(2, 0, aLetter);
    const last = passArr.slice(-1)[0];
    passArr.splice(-1, 1);
    passArr.splice(-3, 0, last);
    const wLetter = passArr.slice(-3)[0];
    passArr.splice(passArr.indexOf(wLetter), 1);
    passArr.push(wLetter);

    return passArr.join('');
};

crypto('password')
