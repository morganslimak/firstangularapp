var app = angular.module("myApp", []);

app.controller("PlayerController", function($scope) {
	$scope.playing = false;
  $scope.audio = document.createElement("audio");
  $scope.audio.src = "http://a.tumblr.com/tumblr_lmqp4tNmaA1qkdv4bo1.mp3"
  $scope.play = function() {
    $scope.audio.play();
  };
});

app.controller("RelatedController", function($scope) {
	
});