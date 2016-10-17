myapp.factory('userFactory', ['$http', function($http){
  var user = [];
  var users = [];
  function UserFactory(){
    var _this = this;
    this.createUser = function(newUser, callback){
      $http.post('/', newUser).then(function(data_received){
        if(typeof(callback) == 'function'){
          callback(data_received.data);
        }
      });
    };
  }
  return new UserFactory();
}]);
