'use strict';

module.exports = angular.module('playlists', [])
	.controller('PlaylistsController', require('./playlists-controller'))
	.controller('PlaylistController', require('./playlist-controller'));	