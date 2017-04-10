/**
 * Created by Hafeez Rehman on 10/04/2017.
 */

(function(){
    angular.module('hclapp')

        .controller('AppCtrl', function*($scope, $rootScope, $state, $stateParams, $http){
            console.log('App Controller Loaded.');
            $http.post('/guess', { lower: 10, upper: 20 }).then(function(data){
                console.log(data);
            });
        })

        .controller('HomeCtrl', function ($scope, $rootScope, $state, $stateParams, $http) {
            console.log('Home Controller loaded');
        });
})();