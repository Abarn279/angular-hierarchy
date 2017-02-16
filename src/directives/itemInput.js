var _ = require("lodash");

angular
    .module('app')
    .directive('itemInput', function() {
        return {
            controller: ItemInputController,
            templateUrl: 'src/directives/itemInput.html',
            scope: {
                selections: "="
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

    vm.removeSelection = function(selection) {
        selection.active = false;
        _.remove(vm.selections, function(i) {
            return selection.id === i.id;
        })
    }
}