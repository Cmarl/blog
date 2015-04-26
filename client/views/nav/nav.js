'use strict';
angular.module('blogger')
.controller('NavCtrl',['$scope','$rootScope','Login','$state',function($scope,$rootScope,Login, $state){
  $rootScope.logout = function(){
    Login.logout();
    $rootScope.activeUser = false;
    $state.go('home');
  };
}]);
