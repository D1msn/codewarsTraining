/* The colors used by the printer are recorded in a control string.
For example a "good" control string would be aaabbbbhaijjjm meaning
that the printer used three times color a, four times color b, one
time color h then one time color a...
 */



const printerError = word => {
    const iCharacters = [...word]
        .map(word => word.charCodeAt(0))
        .filter(
            charCode => charCode < 97 || charCode > 109
        );
    return `${iCharacters.length}/${word.length}`;
};

/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.
 */

const stray = nums => nums.reduce((a, b) => a ^ b);

/* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
 */
function reverseWords(str) {
    return str.replace(/[^\s]+/g, v=>v.split('').reverse().join(''))
}

/* Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.
 */
function take(arr, n) {
    return arr.slice(0, n)
}
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.
 */
function removeUrlAnchor(url) {
    const index = url.indexOf("#");

    return index === -1 ? url : url.slice(0, index);
}

/* You get any card as an argument. Your task is to return a suit of this card.
 */
function defineSuit(card) {
    a = card[card.length - 1];
    if(a === "♣"){
        return 'clubs'
    } else if ( a === "♦"){
        return 'diamonds'
    }else if ( a === "♥"){
        return 'hearts'
    }else if ( a === "♠"){
        return 'spades'
    }
}

/* Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
 */
function usdcny(usd) {
    let c = usd*6.75
    return `${c.toFixed(2)} Chinese Yuan`
}

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either. */
function check(a, x) {
    for(let i = 0; i < a.length; i++){
        if(a[i] === x){
            return true;
        }
    }return false;
}