var _ = require("lodash");

angular
    .module('app')
    .controller('hierarchyController', HierarchyController);

HierarchyController.$inject = ["dataService"];

function HierarchyController(ds) {

    /* Bindables */
    var vm = this;

    // Props
    vm.data = ds.getData();
    vm.activeData = vm.data;
    vm.searchTerm = "";
    vm.selectedItems = [];

    // Functions
    vm.whenSelected = whenSelected;
    vm.whenDeselected = whenDeselected;
    vm.search = search;

    /* Implementations */
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

    function whenSelected(item) {
        for (let tree of vm.data) {
            found = treeFindById(tree, item.id)
            if (found) {
                found.active = true;
                break;
            }
        }

        if (!_.some(vm.selectedItems, function(i) {
                return item.id === i.id;
            })) {
            vm.selectedItems.push(item);
        }

        // Not particularly efficient, but handles the highlighting states for me by resetting
        // active data.
        vm.search();
    }

    function whenDeselected(item) {
        for (let tree of vm.data) {
            found = treeFindById(tree, item.id)
            if (found) {
                found.active = false;
                break;
            }
        }

        _.remove(vm.selectedItems, function(i) {
            return item.id === i.id;
        });

        vm.search();
    }

    // Takes in current tree, returns tree with search term applied
    function filterTree(root, searchTerm) {
        var filteredChildren = [];

        if (root.children) {
            for (let child of root.children) {
                child = filterTree(child, searchTerm);

                if (child) {
                    filteredChildren.push(child);
                }
            }
        }

        if (root.name.toLowerCase().includes(searchTerm.toLowerCase()) || (filteredChildren.length) > 0) {
            root.children = filteredChildren;
            return root;
        }

        return null;
    }

    function treeFindById(root, id) {
        if (root.id === id) return root;

        if (root.children && root.children.length) {
            for (let child of root.children) {
                var foundItem = treeFindById(child, id)
                if (foundItem) return foundItem;
            }
        }
    }
}