(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('catsApp', [
    'ngRoute',
    'ngResource'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/test', {
          template: '<user-profile></user-profile>'
        })
        .otherwise({redirectTo: '/test'});
  }]);

})();
(function () {
    "use strict";

    angular
        .module('catsApp')
        .service('userProfileService', ['$resource', 'appConstants', function ($resource, appConstants) {

            var self = this;

            // REMOVE
            // FOR TEST
            this.user = {
                first: "Test",
                last: "User",
                picture: {
                    thumbnail: "http://i2.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg"
                },
                born: "22/10/1991",
                gender: "Male",
                phone: 241412421,
                email: "jdoe@mail.com",
                friends: [
                    {first: "one",
                        last: "Doe",
                        picture: {
                            thumbnail: "http://i2.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg"
                        },
                        born: "22/10/1991",
                        gender: "Male",
                        phone: 241412421,
                        email: "jdoe@mail.com"},
                    {first: "two",
                        last: "User",
                        picture: {
                            thumbnail: "http://i2.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg"
                        },
                        born: "22/10/1991",
                        gender: "Male",
                        phone: 241412421,
                        email: "jdoe@mail.com"}
                ]
            };

            return {
                userData: userData,
                user: this.user
            };


            //TODO
            function userData(params) {
                return $resource('', {}, {
                    get: {
                        method: 'GET',
                        params: {},
                        url: appConstants.API_URL + '/users/'
                    },
                    update: {
                        method: 'PUT',
                        params: {params: params},
                        url: appConstants.API_URL + '/users/:id'
                    }
                })
            }

            }]);
})();
(function () {
    "use strict";

    angular
        .module('catsApp')
        .constant('contentConstants', {
            'NAV': {
                'PREV_USER':        'Previous user',
                'NEXT_USER':        'Next user'
            },

            'BTN': {
                'SAVE':             'Save',
                'EDIT':             'Edit'
            },

            'PROFILE': {
                'BORN':             'Born',
                'GENDER':           'Gender',
                'PHONE':            'Phone',
                'EMAIL':            'Email',
                'MALE':             'Male',
                'FEMALE':           'Female',
                'PLACEHOLDER': {
                    'FIRST':        'First name',
                    'LAST':         'Last name',
                    'BIRH_DATE':    'day/month/year',
                    'PHONE_EXMPL':  '888-888-8888',
                    'EMAIL_EXMPL':  'example@gmail.com'
                }
            }
        });
})();
(function () {
    "use strict";

    angular
        .module('catsApp')
        .constant('appConstants', {
            'API_URL': 'http://146.185.137.61:3000/api',
            'LIMIT_USERS_PER_PAGE': 10
        });
})();
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