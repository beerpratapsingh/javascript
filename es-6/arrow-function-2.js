//Arguments object - no longer bound with arrow functions
// let addArg = function(a,b,c){
//   console.log(arguments);
//   return a+b+c;
// };
// console.log(addArg(2,3,5));

// let addArg = (a,b,c) => {
//   console.log(arguments);
//   return a+b+c;
// }
// console.log(addArg(1,2,3));

//this keyword - no longer bound

let userDetails = {
  name: 'Beer Pratap Singh',
  cities: ['Jaunpur', 'Mumbai', 'Delhi'],
  livedCity : function(){
    console.log(this.name);
    console.log(this.cities);

    const that = this;

    this.cities.forEach((cityName) => {
      console.log(this.name +' '+'has lived in' + cityName);
    });
  }
};
userDetails.livedCity();

//task - 

let multiplier = {
  numbers : [1,2,3,4,5],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((ele) =>  ele * this.multiplyBy);
  }
};

console.log(multiplier.multiply());