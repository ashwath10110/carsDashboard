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
			"name": "lastMonthOrders",
			"sref": "lastMonthOrders",
		}, {
			"name": "neworder",
			"sref": "neworder",
		}];

	});