var app = angular.module('myApp')
app.service('ServerService', function($http) {
  var service = this
  service.getFullScheduleJson = getFullScheduleJson
  service.getNurses = getNurses
  service.testService = testService
  service.getNurseScheduleJson = getNurseScheduleJson
  service.getConstraintsJson = getConstraintsJson
  service.generateSchedule = generateSchedule
  service.sendFirstWeek = sendFirstWeek

  const serverAddress = 'http://localhost:3000'

//TODO add resolves to route-config!!!
  function sendFirstWeek(data) {
    const week = {week: JSON.stringify(data)}
    return $http({
      method: 'POST',
      url: serverAddress + '/firstWeek',
      data: week
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

  function testService() {
    return {success: 'oki :)'};
  }

  function generateSchedule() {
    return $http({
      method: 'GET',
      url: serverAddress + '/runAll'
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

  function getConstraintsJson() {
    return $http({
      method: 'GET',
      url: serverAddress + '/constraints'
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
      url: serverAddress + '/nurses'
    }).then(
      function success(response) {
        // console.log('pobralem pielegniarki!');
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
      url: serverAddress + '/days'
    }).then(
      function success(response) {
        // console.log('pobralem jsona!');
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
      url: serverAddress + '/results'
    }).then(
      function success(response) {
        // console.log('pobralem jsona!');
        return response.data;
      }, 
      function failed(response) {
        console.log('blad polaczena z serverem, obczaj node czy dziala!');
        return response
      }
    )
  }
  
})