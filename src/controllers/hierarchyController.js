angular
    .module('app')
    .controller('hierarchyController', HierarchyController)

HierarchyController.$inject = ["dataService"];

function HierarchyController(ds) {
    var vm = this;

    vm.data = ds.getData();
    vm.activeData = vm.data;
    vm.searchTerm = "";

    vm.search = function() {
        if (!vm.searchTerm) {
            vm.activeData = vm.data.slice();
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

    vm.whenClicked = function(item) {
        console.log(item);
    }
}