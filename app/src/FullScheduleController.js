var app = angular.module('myApp')
app.controller('FullScheduleController', function($scope, $rootScope, $http) {
  var vm = this;
  vm.showMe = false;

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("fullSchedule", function() {
    vm.showMe = true;
    getJson();
  })

  vm.fullScheduleJson = null;

  function getJson() {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/results'
    }).then(
      function success(response) {
        vm.fullScheduleJson = response;
        console.log('pobralem jsona z bazy danych!', vm.fullScheduleJson);
      }, 
      function failed(response) {
        console.log('blad polaczena z baza danych!');
      }
    )
  }

})