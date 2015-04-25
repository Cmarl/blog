'use strict';

angular.module('blogger')
.factory('Post', ['$rootScope','$scope', '$firebaseArray', function($rootScope,$scope, $firebaseArray){

  var fbPosts;
  var afPosts;

  function init(){
    fbPosts = $rootScope.fbRoot.child('posts');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  return {init: init};
}]);
