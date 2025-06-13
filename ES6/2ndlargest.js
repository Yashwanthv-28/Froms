function getSecondLargest(arr) {
    if (arr.length < 2) return null; 

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest; 
            largest = num; 
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num; 
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; 
}

const numbers = [10, 5, 8, 1, 3, 7, 12, 4];
console.log(getSecondLargest(numbers)); 