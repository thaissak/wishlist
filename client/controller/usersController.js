app.controller('usersController', ['$scope', 'usersFactory', '$routeParams', '$location', '$cookies', function($scope, usersFactory, $routeParams, $location, $cookies){

	$scope.users = [];
	var user_id = $routeParams.id;

	$scope.addUser = function(){
		if($scope.newUser.password == $scope.newUser.confPassword){
			usersFactory.addUser($scope.newUser, function(data){
				$scope.users = data;
				console.log("in adduser controller", data);
				$location.path('/dashboard/user');
			})
		}
		else{
			$scope.error_msg = "Passwords don't match. Please try again!";
		}
	};

	$scope.login_user = function(){
		usersFactory.userLogin($scope.userLogin, function(data){
			console.log('login data', $scope.userLogin);
			if(data.error){
					console.log("error from login - controller", data.error);
					$scope.error = data.error;
					$location.path('/login');
			} else{
				console.log("no error login - controller");
				var user = data;
				$cookies.putObject('user', {id:user._id, name: user.name});
				$scope.user = user;
				console.log("saving user to session", $scope.user);
				$location.path('/dashboard/user');
			}
		})
	};

	$scope.userLogout = function(){
		$cookies.remove('user');
		console.log($cookies.getObject('user'));
		$location.path('/login');
	}
	
	
}]);
