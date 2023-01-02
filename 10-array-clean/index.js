const arr = [10, 2, 1, 5, 105, 4, 7, 99, 100];

const removeItem = item => item > 5 ? true : false;
function arrayClean(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let removeOrnot = fn(arr[i]);

        if (removeOrnot) {
            arr.splice(arr.indexOf(arr[i]), 1);
            i--;
        }
    }
    return arr;
}

arrayClean(arr, removeItem);
console.log(arr);