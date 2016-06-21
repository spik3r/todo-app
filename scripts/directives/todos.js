angular.module('todoListApp')
.directive('todos', function() {
           return {
            templateUrl: 'templates/todos.html',
             controller: 'mainCtrl',
             //replace: true
           }
           })
.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13 || event.which === 27) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });