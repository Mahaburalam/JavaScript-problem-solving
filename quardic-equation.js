// quardic equation = ax^2+bx+c = 0
// x = ((-b)±√(b^2-4ac)/2a)


let a = 10;
let b = 23;
let c = 8;

// x = x = ((-b)-√(b^2-4ac)/2a)
let result1 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

// x = ((-b)+√(b^2-4ac)/2a)
let result2 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);


console.log(`Output of result1 is : ${result1}`);
console.log(`Output of result2 is : ${result2}`);