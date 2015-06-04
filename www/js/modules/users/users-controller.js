'use strict';

function UsersController($scope, $timeout, UsersService) {
  
  $scope.items = [];

  UsersService.GetFeed().then(function(items){
    $scope.items = items;
  });

  $scope.doRefresh = function() {
	  UsersService.GetNewUser().then(function(items){
	    $scope.items = items.concat($scope.items);

	    //Stop the ion-refresher from spinning
	    $scope.$broadcast('scroll.refreshComplete');
	  });
	};
}

module.exports = ['$scope', '$timeout', 'UsersService', UsersController];