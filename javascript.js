angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('connectCtrl', ['$scope', '$http', '$q', 'connectFactory', function ($scope, $http, $q, connectFactory) {

    // Widget Configuration
    $scope.portalHelpers.config = {
        // make 'widgetMenu.html' the template for the top right menu
        "widgetMenu": "widgetMenu.html"
    };

    // Import variables and functions from service
    $scope.data = connectFactory.data;
    $scope.studentData = {};
    $scope.portalHelpers.showView('main.html', 1);
    $scope.portalHelpers.toggleLoading(false);
    
    // Call server to fetch student data
    $scope.portalHelpers.invokeServerFunction('getData')
        .then(function (result) {
                $scope.studentData = result;
        		console.log(result);
            });

    // initialize the service
    connectFactory.init($scope);

	// Show main view in the first column
	$scope.portalHelpers.showView('main.html', 1);
	
}])
// Factory maintains the state of the widget
.factory('connectFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {value: false};

	// Your variable declarations
	var data = {value: null};

	var init = function ($scope) {
		if (initialized.value)
			return;
		
		initialized.value = true;

		// Place your init code here:
		data.value={message:"Welcome to Portal SDK!"};
	}


	// Expose init(), and variables
	return {
		init: init,
		data: data
	};

}])
// Custom directive example
.directive('connectDirectiveName', ['$http', function ($http) {
	return {
		link: function (scope, el, attrs) {

		}
	};
}])
// Custom filter example
.filter('connectFilterName', function () {
	return function (input, arg1, arg2) {
		// Filter your output here by iterating over input elements
		var output = input;
		return output;
	}
});