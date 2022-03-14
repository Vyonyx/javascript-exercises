const palindromes = function (inputWord) {
    const word = inputWord.replace(/!|,| |\./g, '').toLowerCase();

    for (w in word) {
        const reverseIndex = word.length - parseInt(w) - 1;
        if (word[parseInt(w)] === word[reverseIndex]) {
            continue
        } else {return false}
    };
    return true
};

// Do not edit below this line
module.exports = palindromes;
