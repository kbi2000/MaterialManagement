app.controller('ConfigurationController', function($scope, $document,$location) {
  $scope.vendorName = '';
  $scope.showErrors = false;
  $scope.showOutletModal = false;


  $scope.submitForm = function () {
    $scope.showErrors = true;

    const message = "<strong>Success:</strong> Form submitted successfully!";

  const toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
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
$scope.goToIndentSummary= function() {
  $location.path('/indentsummary');
};
$scope.goToaddRecipe= function() {
  $location.path('/AddRecipe');
};
$scope.goToaddRecipe= function() {
  $location.path('/AddRecipe');
};
$scope.goToCreateIndent = function() {
  $location.path('/createindent');
};
$scope.goToPOView= function(){
  $location.path('/PoView')
}



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
    $scope.vendorData = [
      [
        false,
        'Premium Hospitality Goods LLC',
        'Arush Hukkeri',
        '45, Across Prithvi School',
        'West Bengal',
        '9260650515',
        'hulamani.bhavbh@century.org',
        'Vegetables',
        'A7873513',
        'MZ0420152156 196',
        'EWGPT8122R',
        'Test',
        '04/21/2025',
        'Active'
      ]
      // Add more vendors as needed
    ];

    $scope.vendorColumns = [
      { type: 'checkbox' },
      { title: 'Vendor Name' },
      { title: 'Contact Person' },
      { title: 'Address' },
      { title: 'Location' },
      { title: 'Contact No.' },
      { title: 'Email' },
      { title: 'Items Supplied' },
      { title: 'Acc. No.' },
      { title: 'IFSC' },
      { title: 'GSTN' },
      { title: 'Contract Details' },
      { title: 'Contract Expiry', type: 'date', dateFormat: 'MM/DD/YYYY' },
      {
        title: 'Current Status',
        renderer: statusRenderer,
        readOnly: true
      }    ];
      
      
      function statusRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments); 
      
        td.innerHTML = ''; 
        const btn = document.createElement('button');
      
        btn.innerText = value || 'Inactive';
        btn.className = 'status-btn';
        btn.style.backgroundColor = value === 'Active' ? '#28a745' : '#6c757d'; 
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.padding = '5px 12px';
        btn.style.cursor = 'pointer';
        btn.style.margin = '5px'
      
        td.style.textAlign = 'center';
        td.appendChild(btn);
      }
      $scope.dropdownOpen = false;

      $scope.options = [
        { name: 'Apple', selected: false },
        { name: 'Banana', selected: false },
        { name: 'Orange', selected: false },
        { name: 'Mango', selected: false },
        { name: 'Pineapple', selected: false },
        { name: 'Watermelon', selected: false }
      ];
      $scope.store = [
        { name: 'Delhi', selected: false },
        { name: 'Kolkata', selected: false },
    
      ];
      $scope.issuenote = [
        { name: '1234', selected: false },
        { name: '2345', selected: false },
    
      ];

      $scope.toggleDropdown = function() {
        $scope.dropdownOpen = !$scope.dropdownOpen;
      };

      $scope.getSelectedItems = function() {
        return $scope.options.filter(opt => opt.selected).map(opt => opt.name);
      };
      $scope.getSelectedStore = function() {
        return $scope.store.filter(opt => opt.selected).map(opt => opt.name);
      };

      // Close dropdown on click outside
      $document.on('click', function(event) {
        const target = angular.element(event.target);
        if (!target.closest('.selecto-eleganza').length) {
          $scope.$apply(() => $scope.dropdownOpen = false);
        }
      });
      $scope.dropdownItemCategory = [ 'Equipment', 'Food'];
      $scope.dropdownItemType = [ 'Raw', 'Sellable'];
      $scope.issuenote = [ '1234', '2345'];



      $scope.selectedItem = null;
      $scope.dropdownOpen = false;

      $scope.toggleDropdown = function () {
        $scope.dropdownOpen = !$scope.dropdownOpen;
      };
      $scope.toggleDropdowntemtype = function () {
        $scope.dropdownOpenitemtype = !$scope.dropdownOpenitemtype;
      };

      $scope.selectItem = function(item) {
        $scope.selectedItem = item;
        $scope.dropdownOpen = false;
        $scope.dropdownOpenitemtype = false;
        $scope.issuenote = false;


      };

      // Close dropdown when clicking outside
      $document.on('click', function(event) {
        if (!event.target.closest('.dropdown-wrapper')) {
          $scope.$apply(() => {
            $scope.dropdownOpen = false;
            $scope.dropdownOpenitemtype = false;
            $scope.issuenote = false;

          });
        }
      });
    
      
  });
  