var app = window.angular.module('app', [])

app.factory('websiteFetcher', websiteFetcher)
app.controller('mainCtrl', mainCtrl)

function websiteFetcher ($http) {
  
  var API_ROOT = 'websites'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, websiteFetcher, $http, $window) {

  $scope.websites = []

$scope.addFavorite = function() {
  var formData = {title:$scope.Title,websiteUrl:$scope.Url,color:getRandomColor()};
  console.log(formData);
  var websiteURL = 'websites';
  $http({
     url: websiteURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}

$scope.reloadroute = function(){
  $window.location.reload();
}


  websiteFetcher.get()
    .then(function (data) {
      $scope.websites = data
    })


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

}
