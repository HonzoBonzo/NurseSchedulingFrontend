var app = angular.module('myApp')
app.controller('GeneratorController', function($scope, $rootScope, ServerService) {
  var vm = this;
  vm.showMe = false;
  vm.msg = {};

  vm.generateSchedule = function() {
    var promise = ServerService.generateSchedule();
    promise.then(data => {
      vm.msg = data;
      console.log(vm.msg)
      if(vm.msg.code === 200) {
        $rootScope.$emit('storeActualData', {})
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