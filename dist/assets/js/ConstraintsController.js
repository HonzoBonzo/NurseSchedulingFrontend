var app = angular.module('myApp')
app.controller('ConstraintsController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("constraints", function() {
    vm.showMe = true;
  })
})