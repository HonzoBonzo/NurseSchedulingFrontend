angular.module('Schedule', [])
.controller('ScheduleController', ['$scope', function($scope) {
	var vm = $scope
	vm.fullSchedule = parser()

	vm.nurse = {name : 'Baśka'}

	function parser() {
		var schedule = $.getJSON('filename.txt')
		console.log(schedule)
	}

}])
.directive('scheduleDirective', function() {
	console.log('hello directive')
	return {
		template : '<h1>Pielegniarka: {{nurse.name}}</h1></br>'
	}
})

