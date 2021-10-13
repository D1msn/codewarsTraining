// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

function updateLight(current) {

    let result = "";

    switch (current) {
        case "green":
            result = "yellow";
            break;
        case "yellow":
            result = "red"
            break;
        case "red":
            result = "green"
            break;
    }
    return result
    //your code here!
}

//Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

function  calculateAge(firstYear,newYear) {
    if(firstYear < newYear){
        if(newYear - firstYear === 1){
            return `You are 1 year old.`
        } return `You are ${newYear - firstYear} years old.`
    }else if (firstYear === newYear){
        return `You were born this very year!`
    }else{
        if(firstYear - newYear === 1){
            return `You will be born in 1 year.`
        }
        return `You will be born in ${firstYear - newYear} years.`
    }
// enter your code here.

}
