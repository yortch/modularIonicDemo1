'use strict';


module.exports = ['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: "/app",
	    abstract: true,
	    templateUrl: "modules/menu/menu.html",
	    controller: 'StarterController as starterController'
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
	          templateUrl: "modules/playlists/playlist.html",
	          controller: 'PlaylistController as playlistController'
	        }
	      }
	    })

	  .state('app.single', {
	    url: "/playlists/:playlistId",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/playlists/playlist.html",
	        controller: 'PlaylistsController as playlistsController'
	      }
	    }
	  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/playlists');
	}
];