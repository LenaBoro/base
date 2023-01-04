const arr = [10, 2, 1, 5, 105, 4, 7, 99, 100];

const removeItem = item => item > 5 ? true : false;

const arrayClean = (arr, fn) => {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        let isRemove = fn(arr[i]);
        if (isRemove) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

arrayClean(arr, removeItem);
