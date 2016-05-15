'use strict';

/**
 * @ngdoc function
 * @name accredibleEmbedApp.controller:BuilderCtrl
 * @description
 * # BuilderCtrl
 * Controller of the accredibleEmbedApp
 */
angular.module('accredibleEmbedApp')
  .controller('BuilderCtrl', ['$scope', 'certificate',
  	function ($scope, certificate) {
  		$scope.certificate = certificate;
  }]);
