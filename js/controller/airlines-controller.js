
angular.module('myapp')
.controller('airlinesController', function($http,$rootScope) {
            
			$http.get('db/airlines.json').success(function(data) {
			    $rootScope.airlines = data;
				
		  });
})
.controller('airlinesdetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.detail = $filter('filter')($rootScope.airlines.airlines,{id:$routeParams.id},true);
			
})

.controller('airportController', function($http,$rootScope) {
            
			$http.get('db/airport.json').success(function(data) {
			    $rootScope.airports = data;
			 });
})
.controller('airportdetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.airport_detail = $filter('filter')($rootScope.airports,{id:$routeParams.id},true);
			 
})

.controller('EmbassiesController', function($http,$rootScope) {
           
			$http.get('db/embassies.json').success(function(data) {
			    $rootScope.embassies = data;
				
			 });
})
.controller('embassiesdetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.embassies_detail = $filter('filter')($rootScope.embassies,{id:$routeParams.id},true);
	
})

.controller('IranianEmbassiesController', function($http,$rootScope) {
           
			$http.get('db/iranianembassis.json').success(function(data) {
			     $rootScope.IranianEmbassies = data;
			
				
			 });
})
.controller('homeController', function($scope) {
           
			$scope.time = new Date();
})
.controller('IranianController', function($scope,$routeParams,$rootScope,$filter) {
	     
            $scope.iranian_detail = $filter('filter')($rootScope.IranianEmbassies.iranianembassies,{id:$routeParams.id},true);
			
}).directive('backAnimation', ['$browser', '$location', function($browser, $location) {
	return {
		link: function(scope, element) {

			$browser.onUrlChange(function(newUrl) {
				if ($location.absUrl() === newUrl) {
					console.log('Back');
					element.addClass('reverse');
				}
			});

			scope.__childrenCount = 0;
			scope.$watch(function() {
				scope.__childrenCount = element.children().length;
			});

			scope.$watch('__childrenCount', function(newCount, oldCount) {
				if (newCount !== oldCount && newCount === 1) {
					element.removeClass('reverse');
				}
			});
		}
	};
}]);

