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

// == normal function ==
// function display(some){
//     console.log(some);
// }

// function myFunction(x, y,){
//     const sum = x+y;
//     return sum
// }
// const result = myFunction(5,5);
// display(result);

// == Callback function ==
// function display(some){
//     console.log(some);
// }

// function myFunction(x, y, callback){
//     const sum = x+y;
//     callback(sum);
// }
// myFunction(5,5, display);


// == destructurung ==

// const obj = {
//     id: 1123,
//     Name: 'Shahin',
//     address: 'narayanganj'
// }
// const {Name} = obj;
// console.log(Name);


// const obj = {
//     id: 1123,
//     Name: 'Shahin',
//     address: 'narayanganj'
// }
// const {Name: userName} = obj;
// console.log(userName);


// const obj = {
//     id: 1123,
//     Name: 'Shahin',
//     address: 'narayanganj',
//     education: {
//         BBAin: 'marketing',
//     }
// }
// const {education: {BBAin}} = obj;
// console.log(BBAin);

// === we can also use default value to avoid fatal error. it will show undefined. ======
// const obj = {
//     id: 1123,
//     Name: 'Shahin',
//     address: 'narayanganj',
//     // education: {
//     //     BBAin: 'marketing',
//     // }
// }
// const {education: {BBAin} = {}} = obj;
// console.log(BBAin);
