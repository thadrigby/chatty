'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    return {
    	getMessages: function() {
    		var deferred = $q.defer();
    		$http({method: 'GET', url: 'http://localhost:3000'}).success(function(data) {
    			deferred.resolve(data)
    		})
    		return deferred.promise;
    	}
    }
  });
