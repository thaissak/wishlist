var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider

	.when('/login', {
		templateUrl: 'partial/login.html',
	})

	.when('/dashboard/user', {
		templateUrl: 'partial/user.html',
		controller: 'usersController'
	})

	.when('/dashboard/institution', {
		templateUrl: 'partial/institution.html',
		controller: 'instController'
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