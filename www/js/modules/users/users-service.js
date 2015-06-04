'use strict';

function UsersService($http, $q) {
  var BASE_URL = "http://api.randomuser.me/";
  var items = [];
  var newItems = [];

  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUser: function(){
      return $http.get(BASE_URL).then(function(response){
        items.concat(response.data.results);
        newItems = response.data.results;
        return newItems;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items.concat(response.data.results);
        newItems = response.data.results;
        return newItems;
      });
    },
    GetUser: function(userId) {
      var dfd = $q.defer();
      console.log("UsersService - userId: " + userId);
      items.forEach(function(item) {
          console.log("For each User: " + item.user.username);
        if (item.user.username === userId) {
          console.log("User found: " + item.user.username);
          dfd.resolve(item.user);
        }
        else {
          dfd.reject();
        }
      });

      return dfd.promise;
    }
  };
}

module.exports = ['$http', '$q', UsersService];