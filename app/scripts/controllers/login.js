'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('LoginCtrl', function($state,$scope) {

		$scope.go = function() {
			$state.go('home');
		};

	});