let monthName = new Map();
let individualMonth = new Map();

for (i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * (12 - 1) + 1);
    monthName.set(i, month);
}

for (i = 1; i <= 12; i++) {
    let people = new Array();
    for (let [key, value] of monthName) {
        if (value == i)
            people.push(key);
    }
    individualMonth.set(getMonthName(i), people);
}

function getMonthName(input) {
    switch (input) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
    }
}

console.log("People born in January : " + individualMonth.get("January"));
console.log("People born in February : " + individualMonth.get("February"));
console.log("People born in March : " + individualMonth.get("March"));
console.log("People born in April : " + individualMonth.get("April"));
console.log("People born in May : " + individualMonth.get("May"));
console.log("People born in June : " + individualMonth.get("June"));
console.log("People born in July : " + individualMonth.get("July"));
console.log("People born in August : " + individualMonth.get("August"));
console.log("People born in September : " + individualMonth.get("September"));
console.log("People born in October : " + individualMonth.get("October"));
console.log("People born in November : " + individualMonth.get("November"));
console.log("People born in December : " + individualMonth.get("December"));