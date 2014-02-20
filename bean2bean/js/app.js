'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ui.bootstrap',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/conceptos', {
          templateUrl: 'partials/busqueda-de-conceptos.html',
          controller: 'BusquedaDeConceptosController'
        }).
      when('/conceptos/lista/:textoDeBusqueda?', {
            templateUrl: 'partials/lista-de-conceptos.html',
            controller: 'ListaDeConceptosController'
          }).
	  when('/conceptos/detalle/:conceptoId?', {
	      templateUrl: 'partials/detalle-de-concepto.html',
	      controller: 'DetalleDeConceptoController'
	    }).
      otherwise({
        redirectTo: '/conceptos'
      });
  }]);
