var app = angular.module('myApp')
app.controller('ConstraintsController', function($scope, $rootScope, ServerService) {
  var vm = this;
  vm.showMe = false;
  vm.constraintsJson = null;

  vm.checkConstraints = function() {
    ServerService.getConstraintsJson().then(data => {
      // console.log(data)
      vm.constraintsJson = data;
    })
  }

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("constraints", function() {
    vm.showMe = true;
  })
})