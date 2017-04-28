var app = angular.module('myApp')
app.controller('NurseScheduleController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;
  vm.nurseJson = {"nurseId":0,"name":"Baśka0","days":[{"dayId":0,"signature":"D"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"E"},{"dayId":3,"signature":"E"},{"dayId":4,"signature":"L"},{"dayId":5,"signature":"L"},{"dayId":6,"signature":"L"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"D"},{"dayId":10,"signature":"E"},{"dayId":11,"signature":"E"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"L"},{"dayId":15,"signature":"L"},{"dayId":16,"signature":"N"},{"dayId":17,"signature":"N"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"E"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"E"},{"dayId":24,"signature":"D"},{"dayId":25,"signature":"L"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"E"},{"dayId":29,"signature":"E"},{"dayId":30,"signature":"L"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"E"},{"dayId":33,"signature":"D"},{"dayId":34,"signature":"E"}]}
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

  vm.checkBreak = function(index) {
    if(index % 7 === 0) {
      return true;
    }
    return false;
  }

  vm.getDayName = function(id) {
    switch(id % 7){
      case 0: 
			  return 'Monday'
      case 1: 
        return 'Tuesday'
      case 2: 
        return 'Wednesday'
      case 3: 
        return 'Thursday'
      case 4:
        return 'Friday'
      case 5:
        return 'Saturday'
      case 6:
        return 'Sunday'
    }
  }

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("nurseSchedule", function() {
    vm.showMe = true;
    vm.chosenNurse = undefined;
  })



})