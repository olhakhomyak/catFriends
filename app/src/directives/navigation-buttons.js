(function () {
    'use strict';

    angular
        .module('catsApp')
        .directive('navigationButtons', ['contentConstants', function (contentConstants) {
            return {
                restrict: 'E',
                scope: {

                },
                replace: true,
                templateUrl: '../templates/navigation-buttons.template.html',
                link: function ($scope, element, attr) {
                    $scope.contentConstants = contentConstants;

                }
            };
        }]);
})();