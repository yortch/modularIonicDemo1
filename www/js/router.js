'use strict';


module.exports = ['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: "/app",
	    abstract: true,
	    templateUrl: "js/modules/menu/menu.html",
		controller: 'LoginController as loginController'
	  })

	  .state('app.search', {
	    url: "/search",
	    views: {
	      'menuContent': {
	        templateUrl: "templates/search.html"
	      }
	    }
	  })

	  .state('app.browse', {
	    url: "/browse",
	    views: {
	      'menuContent': {
	        templateUrl: "templates/browse.html"
	      }
	    }
	  })
	    .state('app.playlists', {
	      url: "/playlists",
	      views: {
	        'menuContent': {
	          templateUrl: "js/modules/playlists/playlists.html",
	          controller: 'PlaylistsController as playlistsController'
	        }
	      }
	    })

	  .state('app.single', {
	    url: "/playlists/:playlistId",
	    views: {
	      'menuContent': {
	        templateUrl: "js/modules/playlists/playlist.html",
	        controller: 'PlaylistController as playlistController'
	      }
	    }
	  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/playlists');
	}
];