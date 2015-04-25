'use strict';
angular.module('checklist')
.factory('Post',['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){
  var fbPosts;
  var afPosts;
  function init(){
    $rootScope.fbRoot.child('/posts/');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }
  return {init: init};
}]);
