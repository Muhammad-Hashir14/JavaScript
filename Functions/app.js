console.log("Functions in javascript");
document.write("Functions in javascript");

// function to calculate average
function average(num1,num2){
    var avg = (num1 + num2)/2; 
    return avg;
}
a = average(5,5);
console.log(a);

// calculate area of circle

function area(radius){
    var ar = (3.14)*(radius * radius);
    return ar;
};

var first_crc = area(12);
var second_crc = area(6);
console.log(first_crc);
console.log(second_crc);