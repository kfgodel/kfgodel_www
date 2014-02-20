'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);


phonecatControllers.controller('BusquedaDeConceptosController', ['$scope',
 function($scope) {

}]);


phonecatControllers.controller('ListaDeConceptosController', ['$scope', '$routeParams',	'ConceptoService',
 function($scope, $routeParams, ConceptoService) {
	
	//Definimos el texto con el que buscaron, para mostrarlo
	$scope.textoBuscado = $routeParams.textoDeBusqueda;
	
	//Buscamos las coincidencias
	var textoABuscar = $routeParams.textoDeBusqueda;
	$scope.conceptos = ConceptoService.query({texto: (textoABuscar? textoABuscar: '') }, function(conceptos) {
		//Pongo el primero como elegido para mostrarlo
		$scope.conceptoElegido = conceptos[0];
    });
	
	//Permite cambiar el concepto elegido y que el binding se entere
	$scope.cambiarElegido = function(concepto) {
	      $scope.conceptoElegido = concepto;
	};

}]);




phonecatControllers.controller('DetalleDeConceptoController', ['$scope', '$routeParams', 'ConceptoService',
  function($scope, $routeParams, ConceptoService) {
	
	//Buscamos el concepto a editar
	$scope.conceptoEditado = ConceptoService.get({id: $routeParams.conceptoId});

	//Permite cambiar el concepto elegido y que el binding se entere
	$scope.guardar = function(concepto) {
		$scope.conceptoEditado = ConceptoService.save(concepto);
		//$scope.conceptoEditado = concepto.$save({id:'@id'});
	}
	
}]);

