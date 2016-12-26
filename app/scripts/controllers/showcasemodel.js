'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('ShowcaseModelCtrl', function($scope, ShowcaseService, $stateParams) {

		ShowcaseService.getData(function(result) {
			$scope.models = result.data;
		});

		$scope.id = $stateParams.id || 0;

		$scope.model = $scope.models.filter(function(ord) {
			return ord.id == $scope.id;
		})[0];

	});