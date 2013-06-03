/*global angular, routes, directives, controllers*/

(function(){
	
	"use strict";

	var app = angular.module('presentation',[]);

	routes.init(app);
	controllers.init(app);

}());