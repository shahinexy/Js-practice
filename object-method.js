// ===================
//    Object Methods
// ===================

// ---object key()---

// const myObject = {
//     userName: 'Shahin Alam',
//     id: 1231,
//     isStudent: true,
// }
// const resultKey = Object.keys(myObject);
// console.log(resultKey);

// ---object vlaue---

// const myObject = {
//     userName: 'Shahin Alam',
//     id: 1231,
//     isStudent: true,
// }
// const resulValue = Object.values(myObject);
// console.log(resulValue);

// ---Intries---

// const myObject = {
//     userName: 'Shahin Alam',
//     id: 1231,
//     isStudent: true,
// }
// const resulEntries = Object.entries(myObject);
// console.log(resulEntries);


// ====================
//   Optional chaining
// ======================

//ES2020

const students = [
    { name: "A", roll: 123, email: "abc@email.com", isPassed: 34 },
    { name: "B", roll: 145, email: "sdf@email.com"},
    { name: "C", roll: 678, email: "uty564@email.com", isPassed: false },
    { name: "D", roll: 2345, email: "rtr564@email.com", isPassed: true },
  ];
  
  
//   const passedStudents = students.filter( student => student.isPassed === true)
//   console.log(passedStudents);

//   console.log(students[1]?.isPassed?.toString())
