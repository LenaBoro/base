const arr = [10, 2, 1, 5, 105, 4, 7, 99, 100];

const removeItem = item => item > 5 ? true : false;
function arrayClean(arr, fn) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        let removeOrnot = fn(arr[i]);
        (removeOrnot) ? answer.push(arr[i]) : false;
    }
    return answer;
}

arrayClean(arr, removeItem);
