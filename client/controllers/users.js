myApp.controller('userController', function($scope, userFactory, $location){

	$scope.currentUser;


	



	
	$scope.addUser = function(){
		userFactory.addUser($scope.newUser)
		$scope.newUser = {}
	}


	$scope.login = function(){
		userFactory.login($scope.loginUser)
	}
	$scope.logout = function(){
		userFactory.logout()
	}





	
})