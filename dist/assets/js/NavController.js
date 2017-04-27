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
            $log.debug('toggle ' + navID + ' is done');
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug('toggle ' + navID + ' is done');
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };

    $scope.showHome = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('home', {})
    }

    $scope.showFullSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('fullSchedule', {})
    }

    $scope.showNurseSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('nurseSchedule', {})
    }

    $scope.showCheckConstraints = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('constraints', {})
    }

    $scope.showGenerateSchedule = function () {
      $mdSidenav('left').close()
      $rootScope.$emit('generate', {})
    }
  });
