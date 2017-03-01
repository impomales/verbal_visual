'use strict';

var num = 999;
var sum = 0;

while (num > 0) {
    if ((num % 3) === 0  || (num % 5) === 0) {
        sum += num;
    }
    num--;
}

console.log(sum);