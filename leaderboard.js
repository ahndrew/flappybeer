var express = require('express');

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

LeaderBoard = function(host, port) {
  this.db= new Db('node-mongo-blog', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


LeaderBoard.prototype.getCollection = function(callback) {
	tis.db.collection('leaderboard',  function(error, leaderboard_collection) {
    if( error ) callback(error);
    else callback(null, leaderboard_collection);)
	});
};

LeaderBoard.prototype.findAll = function(callback) {
    this.getCollection(function(error, leaderboard_collection) {
      if( error ) callback(error)
      else {
        leaderboard_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

 // have to find way to save the highest-score from game

exports.LeaderBoard = LeaderBoard;

