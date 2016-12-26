myApp.service('hexafy', function() {
	this.myFunc = function(x) {
		return x.toString(16);
	}
});

myApp.service('myService', function($resource) {
	this.result = {};

	return this.result;
});

myApp.service('DetailService', function($resource) {

	this.result = {
		'name': 'New',
		'detail': true
	};

	return this.result;
});

myApp.service('JsonService', function($resource, $filter) {

	return $resource('scripts/JSONDataSource/cars.json', {}, {
		getData: {
			method: 'GET',
			isArray: false
		}
	});
});

myApp.service('ShowcaseService', function($resource, $filter) {

	return $resource('scripts/JSONDataSource/cars.json', {}, {
		getData: {
			method: 'GET',
			isArray: false
		}
	});
});


myApp.service('OldOrderService', function($resource, $filter) {

	return $resource('scripts/JSONDataSource/orders.json', {}, {
		getData: {
			method: 'GET',
			isArray: false
		}
	});
});

myApp.service('OrderService', function($resource, $filter) {

	return $resource('scripts/JSONDataSource/items.json', {}, {
		getData: {
			method: 'GET',
			isArray: false
		}
	});
});