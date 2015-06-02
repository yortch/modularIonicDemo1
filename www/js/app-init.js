(function (window, angular, undefined) {
var angularInit = function() {
	angular.bootstrap(document, ['app']);
	if (window.StatusBar) {
		window.StatusBar.styleDefault();
	}

};


}) (window, window.angular);