'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('OrderDetailCtrl', function($scope, myService, $stateParams, $filter, DetailService, JsonService) {

		$scope.myService = myService;

		$scope.id = $stateParams.id || 0;

		$scope.orders = myService.orders || [];

		$scope.order = $scope.orders.filter(function(ord) {
			return ord.id == $scope.id;
		})[0];

		$scope.detail = DetailService;

	});