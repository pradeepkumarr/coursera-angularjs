(function () {

    'use strict'

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.items="";
        $scope.message="";

        $scope.displayMessage = function () {
            var message = getMessage($scope.items);            
            $scope.message = message;
        };
    }

    function getMessage(string) {
        if(string === "")
            return "Please enter data first";
        else
        {
            var arrayOfStrings = string.split(',');
            var length = arrayOfStrings.length;

            if (length >= 1 && length <= 3)
            {
                return "Enjoy!";
            }
            if (length > 3 && length <= 5)
            {
                return "Too much!";
            }
        }            
    }      

})();