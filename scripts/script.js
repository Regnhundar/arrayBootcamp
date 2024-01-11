/* 1 */
console.log('Uppgift 1-----------------------');
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
let taskOne = [`Äpple`, `Päron`, `Apelsin`, `Banan`, `Kiwi`];
console.log(taskOne);

/* 2 */
console.log('Uppgift 2-----------------------');
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
let taskTwo = [`String`, 1, [`poop`, `poopy`]];
console.log(taskTwo);

/* 3 */
console.log('Uppgift 3-----------------------');
//Skriv ut hur många objekt arrayen nedanför innehåller. 
let taskThree = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(taskThree.length)

/* 4 */
console.log('Uppgift 4-----------------------');
let taskFour = ['cat', 'hamster', 'parrot', 'funky chihuahua']
/* I arrayen ovan, hämta cat. */
console.log(taskFour[0])

/* 5 */
console.log('Uppgift 5-----------------------');
let taskFive = ['cat', 'hamster', 'parrot', 'funky chihuahua']
/* I arrayen ovan, hämta funky chihuahua. */
console.log(taskFive[3])

/* 6 */
console.log('Uppgift 6-----------------------');
let taskSix = ['cat', 'hamster', 'parrot', 'funky chihuahua']
/* I arrayen ovan, byt ut hamster mot tiger. */
taskSix.splice(1, 1, `tiger`)
console.log(taskSix)

/* 7 */
console.log('Uppgift 7-----------------------');
let taskSevenA = [1, 2, 3];
let taskSevenB = [4, 5, 6];
/* Sätt ihop ovanstående arrayer. */
taskSevenA.push(...taskSevenB) // "..." sprider arrayen så att du får 1, 2, 3, 4, 5, 6 istället för 1, 2, 3, [4, 5, 6]
console.log(taskSevenA)

/* 8 */
console.log('Uppgift 8-----------------------');
let taskEightA = [1, 2, 3, 7, 8, 9];
let taskEightB = [4, 5, 6];
/* Merga in array b på index 3 i array a.. */
taskEightA.splice(3, 0, ...taskEightB)
console.log(taskEightA)

/* 9 */
console.log('Uppgift 9-----------------------');
let taskNine = ['a', 'b', 'c'];
/* Klona ovanstående array. */
let clone = taskNine.slice(0);
console.log(clone);

/* 10 */
console.log('Uppgift 10-----------------------');
let taskTen = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i slutet av arrayen ovan. */
taskTen.push(`banan`);
console.log(taskTen)

/* 11 */
console.log('Uppgift 11-----------------------');
let taskEleven = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i början av arrayen ovan. */
taskEleven.unshift(`banan`);
console.log(taskEleven);

/* 12 */
console.log('Uppgift 12-----------------------');
let taskTwelve = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
taskTwelve.pop();
console.log(taskTwelve);

/* 13 */
console.log('Uppgift 13-----------------------');
let taskThirteen = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort första frukten i arrayen. */
taskThirteen.shift();
console.log(taskThirteen);

/* 14 */
console.log('Uppgift 14-----------------------');
let taskFourteen = ['kiwi', 'apple', 'pear'];
/* Sätt in en frukt i arrayen ovan på index 1. */
taskFourteen.splice(1, 0, `Mango`)
console.log(taskFourteen);

/* 15 */
console.log('Uppgift 15-----------------------');
let taskFifteen = ['kiwi', 'apple', 'pear'];
/* Sätt in tre frukter i arrayen ovan på index 2. */
taskFifteen.splice(2, 0, `Mango`, `Apelsin`);
console.log(taskFifteen);

/* 16 */
console.log('Uppgift 16-----------------------');
let taskSixteen = ['David', 'Christoffer', 'Johan', 'Maja']
/* I arrayen ovan, ta bort Christoffer och Johan. */
taskSixteen.splice(1, 2);
console.log(taskSixteen);

/* 17 */
console.log('Uppgift 17-----------------------');
let taskSeventeen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Spegelvänd arrayen ovan. */
taskSeventeen.reverse();
console.log(taskSeventeen)

/* 18 */
console.log('Uppgift 18-----------------------');
let taskEighteen = 'Supercalifragilisticexpialidocious';
/* Kika om strängen ovan innehåller bokstaven n. */
if (taskEighteen.includes(`n`)) {
    console.log(`Japp`)
}
else {
    console.log(`Nepp`)
}

