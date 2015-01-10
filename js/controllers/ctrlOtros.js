ejemploApp.controller('ctrlOtros', ['$scope','$interval','variable','svrPersona',function($scope,$interval,v,svrPersona){
	$scope.title = "POr ajax"

	var listar = function(data) {
		console.log(data)
		$scope.studenList = data
	}

	svrPersona.getAllPersons(listar)
}])
