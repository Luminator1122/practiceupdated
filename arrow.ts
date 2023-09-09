
var result=(num1:number, num2:number):number=>
{
// let num1:number=10
// let num2:number=30
let sum:number=num1+num2
// let multipl:number=num1*num2
// console.log(sum)
// console.log(multipl)
return sum
}
//result(10,30)

var newResult:number=result(10,30)
console.log(newResult)


var multipl=(num3:number, num4:number):number=>
{
    var multiply:number=num3*num4
    return multiply
}
var finalmultiply:number=multipl(3,5)
console.log(finalmultiply)


//Q4 - Write a program that defines a function to calculate the area of a circle.
// The function should take the radius as input and return the calculated area.
// area of circle calculated by the formula A=pi*radius square

var pie:number=3.14
var areaofCircle=(num1:number):number=>{
    var circleArea:number=pie*Math.pow(num1,2)
    return circleArea
}
var calculatedArea:number=areaofCircle(5)
console.log(calculatedArea)
// calculate the surface area of a Cube A=6a2 where a is the oneside length of  teh cube

var AreaOfCube=(num1:number):number=>{
    var  cubeArea:number=6*Math.pow(num1,2)
    return cubeArea
}
var CalculatedAreaofCube:number=AreaOfCube(6)
console.log(CalculatedAreaofCube)

// write a table of 5 using arrow function
var tableNumber=(tableinput:number, multiplier:number)=>
{
while (multiplier<=20 )
    {
    var result:number=tableinput*multiplier
    console.log(result)
    multiplier++
    // return result   
    }
}
tableNumber(5,1)
