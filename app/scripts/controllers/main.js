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

		toastr.success('Welcome Sudarshan!!!');

		$state.go('home.lastweek');

		$scope.chartConfig1 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},

			loading: false
		}

		$scope.chartConfig2 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'World'
			},

			loading: false
		}

		$scope.chartConfig3 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Universe'
			},

			loading: false
		}


	});

angular.module('myAppApp')
	.controller('LastWeekCtrl', function($scope, toastr) {

		toastr.success('Last week analysis!!!');

		$scope.chartConfig1 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},

			loading: false
		}

		$scope.chartConfig2 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'World'
			},

			loading: false
		}

		$scope.chartConfig3 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Universe'
			},

			loading: false
		}


	});

angular.module('myAppApp')
	.controller('LastMonthCtrl', function($scope, toastr) {

		toastr.success('Last Month analysis!!!');

		$scope.chartConfig1 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},

			loading: false
		}

		$scope.chartConfig2 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'World'
			},

			loading: false
		}

		$scope.chartConfig3 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Universe'
			},

			loading: false
		}


	});

angular.module('myAppApp')
	.controller('LastQuarterCtrl', function($scope, toastr) {

		toastr.success('Last Quarter Analysis!!!');

		$scope.chartConfig1 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},

			loading: false
		}

		$scope.chartConfig2 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'World'
			},

			loading: false
		}

		$scope.chartConfig3 = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Universe'
			},

			loading: false
		}


	});


angular.module('myAppApp')
	.controller('NavCtrl', function($scope, toastr, $state) {

		

	});