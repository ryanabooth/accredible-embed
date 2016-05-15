'use strict';

angular
  .module('accredibleEmbedApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:id', {
        templateUrl: 'src/embed_builder/builder.html',
        controller: 'BuilderCtrl',
        resolve: {
          certificate: ['certificateService', function (certificateService) {
            return certificateService.getCertificate();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
