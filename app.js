(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
       function LunchCheckController ($scope){
      $scope.menuItems="";
      $scope.message="";
    
      $scope.checkMenuItems = function(){
    
       
       var items = $scope.menuItems.split(",");
    
       var num_items = ValidateMenuItems(items);
    
       if (num_items === 0)
          return $scope.message = "Please enter data first";
    
       if (num_items > 3)
          return $scope.message = "Too much!";
       else
          return $scope.message = "Enjoy!";
      };
    }
    
    
    function ValidateMenuItems (items){
      var cnt = 0;
            for(var i=0; i<items.length; i++){
                if(!(isEmpty(items[i]))){
                    cnt+= 1 ;
                }
            }
            return cnt;
        }
    
        function isEmpty(val){
        return (val === undefined || val == null || val.length <= 0) ? true : false;
        }
    
    })();