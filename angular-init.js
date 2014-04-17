/*! Angular Init 0.1.3 | Copyright (c) 2014 Gias Kay Lee | MIT License */

'use strict';

angular.module('angularInit', []).

provider('$init', function() {
  this.transform = function(input) {return input};

  this.$get = function(
    $window
  ){
    return this.transform($window.JSON.parse(document.querySelector('[ng-app]').dataset.init) || {});
  };
});
