'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCustomCtrl
 * @description
 * # OrdersCustomCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('NewOrderCtrl', function($scope, $http, OrderService, $state) {

		$scope.cart = [];

		$scope.products = [];

		OrderService.getData(function(result) {
			$scope.products = result.data;
		});

		$scope.addToCart = function(product) {
			var found = false;
			$scope.cart.forEach(function(item) {
				if (item.id === product.id) {
					item.quantity++;
					found = true;
				}
			});
			if (!found) {
				$scope.cart.push(angular.extend({
					quantity: 1
				}, product));
			}
		};

		$scope.getCartPrice = function() {
			var total = 0;
			$scope.cart.forEach(function(product) {
				total += product.price * product.quantity;
			});
			return total;
		};

		$scope.checkout = function() {

			$scope.obj = {
				a: 1,
				b: 2,
				totalAmount: $scope.getCartPrice
			}

			$state.go('orders.neworder.checkout', {
				obj: $scope.myobj
			});

		};
	});