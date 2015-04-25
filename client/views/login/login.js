'use strict';

angular.module('blogger')
.controller('LoginCtrl',['$scope','Login','$state','$rootScope',function($scope,Login,$state,$rootScope){

  $scope.submit = function(admin){
    Login.login(admin).then(function(){
      $state.go('post');
    });
  };

}]);
