var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partial/file_name.html',
		controller: 'templateController'
	})

	.otherwise({
		redirecTo: '/'
	})
});