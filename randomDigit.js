let n = new Array(10);
for (let i = 0; i < n.length; i++) {
    n[i] = Math.floor(Math.random() * 999);
}
let sortedArray = n.sort();
console.log(sortedArray);
console.log("2nd largest element: " + sortedArray[(sortedArray.length - 2)]);
console.log("2nd smallest element: " + sortedArray[1]);

