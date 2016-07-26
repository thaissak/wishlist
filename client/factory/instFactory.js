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
	



	return factory;
})