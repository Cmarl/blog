'use strict';

angular.module('blogger')
.factory('Post', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  var fbPosts;
  var afPosts;

  function init(){
    fbPosts = $rootScope.fbRoot.child('/posts');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  function addPost(post){
    return afPosts.$add(post);
  }

  return {init: init, addPost: addPost};
}]);
