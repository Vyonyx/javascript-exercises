const palindromes = function (inputWord) {
    const word = inputWord.toLowerCase().replace(/,!'"/g, '');
    const ln = word.length;

    for (w in word) {
        if (word[w] != word[(w + 1) * -1]) {return false}
    };
    return true
};

// Do not edit below this line
module.exports = palindromes;
