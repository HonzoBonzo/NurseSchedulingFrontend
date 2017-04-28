var app = angular.module('myApp')
app.controller('FullScheduleController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("fullSchedule", function() {
    vm.showMe = true;
  })
})