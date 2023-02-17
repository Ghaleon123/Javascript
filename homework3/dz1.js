function cube(a ,b){
    return num1+ num2 ;
}

var a = +prompt ("вввидете число 1"); 
var num1 = Math.pow(a,3);
var b =+prompt ("введите число 2");
var num2 = Math.pow(b ,2);
console.log(`Ответ ${cube(a,b)}`);