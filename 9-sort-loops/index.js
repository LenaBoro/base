const arr = [-1, 40, -5, -100, 3, 15];

function sortArr(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let y = 0; y <= arr.length; y++) {
            if (arr[y] > arr[i]) {
                [arr[i], arr[y]] = [arr[y], arr[i]];
            }
        }
    }
    console.log(arr);
    return arr;
}
sortArr(arr);