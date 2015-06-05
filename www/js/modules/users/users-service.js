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
    //Used from pull to refresh (prepend new items)
    GetNewUser: function(){
      return $http.get(BASE_URL).then(function(response){
        newItems = response.data.results;
        items = newItems.concat(items);
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
      if (userId < items.length) {
        return items[userId].user;
      }
      else {
        console.log("User not found: " + userId);
      }
    },
    DeleteUser: function(index) {
      items.splice(index, 1);
      return items;
    }    
  };
}

module.exports = ['$http', '$q', UsersService];