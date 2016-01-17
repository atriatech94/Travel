angular.module('myapp')
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/index.html',
              controller: 'homeController',
           
        })
        .when('/about', {
             templateUrl: 'pages/about/index.html',   
        })
         .when('/contact', {
             templateUrl: 'pages/contact/index.html',
             controller: 'ContactController',   
        })
        
        .when('/tours', {
             templateUrl: 'pages/tours/index.html',   
        })
         .when('/book', {
             templateUrl: 'pages/tours/book.html',   
        })
        
          .when('/t-daily', {
             templateUrl: 'pages/tours/t-daily.html',   
        })
          .when('/t-15', {
             templateUrl: 'pages/tours/t-15.html',   
        })
          .when('/t-16', {
             templateUrl: 'pages/tours/t-16.html',   
        })
          .when('/t-plan', {
             templateUrl: 'pages/tours/t-plan.html',   
        })
        
         .when('/airlines', {
             templateUrl: 'pages/airlines/index.html',
             controller: 'airlinesController',
        })
         .when('/detail-airline/:id', {
             templateUrl: 'pages/airlines/detail.html',
             controller: 'airlinesdetailController',
        })
         .when('/airport', {
            templateUrl: 'pages/airport/index.html',
            controller: 'airportController'
        })
          .when('/detail-airport/:id', {
             templateUrl: 'pages/airport/detail.html',
             controller: 'airportdetailController',
        })
        
        .when('/embassies', {
             templateUrl: 'pages/embassies/index.html',
             controller: 'EmbassiesController',
        })
        
           .when('/detail-embassies/:id', {
             templateUrl: 'pages/embassies/detail.html',
             controller: 'embassiesdetailController',
        })
        
          .when('/iranian_embassies', {
             templateUrl: 'pages/iranian_embassies/index.html',
             controller: 'IranianEmbassiesController',
        })
        
           .when('/detail-iranian/:id', {
             templateUrl: 'pages/iranian_embassies/detail.html',
             controller: 'IranianController',
        })
       
        .when('/cities', {
             templateUrl: 'pages/cities/index.html',
              controller: 'CityController',
         })
          .when('/detail-city/:id', {
             templateUrl: 'pages/cities/detail.html',
              controller: 'CitydetailController',
         })
           .when('/eat/:id/:name', {
             templateUrl: 'pages/cities/eat.html',
              controller: 'EatController',
         })
         
           .when('/detail-eat/:id/:name', {
             templateUrl: 'pages/cities/eat_detail.html',
              controller: 'EatdetailController',
         })
         
            .when('/see/:id/:name', {
             templateUrl: 'pages/cities/see.html',
              controller: 'SeeController',
         })
         
           .when('/detail-see/:id/:name', {
             templateUrl: 'pages/cities/see_detail.html',
              controller: 'SeedetailController',
         })
         
            .when('/nightlife/:id/:name', {
             templateUrl: 'pages/cities/nightlife.html',
              controller: 'NightlifeController',
         })
         
           .when('/detail-nightlife/:id/:name', {
             templateUrl: 'pages/cities/nightlife_detail.html',
              controller: 'NightlifedetailController',
         }) 
           .when('/hotel/:id/:name', {
             templateUrl: 'pages/cities/hotel.html',
              controller: 'HotelController',
         })
         
           .when('/detail-hotel/:id/:name', {
             templateUrl: 'pages/cities/hotel_detail.html',
              controller: 'HoteldetailController',
         }) 
		.when('/', {
            templateUrl: 'pages/home/index.html',
           
		})
        
         
        
		.otherwise({ redirectTo: '/' });
});