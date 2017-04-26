/*jshint esversion: 6 */
(function (){
    var app = angular.module('myApp', []);

    app.controller(`MainController`, function($scope) {
        var vm = $scope
        console.log('Welcome to nurse scheduling!')
        vm.i = 1
        vm.firstname = `John ` + vm.i
        vm.lastname = `Doe`
        vm.text = `xd`

        vm.clickMe = clickMe

        function clickMe() {
            vm.text = `ehehehhe`
            vm.firstname += vm.i += 1 
            // vm.$apply()
        }
    })
})();