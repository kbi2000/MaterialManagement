angular.module('myApp').directive('sideNav', function() {
    return {
        restrict: 'E',
        templateUrl: './script/app/components/MaterialManagement/Partial/SideNav.html', 
        link: function(scope, element, attrs) {
            // Add interactive behavior if needed
            element.on('mouseenter', function() {
                element.addClass('active');
            });

            element.on('mouseleave', function() {
                element.removeClass('active');
            });
        }
    };
});
