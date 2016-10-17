myapp.controller('userController', ['userFactory', '$scope', '$location', '$cookies', function(userFactory, $scope, $location, $cookies){
  if($cookies.getObject('user')){
    $cookies.remove('user')
  }
  $scope.createUser = function(){
    userFactory.createUser($scope.newUser, function(data_received){
      if(data_received.errors){
        $scope.errors = data_received.errors;
      }
      else {
        $cookies.putObject('user', {name: data_received.name, id: data_received._id});
        $location.url('/dashboard');
      }
    });
  };
}]);