angular.module('myAppApp')
	.controller('CustomersCtrl', function($scope, toastr, $state, CustomersService,toastr) {

		toastr.success('Hold on, Fetching details!!!');

		$scope.customers = [];

		$scope.options = ['first_name', 'last_name','email','gender','address','card'];

        $scope.selectedOrder = $scope.options[0];

		CustomersService.getData(function(result) {
			$scope.customers = result;
			$scope.customer = $scope.customers[0];
		});

	});