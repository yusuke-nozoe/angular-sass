'use strict';

/**
 * @ngdoc function
 * @name angularSassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSassApp
 */
angular.module('angularSassApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
