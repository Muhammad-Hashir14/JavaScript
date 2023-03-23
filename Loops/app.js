document.write("Loops in JavaScript");
console.log("Loops in JavaScript");

var arr = [23, 23, 4, 4, 3, 2, 35, 2, 6, 2, 74, 24, 23];
console.log(arr.length);

// for loops in java script
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for each loop in javascript
arr.forEach(function (element) {
    console.log(element);
})

// while loops in javascript
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// do while loops in javascript
let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);