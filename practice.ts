// Q No.1.	Write a program that calculates the area of a rectangle.
var r:number=6
var pi:number=3.14
// area of teh rectangle is calculated as to multiply the radius square with pi value
var areaOfRect:number=pi*r*r
var areaRect:number=Math.floor(areaOfRect)
console.log(areaRect)



// Q No.2.	Write a program that takes input and calculates the volume of a cube.
let length:number=5.5
let volumeofCube:number=length*length*length
var Volaggregated:number=Math.floor(volumeofCube)
console.log(Volaggregated)


// Q No.3.	Write a program that checks if a given number is positive, negative, or zero.
let gnumber:number=-2
if (gnumber>0)
 {
        console.log("The given Number", gnumber,  "is a Positive Number") 
 }    
else if (gnumber<0) 
{
    console.log("The given Number", gnumber,  "is a Negative Number") 

}
else 
{
    console.log("The given Number", gnumber,  "is a Zero Number") 
}



// Q No.5.	Write a program that determines if a person is eligible to vote based on their age.

let ageValue:number=18
if (ageValue>=18)
{
        console.log("The Pereson bearing Age ", ageValue, "Years, Hence eligible to cost the Vote") 
}    

else 
{
    console.log("The Pereson bearing Age ", ageValue, "Years, Hence Not eligible to cost the Vote") 
}



// Q No.6.	Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let num2:number=2
let num3:number=3
let num4:number=4
let num5:number=5
let num7:number=7
let num10:number=10
//((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let result:number=((num10 + num5) * num3 - num2) / (num4 % num3)  - num7
console.log(result)
export {};