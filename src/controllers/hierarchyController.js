var _ = require("lodash");

angular
    .module('app')
    .controller('hierarchyController', HierarchyController);

HierarchyController.$inject = ["dataService"];

function HierarchyController(ds) {
    var vm = this;

    // Props
    vm.data = ds.getData();
    vm.activeData = vm.data;
    vm.searchTerm = "";
    vm.selectedItems = [];

    // Functions
    vm.whenClicked = whenClicked;
    vm.whenDeselected = whenDeselected;
    vm.search = search;

    function search() {
        if (!vm.searchTerm) {
            // Cheeky deep copy
            vm.activeData = vm.data;
            return;
        }
        vm.activeData = [];

        // For every top-level tree in the data, get the filtered hierarchy
        for (let tree of vm.data) {
            var filtered = filterTree(angular.copy(tree), vm.searchTerm);
            if (filtered)
                vm.activeData.push(filtered);
        }
    }

    function whenClicked(item) {
        item.active = true;
        if (!_.some(vm.selectedItems, function(i) {
                return item.id === i.id;
            })) {
            vm.selectedItems.push(item);
        }
    }

    function whenDeselected(item) {
        item.active = false;
        _.remove(vm.selectedItems, function(i) {
            return item.id === i.id;
        });
        vm.search();
    }

    // Takes in current tree, returns tree with search term applied
    function filterTree(root, term) {
        var filteredChildren = [];

        if (root.children) {
            for (let child of root.children) {
                child = filterTree(child, term);

                if (child) {
                    filteredChildren.push(child);
                }
            }
        }

        if (root.name.toLowerCase().includes(term.toLowerCase()) || (filteredChildren.length) > 0) {
            root.children = filteredChildren;
            return root;
        }

        return null;
    }
}