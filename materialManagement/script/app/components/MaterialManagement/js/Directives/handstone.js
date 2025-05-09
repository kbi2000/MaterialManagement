angular.module('myApp')
  .directive('handsontableDirective', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        columns: '='
      },
      link: function(scope, element) {
        new Handsontable(element[0], {
          data: scope.data,
         
        //   colHeaders: scope.columns.map(c => c.title || ''),
          columns: scope.columns,
          rowHeaders: false,
          width: '100%',
          stretchH: 'all',
          licenseKey: 'non-commercial-and-evaluation',
           className: 'htCenter',
        //   dropdownMenu: true,
          autoWrapRow: true,
          autoWrapCol: true,
          columnSorting: true, 
          
          
        });
      }
    };
  });
