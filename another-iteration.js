// const myObj = {
//     Name: 'Shahin',
//     fFruit: ['Mango', 'Apple', 'Banana'],
//     printfFruit: function(){
//         this.fFruit.forEach(function(e){
//             console.log(`${this.Name} like ${e}`);
//         })
//     }
// }
// myObj.printfFruit();

// ========= if we use this as a another peramiter it will work again =============
// const myObj = {
//     Name: 'Shahin',
//     fFruit: ['Mango', 'Apple', 'Banana'],
//     printfFruit: function(){
//         this.fFruit.forEach(function(e){
//             console.log(`${this.Name} like ${e}`);
//         }, this)
//     }
// }
// myObj.printfFruit();

// ============================================================================

// const myObj = {
//     Name: 'Shahin',
//     fFruit: ['Mango', 'Apple', 'Banana'],
//     printfFruit: function(){
//         this.fFruit.forEach((e) => console.log(`${this.Name} like ${e}`))
//     }
// }
// myObj.printfFruit();