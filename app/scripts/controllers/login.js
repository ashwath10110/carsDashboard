'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('LoginCtrl', function($state, $scope, toastr) {



		$scope.go = function() {

			if ($scope.password == "admin" && $scope.username == "admin") {

				$state.go('home');

			} else {
				toastr.error('username: admin  password: admin');

			}

		};

	});