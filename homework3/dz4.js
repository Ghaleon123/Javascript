function sum(a, b){
    return a+b ;
}
function razn(a ,b){
    if (a<=0){
        m = b-a ;
    }
    else if (a<=b){
        m = b-a ;
    }
    return m ;
}
function pr (a, b){
    return a*b;
}
function del(a, b){
    return a/b;
}

var a = +prompt ("Введите число 1");
var b = +prompt ("введите число 2");

console.log(`сумма ${sum(a,b)}`);
console.log(`разность ${razn(a,b)}`);
console.log(`прозведение ${pr(a,b)}`);
console.log(`деление ${del(a,b)}`);