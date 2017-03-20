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