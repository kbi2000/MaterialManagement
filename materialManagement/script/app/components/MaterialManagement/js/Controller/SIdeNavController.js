app.controller('SidebarController', function ($scope) {
    $scope.activeMenu = null;

    $scope.toggleMenu = function (menu) {
        if ($scope.activeMenu === menu) {
            $scope.activeMenu = null; // Collapse if already open
        } else {
            $scope.activeMenu = menu; // Expand clicked menu
        }
    };

    $scope.isMenuActive = function (menu) {
        return $scope.activeMenu === menu;
    };
});