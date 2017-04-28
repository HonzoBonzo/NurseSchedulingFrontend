var app = angular.module('myApp')
app.controller('HomeController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("home", function() {
    vm.showMe = true;
  })
})