console.log('5' -  1);    
// output:- 4
console.log(  5 + '5');
// output:- 55
console.log('5' /  2);
// output:- 52 // output:- 2.5
console.log(  5 * '5');
// output:-55 // output:-25
console.log((5  +'5') * 7);
// output:- 55

console.log(NaN === NaN)

console.log(1<2<3)
console.log(3>2>1)




let arr= [1,2,3,4,5,6,7,8,8,8,8,6,4,3,22,2,22,22,22,22,22,22]

let r = arr.filter((e)=> e<22).map((c) => c*2);
console.log(r);


let tar=22
let re = [];
arr.forEach((ele,index) => {
    
    if(ele === tar){
        re.push(index);
    }
    
});
console.log(re)