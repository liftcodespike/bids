	var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

		myApp.config(function($routeProvider){

			$routeProvider
			.when('/', {
				templateUrl: 'partials/logreg.html'
			})

			.when('/status', {
				templateUrl: 'partials/status.html'
			})
			.when('/results', {
				templateUrl: 'partials/results.html'
			})
			.when('/bids', {
				templateUrl: 'partials/bids.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})
