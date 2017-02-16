var _ = require("lodash");

angular
    .module('app')
    .directive('itemInput', function() {
        return {
            controller: ItemInputController,
            templateUrl: 'src/directives/itemInput.html',
            scope: {
                selections: "=",
                whenclicked: "="
            },
            controllerAs: 'vm',
            restrict: 'E',
            bindToController: true,
            replace: true
        };
    });

ItemInputController.$inject = ["$scope"];

function ItemInputController($scope) {
    var vm = this;
}