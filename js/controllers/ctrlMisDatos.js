	//aqui ira mi script
	ejemploApp.controller('ctrlMisDatos', ['$scope', function($scope){
			$scope.title = "My favorite list of Persons "
			$scope.personList = [
				{
					name:"Carlos",
					lastname:"Torres"
				},
				{
					name:"Maria",
					lastname:"Gonzales"
				},
				{
					name:"Carmen",
					lastname:"Yoyo"
				}
			]
	}])
