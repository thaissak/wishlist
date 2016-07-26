app.factory('usersFactory', function($http){

	var factory = {};
	var users = [];

	factory.addUser = function(data,callbak){
		console.log("adduser factory", data);
		$http.post('/register/user', data).then(function(result){
			console.log("got new user to factory", result.data);
			users.push(result.data);
			callback(users);
		})
	};

	factory.userLogin = function(data, callback){
		console.log('2');
		$http.post('/login_process').then(function(result){
			console.log("got user to login to factory", result.data.password);
			if(result.data.password == 'passed'){
				console.log("password check got to factory ok", result.data.password);
				callback(result.data);
			}
			else{
				console.log("password check got to factory not ok", result.data.password)
				callback({error:'Login and/or Password invalids!'})
			}
		})
	};



	return factory;
});