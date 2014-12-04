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
            var size = 700;
            for(var i=0;i<4;i++){
                this.slides.push({
                    image:'http://placebear.com/g/'+size+'/500',
                    text:"Image " + i
                });
                size + i;
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