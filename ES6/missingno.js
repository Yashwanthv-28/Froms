function findMissingNumbers(arr) {
    let missing = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) missing.push(i);
    }

    return missing;
}

console.log(findMissingNumbers([1, 2, 4, 6, 7]));