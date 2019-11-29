var greeter = require("./greet");

console.log("--- GREET ---");
greeter.en.greet();
greeter.es.greet();


console.log("--- GREETING ---");
console.log("en greet text =" + greeter.en.greetText);
console.log("es greet text =" + greeter.es.greetText);


console.log("--- Speak ---");
console.log(greeter.en.say("anything you would like"));
console.log(greeter.es.say("si lo desea"));


console.log("--- Update GREETING ---");
greeter.en.greetText = "NEW English Greeting";
console.log("en greet text =" + greeter.en.greetText);
greeter.en.greet()

greeter.es.greetText = "Neuvo Espanol Greeting";
console.log("es greet text =" + greeter.es.greetText);
greeter.es.greet()


console.log("--- Create new Greeter ---");
var greeter2 = require("./greet");
greeter2.en.greet();
greeter2.es.greet();
console.log("--- Mist!! require cache returns a refernce to originally created Greeter ---");
