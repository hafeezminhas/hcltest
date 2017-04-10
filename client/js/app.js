/**
 * Created by Hafeez Rehman on 10/04/2017.
 */

'use strict';

var app = angular.module('hclapp', [
    'ui.bootstrap',
    'ui.router'
]);

angular.module('hclapp')

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$qProvider',
        function($stateProvider, $urlRouterProvider, $qProvider){

            $urlRouterProvider.otherwise("/");

            // Set up the states
            $stateProvider.state('app', {
                url: "",
                template: '<div ui-view class="fade-in-up"></div>',
                abstract: true
            }).state('app.home', {
                url: "/home",
                controller: 'HomeCtrl',
                templateUrl: '/views/home.html'
            });

            $qProvider.errorOnUnhandledRejections(false);
    }])

    .run(['$rootScope', '$state', '$stateParams', '$http', function($rootScope, $state, $stateParams, $http){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        //Other Configs if required.
    }]);