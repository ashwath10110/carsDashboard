'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:OrdersLastMonthCtrl
 * @description
 * # OrdersLastMonthCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('OrdersLastMonthCtrl', function($scope, myService, OldOrderService) {

        $scope.options = ['price', 'model','manufacturer'];

        $scope.selectedOrder = $scope.options[0];

        $scope.orders = [];

        OldOrderService.getData(function(result) {
            $scope.orders = result.data;
            myService.orders = $scope.orders;
        });

    });