angular.module('alurapic', ['minhasDiretivas', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos',{
        templateUrl: 'partial/principal.html',
        controller: 'FotosController'
    });
    $routeProvider.when('/fotos/new',{
        templateUrl: 'partial/foto.html',
        controller: 'FotoController'
    });
    $routeProvider.otherwise({ redirectTo: '/fotos'});
});
