app.factory('instFactory', function($http){

	var factory = {};
	var institutions = [];

	factory.addInst = function(data,callbak){
		console.log("add institution factory", data);
		$http.post('/register/institution', data).then(function(result){
			console.log("got new institution to factory", result.data);
			institutions.push(result.data);
			callback(institutions);
		})
	}

	factory.instLogin = function(data, callback){
		$http.post('/login/institution', data).then(function(result){
			console.log("got institution to login to factory", result.data.password);
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
})