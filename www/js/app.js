'use strict';

require('angular/angular');
require('ionic/js/ionic.bundle');

require('./modules/starter/starter');
require('./modules/playlists/playlists');
  
module.exports = angular.module('app', [
    'ionic',
    'starter',
    'playlists'
  ])
  .config(require('./router'))
  .run(require('./app-main'))
;
