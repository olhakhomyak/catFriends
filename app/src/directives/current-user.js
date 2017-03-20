(function () {
    'use strict';

    angular
        .module('catsApp')
        .directive('currentUser', ['userProfileService', 'contentConstants',
            function (userProfileService, contentConstants) {
            return {
                restrict: 'E',
                transclude: true,
                scope: {

                },
                replace: true,
                templateUrl: '../templates/current-user.template.html',
                link: function ($scope, element, attr) {

                    $scope.contentConstants = contentConstants;

                    $scope.editMode = false;

                    $scope.changeMode = function () {
                        $scope.editMode = !$scope.editMode;
                    };

                    $scope.user = userProfileService.user;


                }
            };
        }]);
})();