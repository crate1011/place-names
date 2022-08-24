

const places = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All the places")

places.forEach(place => {
    console.log(place)
});

console.log("'The' Place Names")

places.map((place) => {
    if (place.startsWith("The")) {
        return console.log(place)
    }
})

console.log("My Enemies List!");
console.log("----------------");

const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        Offenses: "Being a jerk to me in elementary school, Not being nice to me in elementary school",
        IsReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        Offenses: "Cut off Luke's hand, Murdered all those kids, Unkind management practices",
        IsReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        Offenses: "Phone calls in the theater, Phone calls on the bus, Phone calls in line at the grocery store, Poor conversationalist",
        IsReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        Offenses: "Keeps giving me a hotplate",
        IsReallyHated: false
    }
]

enemies.forEach(enemy => {
    if (enemy.IsReallyHated) {
        console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
    }
    else {
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
});

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let die1 = 0
let die2 = 0
let place = 0

for (i = 0; i < 10; i++) {
    die1 = getRandomInt(1, 6);
    die2 = getRandomInt(1, 6);
    place += 1

    let message = `${place}) ${die1} + ${die2} == ${die1 + die2}`;
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}

console.log("Do you believe in magic?");
console.log("------------------------");

let EvilBook = []
let GoodBook = []

const spells = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyRequired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    },
]

spells.forEach(spell => {
    if (spell.IsEvil === true) {
        EvilBook.push(spell)
    }
    else {
        GoodBook.push(spell)
    }
});

console.log("Good Book")
GoodBook.forEach(goodbook => {
    console.log(goodbook.Name)
});

console.log("Evil Book")
EvilBook.forEach(evilbook => {
    console.log(evilbook.Name)
});

