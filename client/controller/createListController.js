app.controller('createListController', ['$scope', 'listFactory', '$routeParams', '$location', function($scope, templateFactory, $routeParams, $location){

	$scope.name = [];

console.log('i got into the updateListController')

//I DONT THINK WE NEED THIS IN UPDATE BUT CAN BE WRONG
listFactory.getLists(function(data){
	console.log('this is data to show items within the updateListController controller', data);
	$scope.lists = data;
})

$scope.createWishlist = function(){
	console.log('createWishlist updateListController', $scope.newWishlist);
	listFactory.addList($scope.newWishlist, function(listArray){
		$scope.items = listArray;
	})

}


}]);
