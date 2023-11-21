const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);

        return personAge > oldestAge ? person : oldest;
    }); 
};

const getAge = function (birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }

    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
