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