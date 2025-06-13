function longestWord(str) {
    let words = str.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(longestWord("JavaScript makes coding fun")); 