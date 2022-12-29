
const adressLat = 2;
const adressLong = 3;
const positionLat = 1;
const positionLong = 4;

const res = Math.sqrt((adressLong - adressLat) ** 2 + (positionLong - positionLat) ** 2);
console.log(res);
