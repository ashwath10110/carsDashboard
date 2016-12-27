'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCustomCtrl
 * @description
 * # OrdersCustomCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')

.controller('CheckoutCtrl', function($scope, $state, toastr) {

	$scope.totalAmount = 0;

	$scope.onSubmit = function() {
		$scope.processing = true;
	};

	$scope.cancel = function() {
		toastr.info('Cancelled your saved order');
		$state.go('orders');
	};

	$scope.placeOrder = function() {
		toastr.success('Congratulations!!! Your order has been placed.');
		$state.go('home');
	};

});