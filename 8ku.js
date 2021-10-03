/* 1 Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above will
have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
 */
//
function findNb(m) {
    for ( let n = 0;;n++) {

        if ( m > 0 ) {
            let currCubeVol = Math.pow( n+1, 3);
            m = m - currCubeVol;
        } else if ( m === 0 ) {
            return n;
        } else if ( m < 0 ) {
            return (-1);
        }
    }
}

/* Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
 */
//
var summation = function (num) {
    // Code here
    let res = 0;
    for(let i = 1;i <= num; i++){
        res += i
    }

    return res;
}

/* ATM machines allow 4 or 6 digit PIN codes and
PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 */

function validatePIN(str) {
    if (str.length !== 4 && str.length !== 6) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}
/* Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

String.prototype.toJadenCase = function (s) {
    let words = this.toLowerCase().split(' ');
    return words.map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(" ");
};
/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/

var number=function(array){
    return array.map(function (line, index) {
        return `${(index + 1)}: ${line}`;
    });
}