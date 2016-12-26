'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCustomCtrl
 * @description
 * # OrdersCustomCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')

.controller('CheckoutCtrl', function($scope, $state) {
	
	$scope.totalAmount = 0;

	$scope.onSubmit = function() {
		$scope.processing = true;
	};

	$scope.cancel = function() {
		$state.go('orders');
	};

	$scope.placeOrder = function() {
		$state.go('home');
	};

});