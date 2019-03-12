
/**
 * Javascript let
 */
function letFun() {
  let x = 1;
  if (x === 1) {
    let x = 2;
    document.write('Inner x - ', x + '<br>');
  }
  document.write(x + '<br>');
}
letFun();

var x = 'global';
let y = 'global';
if (x === 'global') {
  let x = 'Inner global';
  document.write('-->', x + '<br>');
}
document.write(this.x + '<br>');
document.write(this.y + '<br>');//Undefined


/**
 * Calculate BMI(Body Mass Index)
 */

 var markMass = 65;//mass in kg
 var markHeight = 1.5;//Height in meter

 var johnMass = 80;//mass in kg
 var johnHeight = 1.82;//Height in meter

 //var BMI = mass / (height*height); //Mass will be in kg and hright will be in meter

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);
document.write('Marks BMI - ' + markBMI + '<br>');
document.write('John BMI - ' + johnBMI);


