// ======================
//     Ternary Operator
// =======================

// sytex
// condition ? expretion1 (if) : expretion2 (else)

// const number = 30;
// const result = number >= 33 ? 'You are pass' : 'You are failed';
// console.log(result);

const mark = 89;
const result =
  mark <= 33
    ? "You have failed"
    : mark >= 33 && mark <= 49
    ? "You have pass. Result = B"
    : mark >= 50 && mark <= 69
    ? "You have pass. Result = A-"
    : "You have pass. Result = A+"
// console.log(result);


// =======================
//     Nullish Coalescing
// =======================

// it only check Null and Undefined. It use to check the value is null or undefined

const x = {};
const y = 23;
const resultX = x ? x : y;
const resultY = x.length ?? y
console.log(resultX,resultY);
