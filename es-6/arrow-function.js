var square  = function(n){
  return n * n;
};
console.log(square(7));

// var arrowSquare = (n) => {
//   return n*n;
// };
// console.log(arrowSquare(12));

var arrowSquare = (n) => n * n;
console.log(arrowSquare(11));

let getFirstName = (firstName) => firstName.split(' ')[0];

console.log(getFirstName('Mike Smith'));