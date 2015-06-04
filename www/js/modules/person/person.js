'use strict';

module.exports = angular.module('person', [])
	.factory('PersonService', require('./person-service'))
	.controller('PersonController', require('./person-controller'));		
