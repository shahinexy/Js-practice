// ================== JS Synchronous behavior ==============
// function hello(){
//     console.log('Line 2 code');
// }
// console.log('Line 1 code');
// hello();
// console.log('Line 3 code');

// ================== JS Asynchronous behavior ==============
console.log('Line 1 code');
setTimeout(function(){
    console.log('Line 2 code');
}, 2000)
console.log('Line 3 code');