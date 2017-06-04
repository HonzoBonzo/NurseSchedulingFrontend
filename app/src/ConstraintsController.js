var app = angular.module('myApp')
app.controller('ConstraintsController', function($scope, $rootScope, ServerService, $timeout) {
  var vm = this;
  vm.showMe = false;
  vm.constraintsJson = null;
  vm.loader = false;
  vm.hardDesc = [
    {desc: "Cover needs to be fulfilled (i.e. no shifts must be left unassigned). "},
    {desc: "For each day a nurse may start only one shift. "},
    {desc: "Within a scheduling period a nurse is allowed to exceed the number of hours for which they are available for their department by at most 4 hours. "},
    {desc: "The maximum number of night shifts is 3 per period of 5 consecutive weeks. "},
    {desc: "A nurse must receive at least 2 weekends off duty per 5 week period. A weekend off duty lasts 60 hours including Saturday 00:00 to Monday 04:00. "},
    {desc: "Following a series of at least 2 consecutive night shifts a 42 hours rest is required. "},
    {desc: "During any period of 24 consecutive hours, at least 11 hours of rest is required "},
    {desc: "A night shift has to be followed by at least 14 hours rest. An exception is that once in a period of 21 days for 24 consecutive hours, the resting time may be reduced to 8 hours. "},
    {desc: "The number of consecutive night shifts is at most 3. "},
    {desc: "The number of consecutive shifts (workdays) is at most 6. "}
  ];
  vm.softDesc = [
    {value: 1000, desc: 'For the period of Friday 22:00 to Monday 0:00 a nurse should have either no shifts or at least 2 shifts (‘Complete Weekend’)'},
    {value: 1000, desc: 'For employees with availability of 30-48 hours per week, the length of a series of night shifts should be within the range 2-3. It could be before another series'},
    {value: 10, desc: 'For employees with availability of 30-48 hours per week, within one week the number of shifts is within the range 4- 5.'},
    {value: 10, desc: 'For employees with availability of 30-48 hours per week, the length of a series of shifts should be within the range of 4-6.'},
    {value: 10, desc: 'For all employees the length of a series of late shifts should be within the range of 2-3. It could be within another series.'},
    {value: 5, desc: 'An early shift after a day shift should be avoided'},
  ]
  vm.totalPenalty = 0;

  vm.checkConstraints = function() {
    vm.loader = true;
    ServerService.getConstraintsJson().then(data => {
      // console.log(data)
      $timeout(()=>{
        vm.constraintsJson = data;
        vm.loader = false;
        vm.totalPenalty = checkTotalPenalty();
      }, 500);
    })
  }

  function checkTotalPenalty() {
    return vm.constraintsJson[1].failedSofts
      .reduce((prevVal, curVal, i, arr) => prevVal + curVal * vm.softDesc[i].value, 0);
  }

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })
  
  $rootScope.$on("constraints", function() {
    vm.showMe = true;
  })
})