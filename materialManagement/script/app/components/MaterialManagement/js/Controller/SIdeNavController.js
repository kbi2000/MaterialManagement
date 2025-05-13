app.controller('SidebarController', function ($scope,$location) {
    $scope.activeMenu = null;
    $scope.goToItem = function() {
        $location.path('/item');
    };
    $scope.goToStore = function() {
        $location.path('/store');
    };
    $scope.goToVendor = function() {
        $location.path('/configuration');
    };
    $scope.goToMenu = function() {
        $location.path('/menuitemlist');
    };
    $scope.goToOutlet = function() {
        $location.path('/outlet');
    };
    $scope.goToCreateIndent = function() {
        $location.path('/createindent');
    };
    
    $scope.goToApproveIndent = function() {
        $location.path('/reviewindent');
    };
    $scope.goToMaterialTransfer = function() {
        $location.path('/material');
    };
    $scope.goToDR = function() {
        $location.path('/discrepancyresolution');
    };
    $scope.goToD = function() {
        $location.path('/discrepancy');
    };
    $scope.goToIssueNote= function() {
        $location.path('/issuenote');
    };
    $scope.goToInventory= function() {
        $location.path('/invetorylist');
    };
    $scope.goToAdvanceInventory= function() {
        $location.path('/advanceinvetorylist');
    };
    $scope.goToIndentSummary= function() {
        $location.path('/indentsummary');
    };
    $scope.goToLowStockAlert= function(){
        $location.path('/lowstockalert')
    }
    $scope.goToRetutnandReplacement= function(){
        $location.path('/returnreplacementinventory')
    }
    $scope.goToExpiryTrack=function(){
        $location.path('/expirytracking')
    }
    $scope.goToPurchaseManager= function(){
        $location.path('/purchasemanagement')
    }
    $scope.goToFB= function(){
        $location.path('/F&B')

    }
    $scope.goToRecipe= function(){
        $location.path('/Recipe')
    }
    $scope.goToPOView= function(){
        $location.path('/PoView')
    }
    $scope.goToPOApprove= function(){
        $location.path('/PoApprove')
    }
    $scope.goToPendingDelivery= function(){
        $location.path('/pendingdeliveries')
    }
    $scope.goTogrn=function(){
        $location.path('/grn')
    }


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