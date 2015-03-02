'use strict';

/**
 * @ngdoc function
 * @name angularexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularexApp
 */
angular.module('angularexApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
