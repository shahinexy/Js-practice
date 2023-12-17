// ================== JS Synchronous behavior ==============
// function hello(){
//     console.log('Line 2 code');
// }
// console.log('Line 1 code');
// hello();
// console.log('Line 3 code');

// ================== JS Asynchronous behavior ==============
// console.log('Line 1 code');
// setTimeout(function(){
//     console.log('Line 2 code');
// }, 2000)
// console.log('Line 3 code');


// =========== Callback Function =============
function display(some){
    console.log(some);
}

function myFunction(x, y,){
    const sum = x+y;
    return sum
}
const result = myFunction(5,5);
display(result);


// function display(){
//     console.log(sum);
// }

// function myFunction(x, y, callback){
//     const sum = x+y;
//     return sum
// }
