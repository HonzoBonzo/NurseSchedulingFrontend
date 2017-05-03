angular
  .module('myApp', ['ngMaterial'])
  .controller('NavController', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            // $log.debug('toggle ' + navID + ' is done');
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            // $log.debug('toggle ' + navID + ' is done');
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
    var vm = this;
    vm.homeFlag = false;
    vm.fullScheduleFlag = false;
    vm.nurseScheduleFlag = false;
    vm.constraintsFlag = false;
    vm.generatorFlag = true;

    vm.clearFlags = function() {
      vm.homeFlag = false;
      vm.fullScheduleFlag = false;
      vm.nurseScheduleFlag = false;
      vm.constraintsFlag = false;
      vm.generatorFlag = false;
    };

    (function setDefault() {
      vm.clearFlags();
      vm.homeFlag = true;
    }
    )()

    vm.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          // $log.debug('close LEFT is done');
        });
    };

    vm.showHome = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('hide', {})
      $rootScope.$emit('home', {})
      vm.clearFlags();
      vm.homeFlag = true;
    }

    vm.showFullSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('hide', {})
      $rootScope.$emit('fullSchedule', {})
      vm.clearFlags();
      vm.fullScheduleFlag = true;
    }

    vm.showNurseSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('hide', {})
      $rootScope.$emit('nurseSchedule', {})
      vm.clearFlags();
      vm.nurseScheduleFlag = true;
    }

    vm.showCheckConstraints = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('hide', {})
      $rootScope.$emit('constraints', {})
      vm.clearFlags();
      vm.constraintsFlag = true;
    }

    vm.showGenerateSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('hide', {})
      $rootScope.$emit('generator', {})
      vm.clearFlags();
      vm.generatorFlag = true;
    }
  });
