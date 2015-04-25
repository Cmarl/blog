'use strict';
angular.module('blogger')
.controller('NavCtrl',['$scope','$state','$rootScope',function($scope,$state,$rootScope){
  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $state.go('post');
    } else{
      $rootScope.activeUser = null;
      $state.go('home');
    }
  });
  $scope.logout = function(){
    //User.logout();
  };
}]);
