
// function with argument

function printName(name, age) {
    console.log(`${name}'s is the best but age is the ${age}`);

}

printName("Ritik ", 14);
// // output :- Ritik 's is the best but age is the 14

printName("", 14);
// // outut:- 's is the best but age is the 14

printName(" ", '');
// // output:-  's is the best but age is the

printName(" ",);
// output :- 's is the best but age is the undefined

// function for averg number 
function averNum(a,b,c){

    d=(a+b+c)/3;
    console.log(d);
}
averNum(10, 10, 10);

// table print karne  ka function 1
function tableNums(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} X ${i} = ${a * i}`);
    }
}
tableNums();

// table print karne  ka function 2

function averNum(a) {
    for (let i=a; i<=a*10; i+=a) {
        console.log(i);
    }
}
averNum(2);




