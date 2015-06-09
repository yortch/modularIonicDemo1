'use strict';

require('angular');
require('ionic');

require('./modules/playlists/playlists');
require('./modules/login/login');
require('./modules/menu/menu');
require('./modules/users/users');
  
module.exports = angular.module('starter', [
    'ionic',
    'menu',
    'login',
    'playlists',
    'users'
  ])
  .config(require('./router'))
  .run(require('./app-main'))
;
