angular
    .module('app')
    .directive('cityHierarchy', function() {
        return {
            controller: CityHierarchyController,
            templateUrl: 'src/directives/cityHierarchy.html',
            scope: {
                items: '=',
                whenclicked: '='
            },
            controllerAs: 'vm',
            restrict: 'E',
            bindToController: true
        };
    });

CityHierarchyController.$inject = ["$scope"];

function CityHierarchyController($scope) {
    var vm = this;

    vm.cityClicked = function(item) {
        vm.whenclicked(item);
    }
}