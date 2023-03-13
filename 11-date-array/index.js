const dateArr = ['ff/ff/2023', '10_022023', '10/02---2023', '10-01-1000', '10/01/2020'];

function transformFormateDate(dateStr) {
    let dateArray = dateStr.split('/');
    let flagMMDDYYYYFormat = false;

    if (dateArray.length !== 3) {
        dateArray = dateStr.split('-');
        flagMMDDYYYYFormat = true
    }

    if (dateArray.length !== 3) {
        return null
    }
    return isDateValid(dateArray, flagMMDDYYYYFormat);
}

function isDateValid(dateArray, flagFormat) {
    let [day, month, year] = [];
    let date = '';
    if (flagFormat) {
        [day, month, year] = dateArray.map(dateEl => Number(dateEl));
    } else {
        [month, day, year] = dateArray.map(dateEl => Number(dateEl));
    }
    date = new Date(year, month - 1, day);
    return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day

}

function getDates(arr) {
    const formattedArray = arr
        .filter(transformFormateDate);
    return formattedArray;
}

getDates(dateArr)