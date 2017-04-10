/**
 * Created by Hafeez Rehman on 10/04/2017.
 */

var guessModel = require('./guess.model');
// var mysql = require('mysql');

var GuessController = function(){
    this.name = 'Guest Controller';
};

GuessController.prototype.CreateGuess = function(req, res) {
    guessModel.init(req.body);
    res.json(guessModel.getRange());
};

GuessController.prototype.GuessSecret = function(req, res) {
    res.json(guessModel.play(req.params.num));
};

module.exports = new GuessController();