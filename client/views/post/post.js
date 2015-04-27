'use strict';

angular.module('blogger')
.controller('PostCtrl',['$scope','$rootScope','$state', 'Post', '$window', function($scope,$rootScope,$state,Post,$window){
  $scope.afPosts = Post.init();

  $scope.shortenText = function(){
    console.log($scope.post.body.slice(0,200) + '...');
  };

  $scope.deletePost =function(post){
    console.log('destruction');
    Post.destroy(post);
  };

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

  $scope.openPost = function(index){
    $rootScope.postInfo = index;
    $state.go('onepost', $rootScope.postInfo);
  };

}]);
