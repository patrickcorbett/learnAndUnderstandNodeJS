var greetEN = require("./greetEN.js");
var greetES = require("./greetES.js");

// function constructor
function Greeter() {
    this.en = greetEN;
    this.es = greetES;
}

module.exports = new Greeter();