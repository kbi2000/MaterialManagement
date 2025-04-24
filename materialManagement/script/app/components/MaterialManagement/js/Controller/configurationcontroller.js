app.controller('ConfigurationController', function($scope, $document) {
    $scope.selectedTab = 'vendor'; 
    $scope.showVendorTwo = false;
    $scope.selectedTabItem = 'items'


    $scope.selectTab = function(tab) {
      $scope.selectedTab = tab;
      $scope.selectedTabItem =tab;
      

    };
    $scope.showDropdown = false;
    $scope.showNewItemDialog = false;

  
    $scope.toggleDropdown = function ($event) {
      $event.stopPropagation();
      $scope.showDropdown = !$scope.showDropdown;
    };
    $scope.isFilterPanelOpen = false;

$scope.toggleFilterPanel = function () {
  $scope.isFilterPanelOpen = !$scope.isFilterPanelOpen;
};
  
    $document.on('click', function () {
      // Only close if dropdown is open
      if ($scope.showDropdown) {
        $scope.$apply(function () {
          $scope.showDropdown = false;
        });
      }
    });
  });
  