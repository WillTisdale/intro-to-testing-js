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