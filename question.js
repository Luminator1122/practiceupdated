"use strict";
let resultof = "";
for (let i = 0; i < 10; i++) {
    resultof += `${i} `;
}
console.log(resultof);
console.log("------------------");
var data = ``;
for (let i = 20; i >= 0; i -= 2) {
    data += `${i} `;
}
console.log(data);
console.log("------------------");
var data = ``;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        data += `${i}  `;
    }
    data += `\n`;
}
console.log(data);
console.log("------------------");
