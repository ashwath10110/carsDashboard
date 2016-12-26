'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersCustomCtrl
 * @description
 * # OrdersCustomCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('OrdersCustomCtrl', function($scope) {

		$scope.message = 'test';

		// order by options
		$scope.options = ['country', 'address'];

		$scope.selectedOrder = $scope.options[0];

		// all countries
		$scope.details = [{
			id: 1,
			country: 'Finland',
			address: 'Mainstreet 2'
		}, {
			id: 2,
			country: 'Mexico',
			address: 'Some address'
		}, {
			id: 3,
			country: 'Canada',
			address: 'Snowroad 45'
		}];

	});