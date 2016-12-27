'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
	.controller('MainCtrl', function($scope, toastr, $state) {

		$state.go('home.lastweek');

	});

angular.module('myAppApp')
	.controller('LastWeekCtrl', function($scope, AnalysisService, toastr) {

		toastr.success('Last week analysis!!!');

		$scope.salesByModelBar = AnalysisService.salesByModelBar;

		$scope.salesByModelPie = AnalysisService.salesByModelPie;

		$scope.profitsByModelBar = AnalysisService.profitsByModelBar;

	});

angular.module('myAppApp')
	.controller('LastMonthCtrl', function($scope, AnalysisService, toastr) {

		toastr.success('Last Month analysis!!!');

		$scope.salesByModelBar = AnalysisService.salesByModelBar;

		$scope.salesByModelPie = AnalysisService.salesByModelPie;

		$scope.profitsByModelBar = AnalysisService.profitsByModelBar;

	});

angular.module('myAppApp')
	.controller('LastQuarterCtrl', function($scope, AnalysisService, toastr) {

		toastr.success('Last Quarter Analysis!!!');

		$scope.salesByModelBar = AnalysisService.salesByModelBar;

		$scope.salesByModelPie = AnalysisService.salesByModelPie;

		$scope.profitsByModelBar = AnalysisService.profitsByModelBar;

	});


angular.module('myAppApp')
	.controller('NavCtrl', function($scope, toastr, $state) {

	});