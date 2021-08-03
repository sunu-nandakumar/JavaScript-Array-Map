let dieRollCount = new Map();
dieRollCount.set(1, 0);
dieRollCount.set(2, 0);
dieRollCount.set(3, 0);
dieRollCount.set(4, 0);
dieRollCount.set(5, 0);
dieRollCount.set(6, 0);

while (Array.from(dieRollCount.values()).includes(10) != true) {
    let roll = Math.floor(Math.random() * (6-1) + 1);
    let value = dieRollCount.get(roll);
    dieRollCount.set(roll, value + 1);
}

console.log(dieRollCount);
let minRollValue = Math.min(...dieRollCount.values());

for (let [key, value] of dieRollCount) {
    if (value == 10) {
        console.log("Maximum rolled Die number :" + key);
    }
    if (value == minRollValue) {
        console.log("Minimum rolled Die number :" + key);
    }
}