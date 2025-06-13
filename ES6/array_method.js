const numbers = [1, 2, 3, 4, 5];

// Using .find() to get the first number greater than 3
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber);

// Using .filter() to get all numbers greater than 2
const filteredNumbers = numbers.filter(num => num > 2);
console.log(filteredNumbers);

// Using .map() to double each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 

// Using .reduce() to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// Using .includes() to check if the array contains 3
console.log(numbers.includes(3)); 