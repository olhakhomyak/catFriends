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
                        email: "jdoe@mail.com"},
                    {first: "three",
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