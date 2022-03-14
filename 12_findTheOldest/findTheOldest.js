// const findTheOldest = function(listOfPeople) {

//     let oldestPerson = '';

//     for (x in listOfPeople) {
//         // If oldest person is empty, replace with current person.
//         if (oldestPerson == '') {
//             oldestPerson = listOfPeople[x];
//         // Replace oldest person with current person IF they are living while the oldest is already dead.
//         } else if (!listOfPeople[x]['yearOfDeath'] && oldestPerson['yearOfDeath']) {
//             oldestPerson = listOfPeople[x];
//         // Replace oldest person with current person IF both are living but current person is oldest.
//         } else if (!listOfPeople[x]['yearOfDeath'] && !oldestPerson['yearOfDeath']) {
//             let oldestPersonAge = new Date().getFullYear - oldestPerson['yearOfBirth'];
//             let currentPersonAge = new Date().getFullYear - listOfPeople[x]['yearOfBirth'];
//             if (currentPersonAge > oldestPersonAge) {
//                 oldestPerson = listOfPeople[x];
//             }
//         // Replace oldest person with current IF both are death and the current is oldest.
//         } else if (!oldestPerson['yearOfDeath'] && listOfPeople[x]['yearOfDeath']) {
//             continue
//         } else {
//             let oldestPersonAge = oldestPerson['yearOfDeath'] - oldestPerson['yearOfBirth'];
//             let currentPersonAge = listOfPeople[x]['yearOfDeath'] - listOfPeople[x]['yearOfBirth']
//             if (currentPersonAge > oldestPersonAge) {
//                 oldestPerson = listOfPeople[x];
//             }
//         }
//     }
//     return oldestPerson
// };

const findTheOldest = function(listOfPeople) {

    let oldestPerson = '';

    for (x in listOfPeople) {
        // If oldest person is empty, replace with current person.
        if (oldestPerson == '') {
            oldestPerson = listOfPeople[x];
        // Replace oldest person with current person IF both are living but current person is oldest.
        } else {
            today = new Date().getFullYear();

            oldestBirth = oldestPerson['yearOfBirth'];
            personBirth = listOfPeople[x]['yearOfBirth'];

            oldestPersonAge = !oldestPerson['yearOfDeath'] ? today - oldestBirth : oldestPerson['yearOfDeath'] - oldestBirth;
            personAge = !listOfPeople[x]['yearOfDeath'] ? today - personBirth : listOfPeople[x]['yearOfDeath'] - personBirth;

            if (personAge > oldestPersonAge) {
                oldestPerson = listOfPeople[x];
                continue
            }
        }
    }
    return oldestPerson
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
