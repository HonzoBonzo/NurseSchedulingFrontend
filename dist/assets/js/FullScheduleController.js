var app = angular.module('myApp')
app.controller('FullScheduleController', function($scope, $rootScope) {
  var vm = this;
  vm.showMe = false;
  vm.fullScheduleJson = [{"nurseId":0,"name":"Baśka0","days":[{"dayId":0,"signature":"D"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"E"},{"dayId":3,"signature":"E"},{"dayId":4,"signature":"L"},{"dayId":5,"signature":"L"},{"dayId":6,"signature":"L"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"D"},{"dayId":10,"signature":"E"},{"dayId":11,"signature":"E"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"L"},{"dayId":15,"signature":"L"},{"dayId":16,"signature":"N"},{"dayId":17,"signature":"N"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"E"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"E"},{"dayId":24,"signature":"D"},{"dayId":25,"signature":"L"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"E"},{"dayId":29,"signature":"E"},{"dayId":30,"signature":"L"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"E"},{"dayId":33,"signature":"D"},{"dayId":34,"signature":"E"}]},{"nurseId":1,"name":"Baśka1","days":[{"dayId":0,"signature":"D"},{"dayId":1,"signature":"D"},{"dayId":2,"signature":"E"},{"dayId":3,"signature":"L"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"D"},{"dayId":8,"signature":"E"},{"dayId":9,"signature":"L"},{"dayId":10,"signature":"L"},{"dayId":11,"signature":"N"},{"dayId":12,"signature":"N"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"E"},{"dayId":16,"signature":"E"},{"dayId":17,"signature":"L"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"E"},{"dayId":20,"signature":"D"},{"dayId":21,"signature":"L"},{"dayId":22,"signature":"L"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"D"},{"dayId":26,"signature":"L"},{"dayId":27,"signature":"L"},{"dayId":28,"signature":"L"},{"dayId":29,"signature":"L"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"N"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":2,"name":"Baśka2","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"E"},{"dayId":3,"signature":"E"},{"dayId":4,"signature":"E"},{"dayId":5,"signature":"E"},{"dayId":6,"signature":"D"},{"dayId":7,"signature":"E"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"D"},{"dayId":11,"signature":"E"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"N"},{"dayId":15,"signature":"N"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"L"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"E"},{"dayId":22,"signature":"L"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"E"},{"dayId":25,"signature":"D"},{"dayId":26,"signature":"E"},{"dayId":27,"signature":"E"},{"dayId":28,"signature":"D"},{"dayId":29,"signature":"E"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"D"},{"dayId":32,"signature":"L"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"D"}]},{"nurseId":3,"name":"Baśka3","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"L"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"L"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"D"},{"dayId":8,"signature":"D"},{"dayId":9,"signature":"E"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"E"},{"dayId":15,"signature":"L"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"E"},{"dayId":20,"signature":"E"},{"dayId":21,"signature":"D"},{"dayId":22,"signature":"E"},{"dayId":23,"signature":"L"},{"dayId":24,"signature":"L"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"D"},{"dayId":27,"signature":"D"},{"dayId":28,"signature":"L"},{"dayId":29,"signature":"N"},{"dayId":30,"signature":"N"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"L"},{"dayId":34,"signature":"L"}]},{"nurseId":4,"name":"Baśka4","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"D"},{"dayId":2,"signature":"D"},{"dayId":3,"signature":"E"},{"dayId":4,"signature":"E"},{"dayId":5,"signature":"D"},{"dayId":6,"signature":"D"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"E"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"D"},{"dayId":11,"signature":"E"},{"dayId":12,"signature":"E"},{"dayId":13,"signature":"D"},{"dayId":14,"signature":"D"},{"dayId":15,"signature":"L"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"E"},{"dayId":18,"signature":"L"},{"dayId":19,"signature":"N"},{"dayId":20,"signature":"N"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"D"},{"dayId":25,"signature":"E"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"D"},{"dayId":29,"signature":"L"},{"dayId":30,"signature":"L"},{"dayId":31,"signature":"L"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":5,"name":"Baśka5","days":[{"dayId":0,"signature":"D"},{"dayId":1,"signature":"E"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"D"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"E"},{"dayId":8,"signature":"D"},{"dayId":9,"signature":"N"},{"dayId":10,"signature":"N"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"E"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"D"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"D"},{"dayId":23,"signature":"D"},{"dayId":24,"signature":"D"},{"dayId":25,"signature":"E"},{"dayId":26,"signature":"L"},{"dayId":27,"signature":"L"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"D"},{"dayId":30,"signature":"D"},{"dayId":31,"signature":"E"},{"dayId":32,"signature":"E"},{"dayId":33,"signature":"D"},{"dayId":34,"signature":"E"}]},{"nurseId":6,"name":"Baśka6","days":[{"dayId":0,"signature":"E"},{"dayId":1,"signature":"E"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"E"},{"dayId":9,"signature":"D"},{"dayId":10,"signature":"E"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"L"},{"dayId":13,"signature":"L"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"E"},{"dayId":17,"signature":"E"},{"dayId":18,"signature":"D"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"L"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"D"},{"dayId":24,"signature":"L"},{"dayId":25,"signature":"L"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"N"},{"dayId":28,"signature":"N"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"D"},{"dayId":32,"signature":"D"},{"dayId":33,"signature":"E"},{"dayId":34,"signature":"D"}]},{"nurseId":7,"name":"Baśka7","days":[{"dayId":0,"signature":"L"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"D"},{"dayId":3,"signature":"D"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"E"},{"dayId":6,"signature":"E"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"L"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"E"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"D"},{"dayId":13,"signature":"E"},{"dayId":14,"signature":"E"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"D"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"E"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"D"},{"dayId":22,"signature":"E"},{"dayId":23,"signature":"L"},{"dayId":24,"signature":"L"},{"dayId":25,"signature":"N"},{"dayId":26,"signature":"N"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"D"},{"dayId":31,"signature":"L"},{"dayId":32,"signature":"N"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":8,"name":"Baśka8","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"D"},{"dayId":3,"signature":"D"},{"dayId":4,"signature":"E"},{"dayId":5,"signature":"N"},{"dayId":6,"signature":"N"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"E"},{"dayId":10,"signature":"D"},{"dayId":11,"signature":"L"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"E"},{"dayId":16,"signature":"L"},{"dayId":17,"signature":"L"},{"dayId":18,"signature":"L"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"D"},{"dayId":24,"signature":"E"},{"dayId":25,"signature":"D"},{"dayId":26,"signature":"D"},{"dayId":27,"signature":"E"},{"dayId":28,"signature":"E"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"D"},{"dayId":31,"signature":"E"},{"dayId":32,"signature":"E"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"N"}]},{"nurseId":9,"name":"Baśka9","days":[{"dayId":0,"signature":"E"},{"dayId":1,"signature":"D"},{"dayId":2,"signature":"L"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"L"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"L"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"L"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"L"},{"dayId":13,"signature":"L"},{"dayId":14,"signature":"L"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"E"},{"dayId":17,"signature":"D"},{"dayId":18,"signature":"E"},{"dayId":19,"signature":"D"},{"dayId":20,"signature":"E"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"E"},{"dayId":23,"signature":"N"},{"dayId":24,"signature":"N"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"E"},{"dayId":29,"signature":"D"},{"dayId":30,"signature":"E"},{"dayId":31,"signature":"E"},{"dayId":32,"signature":"D"},{"dayId":33,"signature":"E"},{"dayId":34,"signature":"0"}]},{"nurseId":10,"name":"Baśka10","days":[{"dayId":0,"signature":"L"},{"dayId":1,"signature":"L"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"D"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"L"},{"dayId":6,"signature":"L"},{"dayId":7,"signature":"0"},{"dayId":8,"signature":"D"},{"dayId":9,"signature":"D"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"D"},{"dayId":12,"signature":"E"},{"dayId":13,"signature":"D"},{"dayId":14,"signature":"D"},{"dayId":15,"signature":"E"},{"dayId":16,"signature":"L"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"D"},{"dayId":19,"signature":"L"},{"dayId":20,"signature":"L"},{"dayId":21,"signature":"N"},{"dayId":22,"signature":"N"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"E"},{"dayId":30,"signature":"E"},{"dayId":31,"signature":"D"},{"dayId":32,"signature":"D"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":11,"name":"Baśka11","days":[{"dayId":0,"signature":"E"},{"dayId":1,"signature":"L"},{"dayId":2,"signature":"L"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"L"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"N"},{"dayId":8,"signature":"N"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"L"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"D"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"D"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"D"},{"dayId":20,"signature":"D"},{"dayId":21,"signature":"D"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"E"},{"dayId":24,"signature":"E"},{"dayId":25,"signature":"L"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"L"},{"dayId":29,"signature":"L"},{"dayId":30,"signature":"L"},{"dayId":31,"signature":"L"},{"dayId":32,"signature":"L"},{"dayId":33,"signature":"N"},{"dayId":34,"signature":"0"}]},{"nurseId":12,"name":"Baśka12","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"E"},{"dayId":2,"signature":"N"},{"dayId":3,"signature":"N"},{"dayId":4,"signature":"0"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"L"},{"dayId":8,"signature":"L"},{"dayId":9,"signature":"L"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"L"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"D"},{"dayId":15,"signature":"D"},{"dayId":16,"signature":"0"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"0"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"L"},{"dayId":23,"signature":"L"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"E"},{"dayId":26,"signature":"E"},{"dayId":27,"signature":"D"},{"dayId":28,"signature":"D"},{"dayId":29,"signature":"D"},{"dayId":30,"signature":"E"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"L"},{"dayId":33,"signature":"L"},{"dayId":34,"signature":"L"}]},{"nurseId":13,"name":"Baśka13","days":[{"dayId":0,"signature":"L"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"D"},{"dayId":5,"signature":"D"},{"dayId":6,"signature":"E"},{"dayId":7,"signature":"D"},{"dayId":8,"signature":"L"},{"dayId":9,"signature":"0"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"D"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"N"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"L"},{"dayId":17,"signature":"L"},{"dayId":18,"signature":"N"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"E"},{"dayId":22,"signature":"D"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":14,"name":"Baśka14","days":[{"dayId":0,"signature":"0"},{"dayId":1,"signature":"N"},{"dayId":2,"signature":"0"},{"dayId":3,"signature":"L"},{"dayId":4,"signature":"N"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"E"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"L"},{"dayId":10,"signature":"L"},{"dayId":11,"signature":"0"},{"dayId":12,"signature":"0"},{"dayId":13,"signature":"0"},{"dayId":14,"signature":"L"},{"dayId":15,"signature":"0"},{"dayId":16,"signature":"D"},{"dayId":17,"signature":"E"},{"dayId":18,"signature":"E"},{"dayId":19,"signature":"L"},{"dayId":20,"signature":"L"},{"dayId":21,"signature":"0"},{"dayId":22,"signature":"D"},{"dayId":23,"signature":"0"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]},{"nurseId":15,"name":"Baśka15","days":[{"dayId":0,"signature":"N"},{"dayId":1,"signature":"0"},{"dayId":2,"signature":"L"},{"dayId":3,"signature":"0"},{"dayId":4,"signature":"D"},{"dayId":5,"signature":"0"},{"dayId":6,"signature":"0"},{"dayId":7,"signature":"L"},{"dayId":8,"signature":"0"},{"dayId":9,"signature":"E"},{"dayId":10,"signature":"0"},{"dayId":11,"signature":"D"},{"dayId":12,"signature":"D"},{"dayId":13,"signature":"E"},{"dayId":14,"signature":"0"},{"dayId":15,"signature":"D"},{"dayId":16,"signature":"D"},{"dayId":17,"signature":"0"},{"dayId":18,"signature":"D"},{"dayId":19,"signature":"0"},{"dayId":20,"signature":"0"},{"dayId":21,"signature":"L"},{"dayId":22,"signature":"0"},{"dayId":23,"signature":"E"},{"dayId":24,"signature":"0"},{"dayId":25,"signature":"0"},{"dayId":26,"signature":"0"},{"dayId":27,"signature":"0"},{"dayId":28,"signature":"0"},{"dayId":29,"signature":"0"},{"dayId":30,"signature":"0"},{"dayId":31,"signature":"0"},{"dayId":32,"signature":"0"},{"dayId":33,"signature":"0"},{"dayId":34,"signature":"0"}]}]

  $rootScope.$on("hide", function() {
    vm.showMe = false;
  })

  $rootScope.$on("fullSchedule", function() {
    vm.showMe = true;
  })
})