var app = angular.module('myApp');

app.controller('MainContentController', function ($scope, $rootScope) {
  vm = $scope
  vm.resetFlags = resetFlags
  vm.setFlag = setFlag
  vm.flags = {
    showHomeFlag: true,
    showFullScheduleFlag: false,
    showNurseScheduleFlag: false,
    showCheckConstraintsFlag: false,
    showGenerateScheduleFlag: false
  }

  function setFlag(name) {
    vm.flags[name] = true;
  }

  function resetFlags() {
    vm.flags = {
      showHomeFlag: false,
      showFullScheduleFlag: false,
      showNurseScheduleFlag: false,
      showCheckConstraintsFlag: false,
      showGenerateScheduleFlag: false
    }
  }

  $rootScope.$on("home", function() {
    resetFlags()
    vm.setFlag('showHomeFlag')
  })
  $rootScope.$on("fullSchedule", function() {
    resetFlags()
    vm.setFlag('showFullScheduleFlag')
  })
  $rootScope.$on("nurseSchedule", function() {
    resetFlags()
    setFlag('showNurseScheduleFlag')
  })
  $rootScope.$on("constraints", function() {
    resetFlags()
    setFlag('showCheckConstraintsFlag')
  })
  $rootScope.$on("generate", function() {
    resetFlags()
    setFlag('showGenerateScheduleFlag')
  })

})