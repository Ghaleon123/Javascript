// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let numbers = [1, 2, 3, 4, 5, 6, 7]
numbers.splice(3,1);
numbers.splice(3,1);
console.log(numbers);