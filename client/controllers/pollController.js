myapp.controller('pollController', ['userFactory', 'dashboardFactory', '$scope', '$location', '$cookies','$routeParams', function(userFactory,dashboardFactory, $scope, $location, $cookies, $routeParams){

  $scope.getPoll = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.getPoll($routeParams.id, function(data_received){
      $scope.poll = data_received;
    });
  };
  $scope.getPoll();

  $scope.vote1 = function(){
    dashboardFactory.vote1($routeParams.id, function(data_received){
      $scope.getPoll();
    });
  };
  $scope.vote2 = function(){
    dashboardFactory.vote2($routeParams.id, function(data_received){
      $scope.getPoll();
    });
  };
  $scope.vote3 = function(){
    dashboardFactory.vote3($routeParams.id, function(data_received){
      $scope.getPoll();
    });
  };
  $scope.vote4 = function(){
    dashboardFactory.vote4($routeParams.id, function(data_received){
      $scope.getPoll();
    });
  };
}]);
