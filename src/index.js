var $ = require("jquery");

$(".acc-city-hierarchy")
    .replaceWith('<h1>Hierarchy Demo</h1><div ng-app="app" ng-controller="hierarchyController as ctrl" ng-cloak><city-hierarchy items="ctrl.data" whenclicked="ctrl.whenClicked"></city-hierarchy></div>');

var angular = require("angular");

angular
    .module('app', [])

// controllers
require("./controllers/hierarchyController.js");

// directives
require("./directives/cityHierarchy.js");

// services
require("./services/dataService.js");