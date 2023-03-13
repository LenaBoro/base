const createStrQueryParams = (obj) => {
    let str = ``;

    for (const [key, value] of Object.entries(obj)) {
        str += `${key}=${value}&`;
    }
    return str.slice(0, -1)
}

createStrQueryParams({ search: 'Lena', take: 10 });