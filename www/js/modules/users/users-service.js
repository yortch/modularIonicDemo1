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
        newItems = response.data.results;
        items = items.concat(newItems);
        return newItems;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        newItems = response.data.results;
        console.log("Items length: " + items.length);
        items = items.concat(newItems);
        console.log("Items length after scroll: " + items.length);
        return newItems;
      });
    },
    GetUser: function(userId) {
      for(var i=0;i<items.length;i++){
        if(items[i].user.username == userId){
          console.log("User found: " + items[i].user.username);
          return items[i].user;
        }
      }
      console.log("User not found: " + userId);
    }
  };
}

module.exports = ['$http', '$q', UsersService];