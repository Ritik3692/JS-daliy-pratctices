//  return function 
function sum(a, b, c, d) {
    k = a + b + c + d;
    return k;
}

//  1 to user gavi number tak ka addition

function addNum(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(addNum(5));

// 
let str = ['riti', 'jha', 'kumar', '!'];

function cns(str) {

    let result = "";
    for (let i = 0; i < str.length; i++) {
        result +=str[i];
    }

    return result;
}

console.log(cns(str));