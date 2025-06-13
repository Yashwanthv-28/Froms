function countLetterFrequency(sentence) {
    let frequency = {};

    sentence.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(letter => {
        frequency[letter] = (frequency[letter] || 0) + 1;
    });

    return frequency;
}


const sentence = "Hello world!";
console.log(countLetterFrequency(sentence));