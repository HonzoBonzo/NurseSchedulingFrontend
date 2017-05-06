var app = angular.module('myApp')
app.controller('FullScheduleController', function($scope, $rootScope, $http, ServerService) {
  var vm = this;
  vm.showMe = false;
  vm.fullScheduleJson = null; 
  vm.DAY_NAMES = [
    'MONDAY', 
    'TUESDAY', 
    'WEDNESDAY', 
    'THURSDAY', 
    'FRIDAY', 
    'SATURDAY', 
    'SUNDAY'
  ];

  vm.getDayName = function(index) {
    return vm.DAY_NAMES[index%7];
  }

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("fullSchedule", function() {
    vm.showMe = true;    
    var promise = ServerService.getFullScheduleJson();
    promise.then(data => {
      vm.fullScheduleJson = data;
      console.log(vm.fullScheduleJson)
    })
  })


})