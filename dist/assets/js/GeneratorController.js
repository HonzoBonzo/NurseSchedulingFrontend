var app = angular.module('myApp')
app.controller('GeneratorController', function($timeout, $scope, $rootScope, ServerService) {
  var vm = this;
  vm.showMe = false;
  vm.msg = {};

  vm.generateSchedule = function() {
    var promise = ServerService.generateSchedule();
    promise.then(data => {
      vm.msg = data;
      // console.log(vm.msg)
      if(vm.msg.code === 200) {
        $timeout(function() {
          angular.element(
            document.querySelector('#fullSchedule')
          ).triggerHandler('click');
        }, 0);
      }
    });
  }
  
  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("generator", function() {
    vm.showMe = true;
  })
})