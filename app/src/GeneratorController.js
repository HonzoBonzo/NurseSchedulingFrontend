var app = angular.module('myApp')
app.controller('GeneratorController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;
  
  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("generator", function() {
    vm.showMe = true;
  })
})