'use strict';

angular.module('blogger')
.controller('OneCtrl',['$rootScope', '$scope', 'Post', '$state',function($rootScope, $scope, Post, $state){
  var allPosts = Post.getPost();
  var index = $rootScope.postInfo;

  $scope.post = allPosts[index];
}]);
