myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('home', {
    url: '/home',
    views: {
      nav: {
        templateUrl: 'views/navbar.html',
        controller: 'NavCtrl'
      },
      content: {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      },
      footer: {
        templateUrl: 'views/footer.html'
      }
    }
  })

  .state('home.lastweek', {
      url: '/lastweek',
      templateUrl: 'views/graphs.html',
      controller: 'LastWeekCtrl'
    })
    .state('home.lastmonth', {
      url: '/lastmonth',
      templateUrl: 'views/graphs.html',
      controller: 'LastMonthCtrl'
    })
    .state('home.lastquarter', {
      url: '/lastquarter',
      templateUrl: 'views/graphs.html',
      controller: 'LastQuarterCtrl'
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
    .state('orders.lastMonthOrders.order', {
      url: "/order/:id",
      templateUrl: 'views/orderDetail.html',
      controller: 'OrderDetailCtrl'
    })

  .state('orders.neworder', {
    url: '/neworder',
    templateUrl: 'views/neworder.html',
    controller: 'NewOrderCtrl'
  })

  .state('orders.neworder.checkout', {
    url: '/checkout',
    params: {
      obj: null
    },
    templateUrl: 'views/checkout.html',
    controller: 'CheckoutCtrl'
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

  .state('customers', {
    url: '/customers',
    views: {
      nav: {
        templateUrl: 'views/navbar.html'
      },
      content: {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl'
      },
      footer: {
        templateUrl: 'views/footer.html'
      }
    }
  })

  .state('showcase', {
      url: '/showcase',
      views: {
        nav: {
          templateUrl: 'views/navbar.html'
        },
        content: {
          templateUrl: 'views/showcase.html',
          controller: 'ShowcaseCtrl'
        },
        footer: {
          templateUrl: 'views/footer.html'
        }
      }
    })
    .state('showcase.model', {
      url: "/model/:id",
      templateUrl: 'views/showcaseDetail.html',
      controller: 'ShowcaseModelCtrl'
    })

  .state('about', {
    url: '/about',
    controller: 'AboutCtrl',
    views: {
      nav: {
        templateUrl: 'views/navbar.html'
      },
      content: {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      },
      footer: {
        templateUrl: 'views/footer.html'
      }
    }
  });

});