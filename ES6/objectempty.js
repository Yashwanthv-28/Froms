function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty({})); 
console.log(isObjectEmpty({ name: "Alice" })); 