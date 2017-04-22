angular.module('Schedule', [])
.controller('ScheduleController', ['$scope', function($scope) {
	console.log('hello controller')
	var vm = $scope
	vm.nurse = {name : 'Baśka'}
}])
.directive('scheduleDirective', function() {
	console.log('hello directive')
	return {
		template : '<h1>Pielegniarka: {{nurse.name}}</h1></br>'
	}
})

