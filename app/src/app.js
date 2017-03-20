(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('catsApp', [
    'ngRoute',
    'ngResource'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/test', {
          template: '<user-profile></user-profile>'
        })
        .otherwise({redirectTo: '/test'});
  }]);

})();