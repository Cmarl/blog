'use strict';

angular.module('blogger', ['firebase','ui.router'])
.config(['stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html'})
  .state('contact', {url: '/reach-out', templateUrl: '/views/contact/contact.html'});
}])
.run(['$rootScope','$window','firebaseUrl',function($rootScope,$window,firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
}]);
