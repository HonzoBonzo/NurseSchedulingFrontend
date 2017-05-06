var app = angular.module('myApp')
app.service('ServerService', function($http) {
  var service = this
  service.getFullScheduleJson = getFullScheduleJson
  service.getNurses = getNurses
  service.testService = testService
  service.getNurseScheduleJson = getNurseScheduleJson
  service.getConstraintsJson = getConstraintsJson

//TODO add resolves to route-config!!!
  function testService() {
    return {success: 'oki :)'};
  }

  function getConstraintsJson() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/constraints'
    }).then(
      function success(response) {
        return response.data;
      },
      function failed(response) {
        console.log('blad polaczena z serverem, obczaj node czy dziala!');
        return response
      }
    )
  }

  function getNurses() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/nurses'
    }).then(
      function success(response) {
        console.log('pobralem pielegniarki!');
        return response.data;
      }, 
      function failed(response) {
        console.log('blad polaczena z serverem, obczaj node czy dziala!');
        return response
      }
    )
  }
  
  function getFullScheduleJson() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/days'
    }).then(
      function success(response) {
        console.log('pobralem jsona!');
        return response.data;
      }, 
      function failed(response) {
        console.log('blad polaczena z serverem, obczaj node czy dziala!');
        return response
      }
    )
  }
  
  function getNurseScheduleJson() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/results'
    }).then(
      function success(response) {
        console.log('pobralem jsona!');
        return response.data;
      }, 
      function failed(response) {
        console.log('blad polaczena z serverem, obczaj node czy dziala!');
        return response
      }
    )
  }
  
})