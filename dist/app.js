(function() {
    var angular = require("angular");

    angular
        .module('app', [])

    // controllers
    require("./controllers/hierarchyController.js");

    // directives
    require("./directives/cityHierarchy.js");

    // services
    require("./services/dataService.js");
})();
(function() {
    angular
        .module('app', [])
        .controller('hierarchyController', HierarchyController)

    function HierarchyController(ds) {
        var vm = this;
        vm.data = ds.getData().then(function(data) {
            debugger;
        })
    }
    HierarchyController.$inject = ["dataService"];
})();
(function() {
    angular
        .module('app')
        .directive('cityHierarchy', function() {
            return {
                controller: CityHierarchyController,
                template: '<div>Hello World</div>',
                controllerAs: 'vm',
                restrict: 'EA',
                bindToController: true
            }
        });

    function CityHierarchyController() {
        var vm = this;
    }
});
(function() {
    angular
        .module('app', [])
        .factory("dataService", DataService)

    function DataService() {
        return {
            getData: getData
        };

        function getData() {
            return [{
                    "id": 1,
                    "name": "Illinois",
                    "children": [{
                        "id": 4,
                        "name": "Cook County",
                        "children": [{
                                "id": 5,
                                "name": "Chicago"
                            },
                            {
                                "id": 6,
                                "name": "Oak Park"
                            }
                        ]
                    }]
                },
                {
                    "id": 2,
                    "name": "Michigan",
                    "children": [{
                        "id": 7,
                        "name": "Wayne County",
                        "children": [{
                                "id": 8,
                                "name": "Detroit"
                            },
                            {
                                "id": 9,
                                "name": "Grosse Pointe"
                            }
                        ]
                    }]
                },
                {
                    "id": 3,
                    "name": "Arizona",
                    "children": [
                        {}
                    ]
                }
            ]
        }
    }
})();