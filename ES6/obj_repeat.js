function removeDuplicates(obj) {
    return Object.keys(obj).reduce((acc, key) => {
        if (!Object.values(acc).includes(obj[key])) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

// Example usage:
const obj = { a: 1, b: 2, c: 2, d: 3, e: 3 };
console.log(removeDuplicates(obj));