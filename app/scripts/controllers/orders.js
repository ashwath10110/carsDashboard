'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('OrdersCtrl', function($scope) {

		$scope.sideoptions = [{
			"name": "Last Month Orders",
			"sref": "lastMonthOrders",
		}, {
			"name": "New Order",
			"sref": "neworder",
		}];

	});