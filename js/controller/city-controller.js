
angular.module('myapp')
.controller('CityController', function($rootScope,$http) {
    
    $http.get('db/cities.json').success(function(data) {
			   $rootScope.cities = data.cities;
          
		 });
    scr();
            
})

.controller('ContactController', function($scope) {
     $scope.go = function() {
      cordova.InAppBrowser.open('http://www.irantravelingcenter.com', '_blank', 'location=yes');
   }
  
    $scope.go1 = function() {
       cordova.InAppBrowser.open('https://www.google.com/maps?ll=29.627188,52.540977&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=12241975311526808310', '_blank', 'location=yes');
   }
            
})

.controller('CitydetailController', function($scope,$routeParams,$rootScope,$filter, $timeout) {
            
    $scope.city_detail = $filter('filter')($rootScope.cities,{id:$routeParams.id},true);
	console.log($scope.city_detail);
  
    $timeout(function() {
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
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
			  
	       
})
.directive('contactAs', function ($http){
		return {
			link: function() {
                    
                /*==========================================================================*/
            $('#name').focus(function(){
                  $('#name_check').hide();
            }); 
             $('#nationality').focus(function(){
                  $('#nationality_check').hide();
            }); 
             $('#email').focus(function(){
                  $('#email_check').hide();
            }); 
             $('#interested').focus(function(){
                  $('#interested_check').hide();
            }); 
             $('#message').focus(function(){
                  $('#message_check').hide();
            }); 
            
            $('form').submit(function(){
              
                var name = $('#name').val();
                var nationality = $('#nationality').val();
                var email = $('#email').val();
                var interested = $('#interested').val();
                var message = $('#message').val();
                if(name == "")
                {
                    $('#name_check').show();
                    $('#name_check').text('Please enter your name');
                }    
                 if(nationality == "")
                {
                     $('#nationality_check').show();
                     $('#nationality_check').text('Please enter your nationality');
                }    
                 if(email == "")
                {
                    $('#email_check').show();
                     $('#email_check').text('Please enter your email');
                } 
                var mail = 0;
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if ((atpos < 1 || ( dotpos - atpos < 2 ))  && email != "") 
                    {
                         $('#email_check').show();
                         $('#email_check').text('Please enter a valid email');
                         
                    } 
                    else
                    {
                        mail = 1;
                    }  
                 if(interested == "")
                {
                     $('#interested_check').show();
                     $('#interested_check').text('Please enter your interest');
                }    
                  if(message == "")
                {
                     $('#message_check').show();
                     $('#message_check').text('Please enter your message');
                } 
                if(name == "" || nationality == "" || email == "" || interested == "" || message == "" || mail==0 )
                {
                    return false;
                }            
              var request =  $.ajax({
                    method: "POST",
                    url: "http://www.irantravelingcenter.com/app/home",
                    data: { 
                            name: name,
                            nationality:  nationality,
                            email:  email,
                            interested:  interested,
                            message:  message,
                            pass : "FESwqwmuufde@@wsdfr"
                          }
                    });
                    
                   request.done(function( msg ) {
                       $('#msg').show();
                       $("#msg").text("Your messege successfully sent");
                    });
 
                    request.fail(function( jqXHR, textStatus ) {
                       $('#msg').show();
                       $("#msg").text("Please check your Internet conection");
                    });
              return false;                      

           });
                 
              
                /*==========================================================================*/
                  
            },//end link
            
        }
});
function scr()
{
    $(function () { 
      //  $(".content").niceScroll({cursorcolor:"rgba(95, 95, 95, 0.76)"});
    });
}
