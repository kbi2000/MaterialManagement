app.controller('ConfigurationController', function($scope, $document,$location) {
  $scope.vendorName = '';
  $scope.showErrors = false;

  $scope.submitForm = function () {
    $scope.showErrors = true;

    if ($scope.myForm.$valid) {
      alert('Form submitted successfully!');
      // Continue processing...
    }
  };

    $scope.selectedTab = 'vendor'; 
    $scope.showVendorTwo = false;
    $scope.selectedTabItem = 'items'
    $scope.goToNewVendor = function() {
      $location.path('/editvendor');
  };
  $scope.goToNewItem = function() {
    $location.path('/additem');
};
$scope.goToNewStore = function() {
  $location.path('/addstore');
};
$scope.goToMenuitme = function() {
  $location.path('/addmenuitem');
};
$scope.goToNewInventory = function() {
  $location.path('/editinvetory');
};
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
  