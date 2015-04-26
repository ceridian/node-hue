angular.module('UserService', []).factory('UserStatus', ['$rootScope', function($rootScope) {
	$rootScope.user = false;
	return {
		getUser: function(){
			return $rootScope.user;
		},
		setUser: function(value){
			$rootScope.user = value;
		}
	}
}]);
