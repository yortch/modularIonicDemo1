function UserController($scope, $stateParams, UsersService) {
	console.log("UserController - userId: " + $stateParams.userId);
	UsersService.GetUser($stateParams.userId).then(function(user) {
 		$scope.user = user;	
  	});
}

module.exports = ['$scope', '$stateParams', 'UsersService', UserController];