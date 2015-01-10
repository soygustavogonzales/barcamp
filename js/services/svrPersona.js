ejemploApp.service('svrPersona', ['$http', function($http){
	this.getAllPersons = function(callback){
		$http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&nombre={firstName}&apellido={lastName}").success(function (data) {
        //$scope.users = data
        callback(data)
    })
	}
}])