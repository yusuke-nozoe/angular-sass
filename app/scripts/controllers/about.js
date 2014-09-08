'use strict';

/**
 * @ngdoc function
 * @name angularSassApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSassApp
 */
angular.module('angularSassApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
