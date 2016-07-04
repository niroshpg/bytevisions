angular.module('ByteVisionsApp')
.config(function($routeProvider){
    $routeProvider.when('/apps-eqm',{
        templateUrl:'templates/pages/apps/eqm/index.html'
    })
    .when('/apps-ft',{
        templateUrl:'templates/pages/apps/ft/index.html'
    })
    $routeProvider.when('/apps',{
        templateUrl:'templates/pages/apps/index.html'
    })
    .when('/blog',{
        templateUrl: 'templates/pages/blog/index.html'
    })
    .when('/about-contact',{
        templateUrl: 'templates/pages/about/index.html'
    })
    .when('/',{
        templateUrl: 'templates/pages/apps/index.html'
    })
    .otherwise({redirectTo:'/'});
    
});