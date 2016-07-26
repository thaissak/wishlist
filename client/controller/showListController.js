app.controller('showListController', ['$scope', 'listFactory', '$routeParams', '$location', function($scope, templateFactory, $routeParams, $location){

	var listID = $routeParams.id;
  console.log('in the showListController woo');

  listFactory.getList(listID, function(data){
    console.log('show list controller', data);
    $scope.list = data.data;
  })


}]);
