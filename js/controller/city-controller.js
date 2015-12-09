
angular.module('myapp')
.controller('CityController', function($rootScope,$http) {
    
    $http.get('db/cities.json').success(function(data) {
			   $rootScope.cities = data.cities;
          
		 });
            
})

.controller('CitydetailController', function($scope,$routeParams,$rootScope,$filter, $timeout) {
            
    $scope.city_detail = $filter('filter')($rootScope.cities,{id:$routeParams.id},true);
	console.log($scope.city_detail);
   $timeout(function() {
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
  });       
})

.controller('EatController', function($scope,$http,$routeParams,$filter,$rootScope) {
    
    $http.get('db/Eat_and_drink.json').success(function(data) {
			   $scope.eat = data.eat_drink;
			   $scope.city_name = $routeParams.name;
			   $scope.city_id = $routeParams.id;
			   $rootScope.eats = $filter('filter')( $scope.eat,{city_id:$routeParams.id},true);
			 
			
          
		 });
            
})
.controller('EatdetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.eat_detail = $filter('filter')($rootScope.eats,{id:$routeParams.id},true);
			 $scope.city_name = $routeParams.name;
		       
})
.controller('SeeController', function($scope,$http,$routeParams,$filter,$rootScope) {
    
    $http.get('db/see.json').success(function(data) {
			   $scope.see = data.sight_seeing;
			   $scope.city_name = $routeParams.name;
			   $scope.city_id = $routeParams.id;
			   $rootScope.sees = $filter('filter')($scope.see,{city_id:$routeParams.id},true);
			  
			
          
		 });
            
})
.controller('SeedetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.see_detail = $filter('filter')($rootScope.sees,{id:$routeParams.id},true);
			 $scope.city_name = $routeParams.name;
			  console.log($scope.see_detail);
	       
})

.controller('NightlifeController', function($scope,$http,$routeParams,$filter,$rootScope) {
    
    $http.get('db/Nightlife.json').success(function(data) {
			   $scope.nightlife = data.Top_Nightlife;
			    $scope.city_name = $routeParams.name;
			   $scope.city_id = $routeParams.id;
			   $rootScope.nightlifes = $filter('filter')($scope.nightlife,{city_id:$routeParams.id},true);
			      
		 });
            
})
.controller('NightlifedetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.nightlife_detail = $filter('filter')($rootScope.nightlifes,{id:$routeParams.id},true);
			 $scope.city_name = $routeParams.name;
			  
	       
})

.controller('HotelController', function($scope,$http,$routeParams,$filter,$rootScope) {
    
    $http.get('db/hotel.json').success(function(data) {
			   $scope.hotel = data.hotel;
			   $scope.city_name = $routeParams.name;
			   $scope.city_id = $routeParams.id;
			   $rootScope.hotels = $filter('filter')($scope.hotel,{city_id:$routeParams.id},true);
			
			      
		 });
            
})
.controller('HoteldetailController', function($scope,$routeParams,$rootScope,$filter) {
            
			 $scope.hotel_detail = $filter('filter')($rootScope.hotels,{id:$routeParams.id},true);
			 console.log($scope.hotel_detail);
			 $scope.city_name = $routeParams.name;
			  
	       
});

