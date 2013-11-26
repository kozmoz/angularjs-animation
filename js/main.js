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

app.directive('myPanel', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/template/my-panel.html',
        // Wrap content.
        transclude: true,
        scope: {
            title: '=',
            subtitle: '='
        }
    };
});

app.directive('mySlidingPanel', function () {
    return {
        require: '^myPanel',
        restrict: 'E',
        templateUrl: 'js/template/my-sliding-panel.html',
        // Wrap content.
        transclude: true,
        scope: {
            // Exposes an API for binding to behaviors.
            // Binds close() function to on-close attribute.
            'close': '&onClose'
        },
        controller: function ($scope, $log) {
            $scope.closeSlidingPanel = function () {
                // Forward to registered on-close() event listeners.
                $scope.close();
            };
        }
    };
});
