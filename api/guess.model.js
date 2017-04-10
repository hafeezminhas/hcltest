/**
 * Created by Hafeez Rehman on 10/04/2017.
 */

var Guess = function(){
    this.range = { lower: null, upper: null };
    this.secret = null;
};

Guess.prototype.getRange = function(){
    return this.range;
};

Guess.prototype.getSecret = function(){
    return this.secret;
};

Guess.prototype.init = function(params){
    this.range.lower = randomInt(params.lower, params.upper);
    this.range.upper = this.range.lower + 10;
    this.secret = randomInt(params.lower, params.upper);

    // console.log(this.range);
    // console.log(this.secret);

    function randomInt(min, max) {
        if(!min) return false;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

Guess.prototype.play = function(num){
    if(num === this.secret)
        return { success: true, message: 'Bravo! You have guessed the number' };
    else {
        return { success: false, message: 'OW! You missed out' };
    }
};

var guessInst = null;

module.exports = new Guess();
