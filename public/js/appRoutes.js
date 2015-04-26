angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      redirect: '/login'
    })
    .when('/app/login', {
      templateUrl: 'temps/login-setup.html',
      controller: 'LoginSetup',
    })
    .when('/app/status', {
      templateUrl: 'temps/status-setup.html',
      controller: 'StatusSetup',
    })
    .when('/app/hive', {
      templateUrl: 'temps/hive-setup.html',
      controller: 'HiveSetup',
    })
    .when('/app/jobs', {
      templateUrl: 'temps/jobs-setup.html',
      controller: 'JobsSetup',
    })
    .when('/app/settings', {
      templateUrl: 'temps/settings-setup.html',
      controller: 'SettingsSetup',
    })
    .otherwise({
      templateUrl: 'temps/login-setup.html',
      controller: 'LoginSetup',
    });

    $locationProvider.html5Mode(true);

}]);
