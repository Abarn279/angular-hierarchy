angular
    .module('app')
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
                "children": []
            }
        ]
    }
}