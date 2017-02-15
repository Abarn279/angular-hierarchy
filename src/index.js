var $ = require("jquery");

$(".acc-city-hierarchy")
    .replaceWith('<h1>Hierarchy Demo</h1><div ng-app="app" ng-controller="hierarchyController as ctrl" ng-cloak><form ng-submit="ctrl.search()"><input class="form-control" placeholder="Enter a location name to filter" style="margin-bottom: 15px; max-width: 500px;" type="text" ng-model="ctrl.searchTerm" ng-change="ctrl.search()"/></form><city-hierarchy items="ctrl.activeData" whenclicked="ctrl.whenClicked"></city-hierarchy></div>');

var angular = require("angular");

angular
    .module('app', [])

// controllers
require("./controllers/hierarchyController.js");

// directives
require("./directives/cityHierarchy.js");

// services
require("./services/dataService.js");