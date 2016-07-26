app.controller('instController', ['$scope', 'instFactory', '$routeParams', '$location', '$cookies', function($scope, instFactory, $routeParams, $location, $cookies){

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

	$scope.login_inst = function(){
		instFactory.instLogin($scope.instLogin, function(data){
			console.log('login data', $scope.instLogin);
			if(data.error){
					console.log("error from login - controller", data.error);
					$scope.error = data.error;
					$location.path('/login');
			} else{
				console.log("no error login - controller");
				var institution = data;
				$cookies.putObject('institution', {id:institution._id, name: institution.name});
				$scope.institution = institution;
				console.log("saving institution to session", $scope.institution);
				$location.path('/dashboard/institution');
			}
		})
	};

	$scope.instLogout = function(){
		$cookies.remove('user');
		console.log($cookies.getObject('user'));
		$location.path('/login');
	}
	
}]);
