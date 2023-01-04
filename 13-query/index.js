const createStrQueryParams = (obj) => {
    let str = ``;
    for (const key in obj) {
        str += `${key}=${obj[key]}&`;
    }

    return str.substring(0, str.length - 1);
}

createStrQueryParams({ search: 'Lena', take: 10 });