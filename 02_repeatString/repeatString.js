const repeatString = function(str = 'str', num = 1) {
    let newStr = '';

    if (num < 0) {
        return 'ERROR';
    } 

    while (num) {
        newStr += str;
        num--;
    }
    
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
