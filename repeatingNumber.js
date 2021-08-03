//Repeating digits 0 to 100 
Array = [];
for (let i = 0; i < 100; i++) {
    let x = i % 10;
    let y = (i - x) / 10;
    if (x == y) {
        console.log(i);
        Array.push(i);
    }
}
console.log(Array);

