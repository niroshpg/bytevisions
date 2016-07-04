angular.module("ByteVisionsApp",['ngRoute']);

angular.module("ByteVisionsApp").controller('ctrl', function($scope) {
   $scope.links =[
     { src:"images/eqm.png", alt:"", caption:""},
     { src:"images/ft.png", alt:"", caption:""}
  ];
});

angular.module("ByteVisionsApp").directive('carousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '=' 
      },
      templateUrl: 'js/directives/carousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
});

