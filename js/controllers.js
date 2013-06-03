var app;

var controllers = {
	init : function(app){

		"use strict";

		app.controller('mainCtrl', function($rootScope, $scope, $routeParams, $location){

			/**
			 * Move to page by an increment/decrement
			 * @param  {int} by [increase page number by this]
			 */
			function move(by){
				var toPage = parseInt($routeParams.number) + by;
				$location.path('/slide' + String(toPage));
				$scope.number = toPage;
			}

			/**
			 * Check the key pressed
			 * @param  {event} e [key event]
			 */
			function checkKey(e){
				e = e || window.event;

				if($routeParams.number !== undefined){
					//Right, down, enter
				   	if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 13) {
				   		move(1);
				   		e.preventDefault();
				        
				    }
				    //Left, up, backspace
					if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 8) {
						move(-1);
						e.preventDefault();
				    }
				}

				$scope.$apply();
			}


			//Entry point
			$scope.number = 1;

			document.onkeydown = checkKey;
			document.onmousedown = function(){
				move(1);
				$scope.$apply();
			};

			// Go to start if there's a route error
		    $rootScope.$on("$routeChangeError", function () {
		    	$location.path('/');
		    	$scope.number = 1;
		    });

		    
		});

	}
};