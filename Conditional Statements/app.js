console.log("Conditional Statements in JavaScript");
document.write("Conditional statements in JavaScript");

// if
var  age = 10;
if (age > 18){
    console.log("Age is Greater than 18");
}
else{
    console.log("Age is less than 18");
}

// else if
var marks = 51;
if (marks > 80){
    console.log("A+");
}
else if (marks > 70 && marks < 80){
    console.log("A");
}
else if (marks > 60 && marks < 70){
    console.log("B");
}
else if (marks > 50 && marks < 60){
    console.log("C");
}
else{
    console.log("Fail");
}