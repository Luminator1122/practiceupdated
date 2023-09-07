"use strict";
var result = (num1, num2) => {
    // let num1:number=10
    // let num2:number=30
    let sum = num1 + num2;
    // let multipl:number=num1*num2
    // console.log(sum)
    // console.log(multipl)
    return sum;
};
//result(10,30)
var newResult = result(10, 30);
console.log(newResult);
var multipl = (num3, num4) => {
    var multiply = num3 * num4;
    return multiply;
};
var finalmultiply = multipl(3, 5);
console.log(finalmultiply);
//Q4 - Write a program that defines a function to calculate the area of a circle.
// The function should take the radius as input and return the calculated area.
// area of circle calculated by the formula A=pi*radius square
var pie = 3.14;
var areaofCircle = (num1) => {
    var circleArea = pie * Math.pow(num1, 2);
    return circleArea;
};
var calculatedArea = areaofCircle(5);
console.log(calculatedArea);
