'use strict';

function UsersService($http) {
  var BASE_URL = "http://api.randomuser.me/";
  var items = [];

  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUser: function(){
      return $http.get(BASE_URL).then(function(response){
        items = response.data.results;
        return items;
      });
    }
  }
}

module.exports = ['$http', UsersService];