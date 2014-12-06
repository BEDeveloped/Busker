/*
 * @author: Ben Barrett & Erica Bielat
 * @date: December 2, 2014
 * @app: main module for the busker application.
 * @injects: ngRoute, bootstrap
 */
var buskerApp = angular.module('busker', ['ngRoute', 'ui.bootstrap']);

/*
 *  Application Config.
 *  Configuration for page routes
 */

buskerApp.config(function($routeProvider){
    $routeProvider

        .when('/home', {
            templateUrl:'pages/home.html',
            controller:'homeController',
            controllerAs:'home'
        })

        .when('/search', {
            templateUrl:'pages/about.html',
            controller:'searchController',
            controllerAs:'search'
        })

        .when('/profile', {
            templateUrl:'pages/profile.html',
            controller:'profileController',
            controllerAs:'profile'
        })

        .otherwise('/home');
});

/*
 * Home controller
 * This controller holds all functionality for the landing page of Busker.
 */
buskerApp.controller('homeController', function($scope){
    var home = {
        title:"Busker",
        interval:5000,
        slides:[],
        init:function(){
            for(var i=0; i< 5;i++){
                var n = i+1;
                this.slides.push({
                    image:'img/busker_'+n+'.jpg',
                    text:'Busker'
                });
            }
        }
    };

    home.init();
    return home;
});

/*
 * Search Controller
 * This controller holds all functionality for the search page.
 */
buskerApp.controller('searchController', function(){
    var search = {

    };

    return search;
});

/*
 * Profile controller
 * This controller holds all functionality for the artist profile information.
 */

buskerApp.controller('profileController', function(){
    var profile = {

    };

    return profile;
});

/*
 * DIRECTIVES
 */
buskerApp.directive('menuBar', ['$log', function($log){
    return{
        restrict:"E",
        replace:true,
        controllerAs:'menu',
        controller:function($log){
            var menu = {
                locationItems:['New York', 'Chicago', 'Boston', 'Los Angeles'],
                musicStyles:[],
                picks:[],
                options:[],
                toggled:function(open){
                    $log.log('Dropdown is now: ', open);
                }
            };

            return menu;
        },
        templateUrl:'templates/menu.html'
    }
}]);

buskerApp.directive('applicationForm', ['$log', function($log){
    return {
        restrict:"E",
        replace:true,
        templateUrl:'templates/application.html',
        controllerAs:'application',
        controller:function($log){

        }
    }
}])