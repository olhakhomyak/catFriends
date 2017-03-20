(function () {
    'use strict';

    angular
        .module('catsApp')
        .directive('friendSection', ['userProfileService', 'contentConstants',
            function (userProfileService, contentConstants) {
                return {
                    restrict: 'E',
                    transclude: true,
                    scope: {
                        friend: '='
                    },
                    replace: true,
                    templateUrl: '../templates/friend-section.template.html',
                    link: function ($scope, element, attr) {

                        $scope.contentConstants = contentConstants;

                        $scope.user = userProfileService.user;


                    }
                };
            }]);
})();