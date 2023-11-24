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