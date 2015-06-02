'use strict';

	function AppMain($window, $cordova, $StatusBar, $ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.Keyboard) {
	      $cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if ($window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      $StatusBar.styleLightContent();
	    }
  	  });
  	}

  	return ['$window', '$cordova', '$StatusBar', '$ionicPlatform', AppMain];