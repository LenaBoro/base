const dateArr = ['00/01/2023', '10_022023', '10/02---2023', '10-00-1000', '10/00/2020'];

function checkArraOfdate(arr) {
    const formatData = arr.filter((dataEl) => {
        if ((dataEl.length === 10) &&
            (dataEl[2] === dataEl[5]) &&
            (dataEl[2] === '-' || dataEl[2] === '/')) {
            return dataEl;
        }
    });

    const checkData = formatData.filter((dataEl) => {
        if (dataEl[2] === '-') {
            let dateExmpl1 = new Date(dataEl[2], dataEl[1], dataEl[0]);
            let dateJoin = dataEl.split('-');
            if (dateExmpl1.getFullYear() === dateJoin[2]
                && (dateExmpl1.getMonth() === dateJoin[1])
                && (dateExmpl1.getDate() === dateJoin[0])) {
                return dataEl;
            }
            return dataEl;
        } else if (dataEl[2] == '/') {
            let dateExmpl2 = new Date(dataEl[2], dataEl[0], dataEl[1]);
            let dateJoin = dataEl.split('/')
            if (dateExmpl2.getFullYear() === dateJoin[2]
                && (dateExmpl2.getMonth() === dateJoin[0])
                && (dateExmpl2.getDate() === dateJoin[1])) {
                return dataEl;
            }
            return dataEl;
        }
    }).map(data => data.split(/-|_|\//).join('-'))

    return checkData;
}

checkArraOfdate(dateArr);