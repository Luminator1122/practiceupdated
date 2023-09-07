"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q No.1.	Write a program that calculates the area of a rectangle.
var r = 6;
var pi = 3.14;
// area of teh rectangle is calculated as to multiply the radius square with pi value
var areaOfRect = pi * r * r;
var areaRect = Math.floor(areaOfRect);
console.log(areaRect);
// Q No.2.	Write a program that takes input and calculates the volume of a cube.
let length = 5.5;
let volumeofCube = length * length * length;
var Volaggregated = Math.floor(volumeofCube);
console.log(Volaggregated);
// Q No.3.	Write a program that checks if a given number is positive, negative, or zero.
let gnumber = -2;
if (gnumber > 0) {
    console.log("The given Number", gnumber, "is a Positive Number");
}
else if (gnumber < 0) {
    console.log("The given Number", gnumber, "is a Negative Number");
}
else {
    console.log("The given Number", gnumber, "is a Zero Number");
}
// Q No.5.	Write a program that determines if a person is eligible to vote based on their age.
let ageValue = 18;
if (ageValue >= 18) {
    console.log("The Pereson bearing Age ", ageValue, "Years, Hence eligible to cost the Vote");
}
else {
    console.log("The Pereson bearing Age ", ageValue, "Years, Hence Not eligible to cost the Vote");
}
// Q No.6.	Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num7 = 7;
let num10 = 10;
//((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let result = ((num10 + num5) * num3 - num2) / (num4 % num3) - num7;
console.log(result);
