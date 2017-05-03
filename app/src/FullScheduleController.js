var app = angular.module('myApp')
app.controller('FullScheduleController', function($scope, $rootScope, $http, ServerService) {
  var vm = this;
  vm.showMe = false;

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("fullSchedule", function() {
    vm.showMe = true;
    vm.fullScheduleJson = null; 
    
    var promise = ServerService.getFullScheduleJson();
    promise.then(data => {
      vm.fullScheduleJson = data;
      console.log(vm.fullScheduleJson)
    })
  })


})