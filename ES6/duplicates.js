// Using set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

//Using forEach
const numbers1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers1 = [];
const seen = {};

numbers.forEach(num => {
  if (!seen[num]) {
    seen[num] = true;
    uniqueNumbers.push(num);
  }
});

console.log(uniqueNumbers);

// Using map
const numbers2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers2 = Array.from(new Map(numbers.map(num => [num, num])).values());
console.log(uniqueNumbers);