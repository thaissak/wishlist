var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider

	.when('/login', {
		templateUrl: 'partial/login.html',
		controller: 'usersController'
	})

	.when('/dashboard/user', {
		templateUrl: 'partial/dashboard.html',
		controller: 'usersController'
	})

	.when('/register/user', {
		templateUrl: 'partial/user_registration.html',
		controller: 'usersController'
	})

	.when('/register/institution', {
		templateUrl: 'partial/inst_registration.html',
		controller: 'instController'
	})

	.otherwise({
		redirecTo: '/'
	})
});