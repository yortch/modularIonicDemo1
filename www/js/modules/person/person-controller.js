'use strict';

function PersonController($scope, $timeout, PersonService) {
  
  $scope.items = [];

  PersonService.GetFeed().then(function(items){
    $scope.items = items;
  });

  $scope.doRefresh = function() {
	  PersonService.GetNewUser().then(function(items){
	    $scope.items = items.concat($scope.items);

	    //Stop the ion-refresher from spinning
	    $scope.$broadcast('scroll.refreshComplete');
	  });
	};
}

module.exports = ['$scope', '$timeout', 'PersonService', PersonController];