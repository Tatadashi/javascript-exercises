const sumAll = function(num1 = 1, num2 = 3) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let startNum = num1;
        let endNum = num2;

        if (num1 > num2) {
            startNum = num2;
            endNum = num1;
        }

        if (startNum >= 0) {
            let sum = 0;

            for (let i = startNum; i <= endNum; i++) {
                sum += i;
            }

            return sum;
        }
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
