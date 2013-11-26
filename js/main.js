// Initialize AngularJS.
var app = angular.module('slidingPanelModule', ['ngAnimate']);

// Add "onTab" directive.
app.directive('onEsc', function () {

    "use strict";

    return function (scope, element, attributes) {
        $(document).on('keydown', function (event) {
            if (event.which !== 27) {
                return;
            }
            scope.$apply(function () {
                //noinspection JSUnresolvedVariable
                scope.$eval(attributes.onEsc);
            });
        });
    };
});
