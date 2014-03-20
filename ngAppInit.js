'use strict';

angular.module('ngAppInit', []).

provider('$init', function(
){
  this.$get = function() {
    return {};
  };
}).

directive('ngAppInit', function(
  $window,
  $init
){
  return {
    compile: function() {
      return {
        pre: function(scope, element, attrs) {
          angular.extend($init, $window.JSON.parse(attrs.ngAppInit));
        }
      };
    }
  };
});
