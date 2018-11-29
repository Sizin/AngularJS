'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

angular.module('angularjsApp').controller('adultController', function($scope){
  $scope.age = 0;
  $scope.majorOrMinorText = function(){
    return ($scope.age >= 18) ? "major" : "minor";
  };
});

angular.module('angularjsApp').controller('hideOrDisplayController', function($scope){
  $scope.showContent = true;
});

angular.module('angularjsApp').controller('helloWorldController', function($scope){
  $scope.name = "Sinan";

});


angular.module('angularjsApp').controller("calculateController", function($scope){
  $scope.articles = [{
    "name":"iPhone",
    "quantity":1,
    "price":30
  },{
    "name":"OnePlus",
    "quantity":1,
    "price":29.99
  }]

  $scope.total = function(){
    var total = 0;

    for(var i = 0; i < $scope.articles.length; i++){
      total += $scope.articles[i].price * $scope.articles[i].quantity;
    }

    return total;
  };

  function calculateDiscount(newValue, oldValue, scope){
    $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
  };

  $scope.finalTotal = function(){
    return $scope.total() - $scope.discount;
  }

  $scope.$watch($scope.total, calculateDiscount);
});


