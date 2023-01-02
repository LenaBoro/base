const dateArr = ['10-01-2023', '10_022023', '10/02---2023', '10-00-1000', '10/00/2020'];

function checkArraOfdate(arr) {
    const formatData = arr.map((dataEl) => dataEl.split(/-|_|\//).join('-'))
        .filter((dataEl) => {
            let dataStr = dataEl.split('-');
            let dateExmpl = new Date(dataStr[2], dataStr[1], dataStr[0]);
            if (dateExmpl.getFullYear() == dataStr[2]
                && dateExmpl.getMonth() == dataStr[1]
                && dateExmpl.getDate() == dataStr[0]) {
                return dataStr;
            }
        })
    console.log(formatData);
    return formatData;
}

checkArraOfdate(dateArr);