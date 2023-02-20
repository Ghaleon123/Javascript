function isEven(a) {
    return a % 2 === 0;
}

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (isEven(i)) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}