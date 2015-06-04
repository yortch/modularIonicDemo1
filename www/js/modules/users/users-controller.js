'use strict';

function UsersController($scope, $timeout, UsersService) {
  
  $scope.items = [];

  UsersService.GetFeed().then(function(items){
    $scope.items = items;
  });

  //Use by pull to refresh
  $scope.doRefresh = function() {
	  UsersService.GetNewUser().then(function(items){
	    $scope.items = items.concat($scope.items);

	    //Stop the ion-refresher from spinning
	    $scope.$broadcast('scroll.refreshComplete');
	  });
	};

	//Used for infinte scroll
	$scope.loadMore = function() {
		UsersService.GetNewUsers().then(function(items){
			$scope.items = $scope.items.concat(items);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};	
}

module.exports = ['$scope', '$timeout', 'UsersService', UsersController];