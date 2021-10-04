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