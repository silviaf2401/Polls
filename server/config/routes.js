var users = require('../controllers/users.js');

module.exports = function(app){
  app.post('/', users.createUser);
  app.post('/newPoll', users.newPoll);
  app.get('/getPolls', users.getPolls);
  app.get('/getPoll/:id', users.getPoll)
  app.get('/vote1/:id', users.vote1)
  app.get('/vote2/:id', users.vote2)
  app.get('/vote3/:id', users.vote3)
  app.get('/vote4/:id', users.vote4)
  app.post('/delete/:id', users.deletePoll)
};
