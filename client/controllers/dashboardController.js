myapp.controller('dashboardController', ['userFactory', 'dashboardFactory', '$scope', '$location', '$cookies','$routeParams', function(userFactory,dashboardFactory, $scope, $location, $cookies, $routeParams){
  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user');
    $scope.getPolls = function(){
      dashboardFactory.getPolls(function(data_received){
        $scope.polls = data_received;
      });
    };
    $scope.getPolls();
  }
  else {
    $location.url('/');
  }
  $scope.newPoll = {};
  $scope.createPoll = function(){
    $scope.newPoll.name = $scope.user.name;
    $scope.newPoll.opt1vote = 0;
    $scope.newPoll.opt2vote = 0;
    $scope.newPoll.opt3vote = 0;
    $scope.newPoll.opt4vote = 0;
    dashboardFactory.createPoll($scope.newPoll, function(data_received){
      if(data_received.errors){
        $scope.errors = data_received.errors;
        $scope.newPoll = {};
      }
      else {
        $location.url('/dashboard');
      }
    });
  };
  $scope.delete = function(id){
    dashboardFactory.deletePoll(id, function(data_received){
      if(data_received.errors){
        console.log(data_received.errors);
      }
      else {
        $scope.getPolls();
      }
    });
  };
}]);
