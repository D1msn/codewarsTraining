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

/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)..*/

function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}

/* This time no story, no theory. The examples below show you how to write function accum:*/

function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
}
/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.:*/

function angle(n) {
    if (n < 3)
        return 0;
    return (n - 2) * 180;
}

///


function minMax(arr){

    let s=arr.sort((a,b)=>a-b)

    return [s[0],s[s.length-1]]; // fix me!

}

/// Write a function which converts the input string to uppercase.

const makeUpperCase = (str) => str.toUpperCase();

/// Write a function which converts the input string to uppercase.

function between(a, b) {
    let result = [];
    for(let i = a; i <= b; i++){
        result.push(i)
    }
    return result;
}

/// Your function takes two arguments:
//
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const twiceAsOld = (dadYearsOld, sonYearsOld) => sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld - sonYearsOld * 2;

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let dubleYears = sonYearsOld * 2;
    if(dubleYears > dadYearsOld){
        return dubleYears - dadYearsOld;
    }
    return dadYearsOld - dubleYears;
    // your code here
}

/*
Implement a function named generateRange(min, max, step),
 which takes three arguments and generates a range of integers from min to max, with the step.
 The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
 */

function generateRange(min, max, step){
    let result = [];
    for(min; min <= max; (min += step)){
        result.push(min);
    }
    return result;
}

/*
Simple, remove the spaces from the string, then return the resultant string.
 */
function noSpace(x){
    let result = "";

    for(let i = 0; i < x.length; i++){
        if(x[i] != " "){
            result += x[i]
        }
    }

    return result;
}

/*
Complete the solution so that it reverses all of the words within the string passed in.
 */
function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
}
/*
Build a function that returns an array of integers from n to 1 where n>0.
 */
const reverseSeq = n => {
    const result = [];
    for(n; n>0; n--){
        result.push(n)
    }
    return  result;
};
/*
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
 */
function rentalCarCost(d) {
    let result = 0;

    for(let i = 0; i < d; i++){
        result+= 40
    }

    if(d >= 7){
        result -= 50;
    }else if(d >= 3){
        result -= 20
    }

    return result
}/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.ff your total.
 */
function century(year) {
    return Math.ceil(year / 100);
}