/* 19 */
console.log('Uppgift 19-----------------------');
// /*'Supercalifragilisticexpialidocious'; */
/* Kika om strängen i uppgift 18 innehåller bokstaven x. */
if (taskEighteen.includes(`x`)) {
    console.log(`Japp`)
}
else {
    console.log(`Nepp`)
}

/* 20 */
console.log('Uppgift 20-----------------------');
// /*'Su[p]ercalifragilisticexpialidocious'; */
/* I strängen på uppgift 18, hitta vilket position första förekomsten av p har. */
console.log(taskEighteen.indexOf(`p`))

/* 21 */
console.log('Uppgift 21-----------------------');
/*'[Super]califragilisticexpialidocious'; */
/* I strängen på uppgift 18, plocka fram de 5 första tecknena. */
console.log(taskEighteen.substring(0, 5))

/* 22 */
console.log('Uppgift 22-----------------------');
/*'Supercalifragilisticexpiali[docious]'; */
/* I strängen på uppgift 18, plocka fram de 7 sista tecknena. */
console.log(taskEighteen.substring(taskEighteen.length - 7))

/* 23 */
console.log('Uppgift 23-----------------------');
let taskTwentyThree = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log(taskTwentyThree.filter(overFive => overFive > 5))

/* 24 */
console.log('Uppgift 24-----------------------');
let taskTwentyFour = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log(taskTwentyFour.filter(underFive => underFive < 5))

//Array innehållandes flera objekt. För uppgift 25, 26, 29-33.
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
/* 25 */
console.log('Uppgift 25-----------------------');
/* Skriv ut alla namn som är 18 år eller över från arrayen ovanför. */
// console.log(...persons.filter(overEighteen => overEighteen.age > 18)) //Ger hela objektet som svar. Måste lägga till en map() funktion för att enbart ta namnen.
console.log(persons.filter(person => person.age > 18).map(person => person.name)) //Rapporterar nu ut enbart namnen.

// /* 26 */
console.log('Uppgift 26-----------------------');
// /* Skriv ut alla namn som är under 18 år från arrayen ovanför. */
console.log(persons.filter(person => person.age < 18).map(person => person.name))

/* 27 */
console.log('Uppgift 27-----------------------');
let taskTwentySeven = ['beta', 'alfa', 'gamma'];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log(taskTwentySeven.sort())

/* 28 */
console.log('Uppgift 28-----------------------');
let taskTwentyEight = [1, 5, 7, 9, 3, 4, 2, 6, 8];
/* Sortera ovanstående array numeriskt. */
console.log(taskTwentyEight.sort())

/* 29 */
console.log('Uppgift 29-----------------------');
/* I person-arrayen ovanför, sortera objekten efter ålder, yngst först. */
let ageComparison = (personA, personB) => personA.age - personB.age;
console.log(...persons.sort(ageComparison))

/* 30 */
console.log('Uppgift 30-----------------------');
/* I person-arrayen ovanför, sortera objekten efter ålder, äldst först. */
console.log(...persons.sort(ageComparison).reverse()) //Återanvänder variabeln ageComparison från uppgift 29.

/* 31 */
console.log('Uppgift 31-----------------------');
/* I person-arrayen ovanför, sortera objekten i bokstavsordning efter deras namn */
let nameComparison = (personA, personB) => personA.name.localeCompare(personB.name)
console.log(...persons.sort(nameComparison))

// /* 32 */
console.log('Uppgift 32-----------------------');
// /* I person-arrayen ovanför, gör om alla namn till versaler. */
let taskThirtyTwo = persons.map(person => person.name.toUpperCase())
console.log(taskThirtyTwo);

/* 33 */
console.log('Uppgift 33-----------------------');
/* I person-arrayen ovanför, spegelvänd alla namn. */
let taskThirtyThree = taskThirtyTwo.reverse();
console.log(taskThirtyThree);

/* 34 */
console.log('Uppgift 34-----------------------');
let taskThirtyFour = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
taskThirtyFour.forEach((element) => console.log(element));

/* 35 */
console.log('Uppgift 35-----------------------');
let taskThirtyFive = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
for (let i of taskThirtyFive) {
    console.log(i);
}

/* 36 */
console.log('Uppgift 36-----------------------');
let taskThirtySix = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
for (let i = 0; i < taskThirtySix.length; i++) {
    console.log(taskThirtySix[i])
}

/* 37 */
console.log('Uppgift 37-----------------------');
let taskThirtySeven = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
for (let i = 0; i < taskThirtySeven.length; i++) {
    console.log(`${i} ${taskThirtySeven[i]}`)
}
