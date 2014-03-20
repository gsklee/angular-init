'use strict';

angular.module('data-init', []).

provider('$init', function() {
  this.transform = function(input) {return input};

  this.$get = function(
    $window
  ){
    return this.transform($window.JSON.parse(document.querySelector('[ng-app]').dataset.init));
  };
});
