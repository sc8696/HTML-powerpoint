var routes = {
	init: function(app){
		"use strict";

		app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$routeProvider
				.when('/', {
					redirectTo: 'slide1'
				})
				.when('/slide:number', {
					templateUrl: function($locationProvider){
						return 'slides/slide' + $locationProvider.number + '.html';
					}
				})
				.otherwise({
					redirectTo: 'nope'
				});

				// $locationProvider.html5Mode(true);

		}]);
	}
};