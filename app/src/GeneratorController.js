var app = angular.module('myApp')
app.controller('GeneratorController', function($timeout, $scope, $rootScope, ServerService) {
  var vm = this;
  vm.showMe = false;
  vm.msg = {};
  vm.fileAddedFlag = false;
  vm.msgInfo = '';
  vm.loader = false;

  vm.generateSchedule = function() {
    vm.loader = true;
    var promise = ServerService.generateSchedule();
    promise.then(data => {
      vm.msg = data;
      console.log(vm.msg)
      if(vm.msg.code === 200) {
        $timeout(function() {
          vm.loader = false; 
          angular.element(
            document.querySelector('#fullSchedule')
          ).triggerHandler('click');
        }, 2000);
      }
    });
  }

  vm.addFirstWeek = function() {
    vm.msgInfo = 'Please choose file';
    vm.fileAddedFlag = false;
    var f = document.getElementById('file-4').files[0];
    var r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      vm.fileAddedFlag = true;
      vm.msgInfo = 'You chose file: '+ f.name;
      $scope.$apply();
      //send your binary data via $http or $resource or do anything else with it
    }

    r.readAsBinaryString(f);
  }
  
  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("generator", function() {
    vm.showMe = true;
  })
})