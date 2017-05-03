var app = angular.module('myApp')
app.service('ServerService', function($http) {
  var service = this
  service.getFullScheduleJson = getFullScheduleJson
  service.getNurseById = getNurseById
  service.testService = testService


  function testService() {
    return {success: 'oki :)'};
  }

  function getNurseById(id) {
    return {name: 'Jolka'}
  }
  
  function getFullScheduleJson() {
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