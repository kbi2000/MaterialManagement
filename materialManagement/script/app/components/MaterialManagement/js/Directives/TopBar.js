angular.module('myApp').directive('topBar', function() {
    return {
        restrict: 'E', // Or 'A' for an attribute directive
        templateUrl: './script/app/components/MaterialManagement/Partial/TopBar.html', // Path to the separate HTML file
       
    };
});
