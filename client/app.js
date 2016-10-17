var myapp = angular.module('myapp', ['ngRoute', 'ngCookies']);
myapp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/user.html',
    controller: 'userController'
  })
  .when('/poll/:id',{
    templateUrl: 'partials/viewpoll.html',
    controller: 'pollController'
  })

  .when('/newPoll',{
    templateUrl: 'partials/newpoll.html',
    controller: 'dashboardController'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
