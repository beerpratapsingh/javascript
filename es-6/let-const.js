//Let and const 

var varName = 'Beer';
var varName = 'Ruhi';
console.log(varName);

let letName = 'Biru';
    letName = "Harshi";
console.log(letName);

const constName = "Harsh";
      // constName = "Anni";
console.log(constName);

//Now diff b/w let and var
//Block scope
// var fullName = 'Biru Singh';
// if(fullName){
//   var firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
// console.log('===>', firstName);


var fullName = 'Biru Singh';
if (fullName) {
  let firstName = fullName.split(' ');
  console.log(firstName);
}
// console.log('===>', firstName);


// function getName() {
//   var myName = "John";
//   return myName;
// }
// let myName = getName();
// console.log('==>',getName);
// console.log('mm', myName);