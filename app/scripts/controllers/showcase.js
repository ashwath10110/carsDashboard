'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('ShowcaseCtrl', function($scope, ShowcaseService) {

		$scope.options = ['price', 'model','manufacturer'];

        $scope.selectedOrder = $scope.options[0];

        $scope.models = [];

        ShowcaseService.getData(function(result) {
            $scope.models = result.data;
        });
	});