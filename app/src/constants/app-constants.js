(function () {
    "use strict";

    angular
        .module('catsApp')
        .constant('appConstants', {
            'API_URL': 'http://146.185.137.61:3000/api',
            'LIMIT_USERS_PER_PAGE': 10
        });
})();