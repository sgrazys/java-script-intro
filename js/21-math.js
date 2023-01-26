console.clear();

// MATH BIBLIOTEK

console.log('----------');
console.log('Math.floor() - suapvalina i mazesne puse');
console.log(Math.floor(-3.9999999));
console.log(Math.floor(3.9999999));
console.log(Math.floor(3.5));
console.log(Math.floor(3.0000001));

console.log('----------');
console.log('Math.ceil() - suapvalina i didesne puse');
console.log(Math.ceil(3.9999999));
console.log(Math.ceil(3.5));
console.log(Math.ceil(3.0000001));


console.log('----------');
console.log('Math.round() - tenkina matematine 0.5 tasykle');
console.log(Math.round(3.9999999));
console.log(Math.round(3.5));
console.log(Math.round(3.0000001));

console.log('----------');
console.log('Math.round() - tenkina matematine 0.5 tasykle');
console.log(Math.round(3.9999999));
console.log(Math.round(3.49999999));
console.log(Math.round(3.5));
console.log(Math.round(3.0000001));

console.log('----------');
console.log('Math.trunc() - suapvalina iki sveikojo skaiciaus i mazesne puse');
console.log(Math.trunc(-3.9999999));
console.log(Math.trunc(3.9999999));
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.49999));
console.log(Math.trunc(3.0000001));

console.log('----------');
console.log('Math.min() - paiima pati maziausi skaiciu');
console.log(Math.min(-3.9999999, 2, 11, - 4));
console.log(Math.min(3, 21, 9, 1, 0.9));
console.log(Math.min(3.5, 3.4901, 3.49001));
console.log(Math.min(0, - 10, -100, - 110));
console.log(Math.min(3, 9));
console.log(Math.min(9, 3));

console.log('----------');
console.log('Math.max() - paiima pati didziausi skaiciu');
console.log(Math.max(-3.9999999, 2, 11, - 4));
console.log(Math.max(3, 21, 9, 1, 0.9));
console.log(Math.max(3.5, 3.4901, 3.49001));
console.log(Math.max(0, - 10, -100, - 110));
console.log(Math.max(3, 9));
console.log(Math.max(9, 3));

console.log('----------');
console.log('Math.abs() - pavercia i sveika sakciu, atsikrato minuso');
console.log(Math.abs(-3.9999999));
console.log(Math.abs(3));
console.log(Math.abs(3.5));
console.log(Math.abs(- 110));

console.log('----------');
console.log('Math.random() - generuoja atsitikinti skaiciu nuo 0 iki 1');
console.log(Math.random());


// padaryk random nr nuo [0 iki 100)
let randomNum = (Math.random() * 100);
console.log(Math.ceil(randomNum));
