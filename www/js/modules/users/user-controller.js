function UserController($scope, $stateParams, UsersService) {
	console.log("UserController - userId: " + $stateParams.userId);
	$scope.user = UsersService.GetUser($stateParams.userId);
}

module.exports = ['$scope', '$stateParams', 'UsersService', UserController];