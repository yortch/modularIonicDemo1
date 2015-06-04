'use strict';

require('angular/angular');
require('ionic/js/ionic.bundle');

//require('./modules/starter/starter');
require('./modules/playlists/playlists');
require('./modules/login/login');
require('./modules/menu/menu');
require('./modules/person/person');
  
module.exports = angular.module('appstart', [
    'ionic',
    'menu',
    'login',
    'playlists',
    'person'
  ])
  .config(require('./router'))
  .run(require('./app-main'))
;
