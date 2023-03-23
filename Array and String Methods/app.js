document.write("Array and String methods");
console.log("Array and String methods");

// break and continue
let arr = [1, 3, 4, 5, 7, 2];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 5) {
        break;
    }

}

let ar = [1, 3, 4, 5, 7, 2];
for (let j = 0; j < ar.length; j++) {
    if (ar[j] == 5) {
        continue;
    }
    console.log(ar[j]);
}

// Array Methods
let array = ["Hashir", "Umer", "Huzaifa", "talha", 'owais', "Umer"];
console.log(array.length);
console.log(array.indexOf("talha"));
console.log(array.lastIndexOf("Umer"));
array.pop();
array.push("Bilal");
console.log(array);
array.sort();
console.log(array);

// String mehtods
let string = "The Biggest city of pakistan is karachi";
console.log(string);
console.log(string.replace("pakistan", "World"));
console.log(string.indexOf("Biggest"));
console.log(string.slice(4, 11));
