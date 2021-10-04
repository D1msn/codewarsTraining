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