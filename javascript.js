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
    $scope.item = {value:''};

    // Model for the search and list example
    $scope.model = [{
        title: "Jessie Won",
        details: "Hey, how's it going?",
        ingroup: '0',
        user_id: 'jwon',
        program: 'Systems Design Engineering'
    }, {
        title: "Portal Hackathon Team",
        details: "Hey guys! Lunch is at 12!",
        ingroup: '1'
    }, {
        title: "SYDE 2020",
        details: "When's our last exam?",
        ingroup: '1'
    }, {
        title: "Tara Yuen",
        details: "Are you going to the portal hackathon today?",
        ingroup: '0',
        user_id: 'tyuen',
        program: 'Systems Design Engineering'
    }, {
        title: "Krystyna Brudnicki",
        details: "I LOVE CONNOR #krishnor",
        ingroup: '0',
        user_id: 'kbrudnicki',
        program: 'Systems Design Engineering'
    }, {
        title: "Zak Keller",
        details: "item 6 details",
        ingroup: '0',
        user_id: 'zkeller',
        program: 'Systems Design Engineering'
    }];
    
    // Call server to fetch student data
    $scope.portalHelpers.invokeServerFunction('getData')
        .then(function (result) {
        	$scope.studentData = result;
        	console.log(result);
        });
    
    // OPEN DATA API EXAMPLE
    $scope.portalHelpers.invokeServerFunction('getOpenData')
        .then(function (result) {
        	$scope.openDataPeopleData = result;
        	console.log('getopendata data: ', result);
        	openDataPeopleData.value = result.data;
    });

    // MOCK DATA API EXAMPLE
    $scope.portalHelpers.invokeServerFunction('getMockData')
        .then(function (result) {
        	$scope.mockDataPeopleData.value = result;
            console.log('getmockdata data: ', result);
            mockDataPeopleData.value = result.data;
    });
 
    // initialize the service
    connectFactory.init($scope);
    
    // watch for changes in the loading variable
    $scope.$watch('loading.value', function () {
        // if loading
        if ($scope.loading.value) {
            // show loading screen in the first column, and don't append it to browser history
            $scope.portalHelpers.showView('loading.html', 1, false);
            // show loading animation in place of menu button
            $scope.portalHelpers.toggleLoading(true);
        } else {
            $scope.portalHelpers.showView('main.html', 1);
            $scope.portalHelpers.toggleLoading(false);
        }
    });

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('details.html', 2);
    };

    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

    // Get list to search for students
    $scope.portalHelpers.invokeServerFunction('privDataRead').then(function (result) {
    	console.log('priv read result',result);
	});
}])

// Factory maintains the state of the widget
.factory('connectFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {
        value: false
    };

	// Your variable declarations
	var data = {
        value: null
    };
    
    var loading = {
        value: true
    };
    
    var sourcesLoaded = 0;

    var init = function ($scope) {
        if (initialized.value)
            return;
        initialized.value = true;

		// Place your init code here:
	}

	// Expose init(), and variables
	return {
		init: init,
		data: data,
        loading: loading
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