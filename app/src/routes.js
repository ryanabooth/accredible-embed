'use strict';

angular
  .module('accredibleEmbedApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/embed_builder/builder.html',
        controller: 'BuilderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
