angular.module('apollo')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
    )
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);
            $urlRouterProvider.when('', '/');

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
