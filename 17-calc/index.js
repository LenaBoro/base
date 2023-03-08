'use strict';

const inputsCalc = document.querySelectorAll('.calc-input');
const buttonsCalc = document.querySelectorAll('.calc-btn');
const result = document.querySelector('#total');

function resetInputs(inputs) {
    inputs.forEach((input) => {
        input.value = null;
    })
}

buttonsCalc.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (inputsCalc[0].value.value === '' || inputsCalc[1].value === '') {
            return false;
        }
        const id = this.getAttribute('id');
        const input1 = Number(inputsCalc[0].value);
        const input2 = Number(inputsCalc[1].value);
        let res = 0;

        switch (id) {
            case ('plus'):
                res = input1 + input2;
                break;
            case ('minus'):
                res = input1 - input2;
                break;
            case ('multy'):
                res = input1 * input2;
                break;
            case ('split'):
                res = input1 / input2;
                break;
        }
        result.innerText = res;
        resetInputs(inputsCalc);
    });
})


