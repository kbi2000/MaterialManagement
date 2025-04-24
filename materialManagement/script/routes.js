// routes.js
app.config(function($routeProvider) {
    $routeProvider
    .when('/configuration', {
        templateUrl: './script/app/components/MaterialManagement/Partial/Configuration.html',
        controller: 'ConfigurationController'
    })
    .when('/editvendor', {
        templateUrl: './script/app/components/MaterialManagement/Partial/VendorTwo.html',
        controller: 'ConfigurationController'
    })
    .when('/addvendor', {
        templateUrl: './script/app/components/MaterialManagement/Partial/addvendor.html',
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
    .otherwise({
        redirectTo: '/configuration'
    });
});
