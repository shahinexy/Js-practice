// const array1 = [1,2,3,4]
// const array2 = [5,6,7,8]
// console.log([...array1,...array2]);

// const obj1 = {
//     firstName: 'Shahin',
//     age: 19
// }
// const obj2 = {
//     lastNmae: 'Alam',
//     roll: 1
// }
// const objMarg = {...obj1,...obj2};
// console.log(objMarg);


// const personalInfo = {name: 'John Doe', age: 22}
// const guardianInfo = {father: 'Rahim', address: ''}

// const studentInfo = {...personalInfo, ...guardianInfo}
// console.log(studentInfo)

// =====================================================


// ========== forEach ===========
// cant return into the function 

// const myarray = [23,43,56,12,65,67];
// const result = myarray.forEach((value,index,array) => {
//     console.log(value , index, array);
// })

// ============== map =============
// map can return and console.log 

// const myarray = [23,43,56,12,65,67];
// const result = myarray.map((number,index,array) => {
//     return (number * 2);
// })
// console.log(result);

// =========== flatMap ==========

// const flatarray = [12,23,43,5,56,[34,56,7,76,[11,22,33]], [2,4,1]];
// const flatresult = flatarray.flatMap((value,index,array)=>value);
// console.log(flatresult);

// ============= find ============
// break when match the condision 

// const findNumber = [3,46,87,5,4,98,56]
// const findResult = findNumber.find((number) => number > 46)
// console.log(findResult);

// =============== findIndex =============
// return index number 

// const findNumber = ['mango', 'apple','banana']
// const findResult = findNumber.findIndex((name) => name == 'banana')
// console.log(findResult);


// ============= filter ================
// return multiple element from an array based on condition or test case

// const filterdNumber = [3,46,87,5,4,98,56]
// const filterResult = filterdNumber.filter((number) => number > 46)
// console.log(filterResult);

// =================== reduce =================

// const arrayreduce = [5,5,2]
// const reduceResult = arrayreduce.reduce((total,value,index,array) => total*value);
// console.log(reduceResult);

// =================== reduce Right =================

// const arrayreduceright = [5,5,2]
// const reduceResultright = arrayreduceright.reduce((total,value,index,array) => total*value);
// console.log(reduceResultright);


// ============================ ///////////\\\\\\\\\\\ =====================

// separet all character form a string.
// const myStr = 'Shahin'
// for(let x of myStr){
//     console.log(x);
// }

// task-1
// Create an array of numbers and use the forEach method to square each number and print the result.
// const square = [3,5,2,15,7];
// const squareResult = square.forEach((value,index,array)=>{
//     console.log(value**2) ;
// });

// task-2
//Given an array of strings, use the map method to create a new array where each string is capitalized.
// const str = ['i\'m a web developer'];
// const resultStr = str.map((value,index,array) => value.toUpperCase())
// console.log(resultStr);

// task-3
// Write a function that uses the filter method to filter out even numbers from an array of integers.
// const intArray = [3,5,4,7,8]
// const filtereven = (filter) => {
//     return filter.filter((value) => value % 2 !== 0 );
// }
// console.log(filtereven(intArray));

// task-4
// Write a function that takes an array of objects representing students (with name, age, and grade properties) and returns an array of students who are older than 18 and have a grade higher than 90.
const arrObject = [
    {Name: 'shain', Age: 19, Grade: 93},
    {Name: 'kholil', Age: 17, Grade: 85},
    {Name: 'shifat', Age: 19, Grade: 91}
]
const arrFunction = (student) => {
    return student.filter(value => value.Age >18 && value.Grade > 90);
}
console.log(arrFunction(arrObject));

// task-5
// Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays.
// const arr1 = [2,3,7,5,4]
// const arr2 = [1,3,9,42,4]
// const common = (arr1,arr2) =>{
//     return arr1.filter(value => arr2.includes(value))
// }
// console.log(common(arr1,arr2));