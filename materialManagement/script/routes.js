// routes.js
app.config(function($routeProvider) {
    $routeProvider
    .when('/configuration', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Configuration.html',
        controller: 'ConfigurationController'
    })
    .when('/newhand', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Vendor/newhandstonetable.html',
        controller: 'ConfigurationController'
    })
    .when('/editvendor', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Vendor/VendorTwo.html',
        controller: 'ConfigurationController'
    })
    .when('/addvendor', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Vendor/addvendor.html',
        controller: 'ConfigurationController'
    }) 
    .when('/item', {
        templateUrl: './script/app/components/MaterialManagement/Partial/AddItem/items.html',
        controller: 'ConfigurationController'
    }) 
    .when('/additem', {
        templateUrl: './script/app/components/MaterialManagement/Partial/AddItem/addnewitem.html',
        controller: 'ConfigurationController'
    }) 
    .when('/store', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Store/storelist.html',
        controller: 'ConfigurationController'
    }) 
    .when('/addstore', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Store/addnewstore.html',
        controller: 'ConfigurationController'
    }) 
    .when('/editinvetory', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Inventory/editinventory.html',
        controller: 'ConfigurationController'
    }) 
    .when('/invetorylist', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Inventory/inventorylist.html',
        controller: 'ConfigurationController'
    }) 
    .when('/advanceinvetorylist', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Inventory/advanceinvetorysearch.html',
        controller: 'ConfigurationController'
    }) 
    .when('/addmenuitem', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MenuItem/addmenuitem.html',
        controller: 'ConfigurationController'
    }) 
    .when('/menuitemlist', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MenuItem/menuitemlist.html',
        controller: 'ConfigurationController'
    }) 
    .when('/outlet', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Outlet/Outletlist.html',
        controller: 'ConfigurationController'
    }) 
    .when('/createindent', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Indent/createindent.html',
        controller: 'ConfigurationController'
    }) 
    .when('/reviewindent', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Indent/Reviewindent.html',
        controller: 'ConfigurationController'
    })
    .when('/indentsummary', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Indent/IndentSummary.html',
        controller: 'ConfigurationController'
    })
    .when('/material', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MaterialTransfer/materialtransfer.html',
        controller: 'ConfigurationController'
    }) 
    .when('/issuenote', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MaterialTransfer/IssueNote.html',
        controller: 'ConfigurationController'
    }) 
    .when('/discrepancy', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MaterialTransfer/discrepancyraised.html',
        controller: 'ConfigurationController'
    }) 
    .when('/discrepancyresolution', {
        templateUrl: './script/app/components/MaterialManagement/Partial/MaterialTransfer/discrepancyresolution.html',
        controller: 'ConfigurationController'
    }) 
    .when('/lowstockalert', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Stock/LowStockAlert.html',
        controller: 'ConfigurationController'
    }) 
    .when('/returnreplacementinventory', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Inventory/ReturnAndReplacementInvetory.html',
        controller: 'ConfigurationController'
    }) 
    .when('/expirytracking', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Inventory/expirytracker.html',
        controller: 'ConfigurationController'
    }) 
    .when('/purchasemanagement', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Dashboard/PurchaseManager.html',
        controller: 'ConfigurationController'
    }) 
    .when('/F&B', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Dashboard/F&BDashboard.html',
        controller: 'ConfigurationController'
    }) 
    .when('/Recipe', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Recipe/recipelist.html',
        controller: 'ConfigurationController'
    }) 
    .when('/AddRecipe', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Recipe/addrecipe.html',
        controller: 'ConfigurationController'
    }) 
    .when('/PoApprove', {
        templateUrl: './script/app/components/MaterialManagement/Partial/PurchaseOrderManagement/PurchaseOrderApprove.html',
        controller: 'ConfigurationController'
    }) 
    .when('/PoView', {
        templateUrl: './script/app/components/MaterialManagement/Partial/PurchaseOrderManagement/PurchaseOrderView.html',
        controller: 'ConfigurationController'
    }) 
    .when('/pendingdeliveries', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Deliveries/PendingDelivries.html',
        controller: 'ConfigurationController'
    }) 
    .when('/grn', {
        templateUrl: './script/app/components/MaterialManagement/Partial/GRN/craetegrn.html',
        controller: 'ConfigurationController'
    })
    .otherwise({
        redirectTo: '/configuration'
    });
});
