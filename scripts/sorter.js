var app = angular.module('piuSorter', []);
app.controller('songListCont', ["$http", function($http){
	var list = this;
	list.songs = {};
	$http({method: 'GET', url: 'data.json'}).
		success(function(data) {
			list.songs = data;
		})
}]);
