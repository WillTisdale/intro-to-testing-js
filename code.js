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