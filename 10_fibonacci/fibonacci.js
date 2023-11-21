const fibonacci = function(num) {
    if (num < 1) {
        return `OOPS`;
    }

    let currentMember = 1;
    let lastMember = 1;
    
    if (num < 2) {
        return 1;
    }

    for (let i = 2; i < num; i++) {
        let tempNumber = currentMember;
        currentMember += lastMember;
        lastMember = tempNumber;
    }

    return currentMember;
};

// Do not edit below this line
module.exports = fibonacci;
