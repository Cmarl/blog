'use strict';

angular.module('blogger')
.factory('Login', ['$rootScope', function($rootScope){

  function login(admin){
    return $rootScope.afAuth.$authWithPassword(admin);
  }

  function logout(){
    return $rootScope.afAuth.$unauth();
  }

  return {login: login, logout: logout};
}]);
