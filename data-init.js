'use strict';

angular.module('data-init', []).

provider('$init', function() {
  this.$get = function(
    $window
  ){
    return $window.JSON.parse(document.querySelector('[ng-app]').dataset.init);
  };
});
