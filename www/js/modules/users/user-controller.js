'use strict';

function UserController($scope, $stateParams, UsersService) {
	$scope.user = UsersService.GetUser($stateParams.userId);
}

module.exports = ['$scope', '$stateParams', 'UsersService', UserController];