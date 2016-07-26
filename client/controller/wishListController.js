app.controller('wishListController', ['$scope', 'listFactory', '$routeParams', '$location', function($scope, templateFactory, $routeParams, $location){

	$scope.name = [];

	listFactory.getLists(function(data){
		console.log('this is data to show items within the updateListController controller', data);
		$scope.lists = data;
	})

// add a delete list thingy

}]);
