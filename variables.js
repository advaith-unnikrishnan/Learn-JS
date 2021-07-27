// function greetUser(){
    
//     if(true){
//         const msg = "Welcome to the server";
//         console.log("Inside block scope : "+ msg);
//         msg = "Welcome Advaith";
//         console.log("After changinf=g the value: " + msg);
//     }
    
    
// }
// greetUser();

// TODO: Test template literals
console.log(`Hi Advaith
    Welcome to the server`);

const x = new Number(1);
const name =new String("Advaith");
const state =new Boolean(true);
const languages = [ "Javscript","Python","C"];
const user = {
    name : "Advaith",
    age : 21
}

function test(){
    console.log("Testing");
}

console.log("=========typeof==========");
console.log(typeof x);
console.log(typeof name);
console.log(typeof state);
console.log(typeof languages);
console.log(typeof user);


console.log("========instanceof=========");
console.log(x instanceof Number);
console.log(name instanceof String);
console.log(state instanceof Boolean);
console.log(languages instanceof Array);
console.log(user instanceof Object);

console.log("========Equality Check========");
console.log(0=='');
console.log(0 === '');