
const adressLat = 2;
const adressLong = 3;
const positionLat = 1;
const positionLong = 4;
const xy1 = adressLat - positionLat;
const xy2 = adressLong - positionLong;
const res = Math.sqrt((xy1) ** 2 + (xy2) ** 2);
console.log(res);
