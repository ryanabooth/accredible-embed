'use strict';

angular.module('accredibleEmbedApp')
	.factory('certificateService', ['$http', '$route',
		function ($http, $route) {

			var getCertificate = function () {
				var promise = $http({ 
					method: 'GET', timeout: 20000, 
					url: 'https://api.accredible.com/v1/credentials/'+$route.current.params.id
				})
				.then( function (response) {
					return response.data.credential;
				}, function (_) {
					// TODO - ask Accredible what they want to do on errors
					// maybe redirect to the certificate
				});
				return promise;
			};

		// Return the service
		var certificateService = {
			getCertificate: getCertificate
		};
		return certificateService;
	}]);
