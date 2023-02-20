// Сумма
function sum(arr){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Минимальное значение
function min(arr){
    var min= arr[0];
    for (i=0; i<6; ++i){
    if (min>=arr[i]){
        min = arr[i]
    }
    }
    return min;
}

function sevenBoom(arr) {

    if (arr.includes(3)) {
 
       return "Число 3 есть в массиве"
 
    } 
 
   return "Числа 3 нет в массиве"
 
 }

    var arr = [];
    for (var i=0, t=5; i<t; i++) {

        arr.push(Math.round(Math.random() * t))

    }
    console.log(arr);
    console.log(`Сумма ${sum(arr)}`);
    console.log(`минимальное значение ${min(arr)}`);
    console.log(`Ответ ${sevenBoom(arr)}`);