var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

function UserController(){
  this.createUser = function(req,res){
    var user = User({name: req.body.name});
    user.save(function(err){
      if(err){
        console.log('new user not added');
        res.json(err);
      }
      else {
        res.json(user);
      }
    });
  };
  this.newPoll = function(req,res){
    var poll = Poll({name:req.body.name, question:req.body.question, opt1:req.body.opt1, opt2:req.body.opt2, opt3:req.body.opt3, opt4:req.body.opt4, opt1vote:req.body.opt1vote, opt2vote:req.body.opt2vote, opt3vote:req.body.opt3vote, opt4vote:req.body.opt4vote});
    poll.save(function(err){
      if(err){
        console.log('poll not added');
        res.json(err);
      }
      else {
        res.json(poll);
      }
    });
  };
  this.getPolls = function(req,res){
    Poll.find({}, function(err, polls){
      if(err){
        console.log('error getting polls');
        res.json(err);
      }
      else {
        console.log('polls retrieved');
        res.json(polls);
      }
    });
  };
  this.getPoll = function(req,res){
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error retrieving poll');
        res.json(err);
      }
      else {
        console.log('poll successfully retrieved');
        res.json(poll);
      }
    });
  };
  this.vote1 = function(req,res){
    console.log('made it', req.params.id);
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error');
        res.json(err);
      }
      else {
        poll.opt1vote++;
        poll.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            res.json(poll);
          }
        });
      }
    });
  };
  this.vote2 = function(req,res){
    console.log('made it', req.params.id);
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error');
        res.json(err);
      }
      else {
        poll.opt2vote++;
        poll.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            res.json(poll);
          }
        });
      }
    });
  };
  this.vote3 = function(req,res){
    console.log('made it', req.params.id);
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error');
        res.json(err);
      }
      else {
        poll.opt3vote++;
        poll.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            res.json(poll);
          }
        });
      }
    });
  };
  this.vote4 = function(req,res){
    console.log('made it', req.params.id);
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error');
        res.json(err);
      }
      else {
        poll.opt4vote++;
        poll.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            res.json(poll);
          }
        });
      }
    });
  };
  this.deletePoll = function(req,res){
    console.log('made it', req.params.id);
    Poll.remove({_id:req.params.id}, function(err, poll){
      if(err){
        console.log('error removing poll');
      }
      else {
        console.log('successfully deleted poll');
        res.json(poll);
      }
    });
  };
}

module.exports = new UserController();
