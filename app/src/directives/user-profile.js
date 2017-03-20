(function () {
  'use strict';

  angular
      .module('catsApp')
      .directive('userProfile', ['userProfileService', function (userProfileService) {
        return {
          restrict: 'E',
          scope: {

          },
          replace: true,
          templateUrl: '../templates/user-profile.template.html',
          link: function ($scope, element, attr) {

              $scope.user = userProfileService.user;//todo

          }
        };
      }]);
})();