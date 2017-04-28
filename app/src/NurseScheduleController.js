var app = angular.module('myApp')
app.controller('NurseScheduleController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;
  vm.nurses = [
    {
      id: 0,
      name: 'Basia'
    },
    {
      id: 1,
      name: 'Stasia'
    },
    {
      id: 2,
      name: 'Kasia'
    },
    {
      id: 3,
      name: 'Ola'
    }
  ];

  vm.chosenNurse;

  vm.changeNurse = changeNurse;

  function changeNurse() {
    console.log(vm.chosenNurse);
  }

  vm.getSelectedText = function() {
    if (vm.chosenNurse !== undefined) {
      return "You have selected: " + vm.chosenNurse.name;
    } else {
      return "Please select a nurse";
    }
  };

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("nurseSchedule", function() {
    vm.showMe = true;
    vm.chosenNurse = undefined;
  })
})