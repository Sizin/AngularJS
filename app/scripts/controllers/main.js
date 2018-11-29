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
  $scope.name = "Sinan"

});


