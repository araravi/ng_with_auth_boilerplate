angular.module('testApp')
    .run(['$rootScope', '$state', '$stateParams', '$auth',
        function ($rootScope, $state, $stateParams, $auth) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart', function (e, toState, toParams
                , fromState, fromParams) {
                if (toState.name === 'sign_in' || toState.name === 'sign_up' || toState.name === 'index' || toState.name === '404') {
                    $('#content').addClass('m-n');
                    $('footer').addClass('m-n');
                    return;
                } else {
                    $('#content').removeClass('m-n');
                    $('footer').removeClass('m-n');
                }

                // *********** Enable to auth user for screens ******** ///
                // $auth.validateUser().then(function (resp) {
                //     if (toState.name.indexOf('admin') !== -1) {
                //         if ($rootScope.user.admin == false) {
                //             $state.go('index')
                //         }
                //     }
                // }).catch(function (resp) {
                //     $state.go('index')
                // })
            });
        }
    ]
    )
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

            $locationProvider.html5Mode(true);
            $urlRouterProvider.when('', '/');


            // *********** Enable for translations ************ //
            // $translateProvider.useSanitizeValueStrategy('escape');
            // $translateProvider
            //     .translations('en', translations_en)
            //     .preferredLanguage('en');

            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        nav: {
                            templateUrl: 'nav/view.html'
                        },
                        content: {
                            templateUrl: 'home/view.html'
                        }
                    }
                })
                .state('sign_in', {
                    url: '/sign_in',
                    views: {
                        content: {
                            templateUrl: 'sign_in/view.html'
                        }
                    }
                })
                .state('sign_up', {
                    url: '/sign_up',
                    views: {
                        content: {
                            templateUrl: 'sign_up/view.html'
                        }
                    }
                })
                .state('search', {
                    url: '/search',
                    views: {
                        nav: {
                            templateUrl: 'nav/view.html'
                        },
                        content: {
                            templateUrl: 'search/view.html'
                        }
                    }
                })
                .state('404', {
                    url: '{path:.*}',
                    views: {
                        content: {
                            templateUrl: 'pages/404.html'
                        }
                    }
                });
        }])
    .controller('AppCtrl', function () {

    });
