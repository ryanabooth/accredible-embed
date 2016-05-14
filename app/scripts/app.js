'use strict';

/**
 * @ngdoc overview
 * @name accredibleEmbedApp
 * @description
 * # accredibleEmbedApp
 *
 * Main module of the application.
 */
angular
  .module('accredibleEmbedApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
