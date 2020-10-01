// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function(){
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "string" && input.length > 0 && isNaN(Number(input))) {
        return "Hello, " + input + "!";
    } else {
        return  "Hello, World!";
    }
}

function isFive(input) {
    if(Number(input) === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    if(typeof input === "boolean") {
        return false;
    } else if(input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input){
    switch(input){
        case "a": case "A": case "e": case "E": case "i": case "I": case "o": case "O": case "u": case "U":
            return true;
    }
    return false;
}

function add(x,y){
    if(isNaN(x) || isNaN(y)){
        return "NaN";
    }else {
        return Number(x) + Number(y);
    }
}
