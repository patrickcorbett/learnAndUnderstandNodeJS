(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./greet":5}],2:[function(require,module,exports){
var speak = require("./speak.js"); // function
var greetings = require("./greetings.json"); // file to js object

// return object
module.exports = {
    say : speak,
    greetText : greetings.en,
    greet : function(){
        return speak(this.greetText);
    }
};
},{"./greetings.json":4,"./speak.js":6}],3:[function(require,module,exports){
var speak = require("./speak.js"); // function
var greetings = require("./greetings.json"); // file to js object

// return object
module.exports = {
    say : speak,
    greetText : greetings.es,
    greet : function(){
        return speak(this.greetText);
    }
};
},{"./greetings.json":4,"./speak.js":6}],4:[function(require,module,exports){
module.exports={
    "en" : "Hello World!",
    "es" : "Hola Mundo!!"
}
},{}],5:[function(require,module,exports){
var greetEN = require("./greetEN.js");
var greetES = require("./greetES.js");

// function constructor
function Greeter() {
    this.en = greetEN;
    this.es = greetES;
}

module.exports = new Greeter();
},{"./greetEN.js":2,"./greetES.js":3}],6:[function(require,module,exports){
module.exports = function(speakText) {
    console.log(speakText);
};
},{}]},{},[1]);
