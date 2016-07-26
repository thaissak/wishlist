app.controller('instController', ['$scope', 'instFactory', '$routeParams', '$location', function($scope, instFactory, $routeParams, $location){

	$scope.institutions = [];
	var inst_id = $routeParams.id;

	$scope.addInst = function(){
		if($scope.newInst.password == $scope.newInst.confPassword){
			instFactory.addInst($scope.newInst, function(data){
				$scope.institutions = data;
				console.log("in add institutions controller", data);
				$location.path('/dashboard/inst_id');
			})
		}
		else{
			$scope.error_msg = "Passwords don't match. Please try again";
		}
	}
	
}]);
