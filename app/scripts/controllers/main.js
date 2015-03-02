'use strict';

/**
 * @ngdoc function
 * @name angularexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularexApp
 */
angular.module('angularexApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
