// Basic Addition using + operator
const a = 5, b = 10;
console.log("Basic Addition:", a + b);

// Addition using a function
function add(x, y) { return x + y; }
console.log("Function Addition:", add(7, 3));

// Addition using Arrow Function
const addNumbers = (x, y) => x + y;
console.log("Arrow Function Addition:", addNumbers(4, 6));

// Addition using reduce() for arrays
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduce Method Addition:", sum);

// Adding numbers from a string
const num1 = "10", num2 = "5";
console.log("String Conversion Addition:", Number(num1) + Number(num2));

// Addition in Objects
const obj = { a: 10, b: 20 };
console.log("Object Property Addition:", obj.a + obj.b);