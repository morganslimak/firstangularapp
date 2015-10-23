var app = angular.module("myApp", []);

var apiKey = "MDIwOTYwOTc0MDE0NDU2MTk5MTBhNzJkYg000";
var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';



app.controller("PlayerController", function($scope, $http) {
  $http({
    url: nprUrl + "&apiKey=" + apiKey + "&callback=JSON_CALLBACK",
    method: 'jsonp'
  }).success(function(data, status) {
    $scope.programs = data.list.story;
  });

});
