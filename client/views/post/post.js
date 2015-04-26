'use strict';

angular.module('blogger')
.controller('PostCtrl',['$scope','$state', 'Post', '$window', function($scope,$state,Post,$window){
  $scope.afPosts = Post.init();

  $scope.addPost = function(post){

    console.log('click click bitch');
    var p = {
      title: post.title,
      body: post.body,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    console.log(p);
    Post.addPost(p)
    .then(function(data){
      console.log('data: ', data);
      $state.go('home');
    });
  };
}]);
