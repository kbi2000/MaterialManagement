angular.module('myApp').directive('vendorOne', function() {
    return {
        restrict: 'E', // Or 'A' for an attribute directive
        templateUrl: './script/app/components/MaterialManagement/Partial/Vendor/VendorOne.html', // Path to the separate HTML file
       
    };
});
