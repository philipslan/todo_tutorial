var app = angular.module('todo', []);
app.controller('list', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });
                event.preventDefault();
            }
        });
    };
});