const palindromes = function (string) {
    string = string.replaceAll(/[^a-zA-Z0-9]/g, ``);
    string = string.toLowerCase();

    let reversed = string.split(``);
    reversed = reversed.reverse();
    reversed = reversed.join(``);

    return string == reversed;
};

// Do not edit below this line
module.exports = palindromes;
