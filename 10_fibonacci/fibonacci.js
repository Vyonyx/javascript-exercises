const fibonacci = function(num) {
    
    if (typeof num == 'string') {
        num = parseInt(num);
    }
    if (num < 0) return 'OOPS'

    let fibArray = [1];

    for (i = 1; i < num; i++) {
        if (i < 3) {
            fibArray.push(i);
        } else {
            const numSum = fibArray[i - 1] + fibArray[i - 2]
            fibArray.push(numSum);
        }
    }
    return fibArray[fibArray.length -1];
};

// Do not edit below this line
module.exports = fibonacci;
