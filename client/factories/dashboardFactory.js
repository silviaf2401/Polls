myapp.factory('dashboardFactory', ['$http', function($http){
  var poll = [];
  var polls = [];
  function DashboardFactory(){
    var _this = this;
    this.createPoll = function(newPoll, callback){
      $http.post('/newPoll', newPoll).then(function(data_received){
        if(typeof(callback) == 'function'){
          callback(data_received.data);
        }
      });
    };
    this.getPolls = function(callback){
      $http.get('/getPolls').then(function(data_received){
        callback(data_received.data);
      });
    };
    this.getPoll = function(id, callback){
      $http.get('/getPoll/' + id).then(function(data_received){
        callback(data_received.data);
      });
    };
    this.vote1 = function(id, callback){
      $http.get('/vote1/' + id ).then(function(data_received){
        callback(data_received.data);
      });
    };
    this.vote2 = function(id, callback){
      $http.get('/vote2/' + id ).then(function(data_received){
        callback(data_received.data);
      });
    };
    this.vote3 = function(id, callback){
      $http.get('/vote3/' + id ).then(function(data_received){
        callback(data_received.data);
      });
    };
    this.vote4 = function(id, callback){
      $http.get('/vote4/' + id ).then(function(data_received){
        callback(data_received.data);
      });
    };
    this.deletePoll = function(id, callback){
      $http.post('/delete/' + id ).then(function(data_received){
        callback(data_received);
      });
    };
  }
  return new DashboardFactory();
}]);
