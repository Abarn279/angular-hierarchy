angular
    .module('app')
    .controller('hierarchyController', HierarchyController)

function HierarchyController(ds) {
    var vm = this;

    vm.data = ds.getData();

    vm.whenClicked = function(event) {
        console.log(event.target);
    }
}
HierarchyController.$inject = ["dataService"];