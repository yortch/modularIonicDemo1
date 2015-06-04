'use strict';

module.exports = angular.module('users', [])
	.factory('UsersService', require('./users-service'))
	.controller('UsersController', require('./users-controller'));		
