'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);



phonecatServices.factory('ConceptoService', ['$resource',
function($resource){
	var contextPath = window.location + '';
	contextPath = contextPath.split('/')[3];
	
	return $resource('/' + contextPath + '/web/json/concepto/:operacion', {id:'@id'}, {
		buscarPorNombre: {method:'GET', params:{operacion:'list', texto:''}, isArray:true},
		getConcepto: {method:'GET', params:{operacion:'get', id:0}, isArray:false},
		guardarConcepto: {method:'POST', params:{operacion:'save'}, isArray:false}
     });
}]);

