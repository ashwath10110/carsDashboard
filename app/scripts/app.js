'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('home', {
    url: '/home',
    views: {
      nav: {
        templateUrl: 'views/navbar.html'
      },
      content: {
        templateUrl: 'views/main.html'
      },
      footer: {
        templateUrl: 'views/footer.html'
      }
    }
  })

  .state('orders', {
      url: '/orders',
      views: {
        nav: {
          templateUrl: 'views/navbar.html'
        },
        content: {
          templateUrl: 'views/orders.html',
          controller: 'OrdersCtrl'
        },
        footer: {
          templateUrl: 'views/footer.html'
        }
      }
    })
    .state('orders.lastMonthOrders', {
      url: '/lastMonthOrders',
      templateUrl: 'views/ordersLastMonth.html',
      controller: 'OrdersLastMonthCtrl'
    })
    .state('orders.customRangeOrders', {
      url: '/customRangeOrders',
      templateUrl: 'views/ordersCustom.html',
      controller: 'OrdersCustomCtrl'
    })
    .state('login', {
      url: '/login',
      views: {
        content: {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('sales', {
      url: '/sales',
      views: {
        nav: {
          templateUrl: 'views/navbar.html'
        },
        content: {
          templateUrl: 'views/sales.html',
          controller: 'SalesCtrl'
        },
        footer: {
          templateUrl: 'views/footer.html'
        }
      }
    })
    .state('analysis', {
      url: '/analysis',
      controller: 'AnalysisCtrl',
      views: {
        nav: {
          templateUrl: 'views/navbar.html'
        },
        content: {
          templateUrl: 'views/analysis.html'
        },
        'columnOne@analysis': {
          template: 'Look I am a column!'
        },
        'columnTwo@analysis': {
          templateUrl: 'views/table-data.html',
          controller: 'scotchController'
        },
        footer: {
          templateUrl: 'views/footer.html'
        }
      }
    })
    .state('about', {
      url: '/about',
      controller: 'AboutCtrl',
      views: {
        nav: {
          templateUrl: 'views/navbar.html'
        },
        content: {
          templateUrl: 'views/about.html'
        },
        footer: {
          templateUrl: 'views/footer.html'
        }
      }
    });

});


myApp.controller('scotchController', function($scope) {

  $scope.message = 'test';

  $scope.scotches = [{
    name: 'Macallan 12',
    price: 50
  }, {
    name: 'Chivas Regal Royal Salute',
    price: 10000
  }, {
    name: 'Glenfiddich 1937',
    price: 20000
  }];

});