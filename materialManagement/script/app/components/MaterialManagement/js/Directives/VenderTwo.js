angular.module('myApp').directive('vendorTwo', function() {
    return {
        restrict: 'E', // Or 'A' for an attribute directive
        templateUrl: './script/app/components/MaterialManagement/Partial/Vendor/VendorTwo.html', // Path to the separate HTML file
       
    };
});
