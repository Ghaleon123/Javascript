function max(a,b,c){
    if (a < b){
    m = b;
    }
    else if (b < c){
    m = c;
    }
    else if (c < a){
    m = a;
    }
    return m ;
}

var a = +prompt ("ВВедите число 1");
var b = +prompt ("ВВедите число 2");
var c = +prompt ("ВВедите число 3");

console.log(`Ответ ${max(a,b,c)}`);