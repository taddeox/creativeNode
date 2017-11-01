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

function mainCtrl ($scope, websiteFetcher, $http) {

  $scope.websites = []

$scope.addFavorite = function() {
  var formData = {name:$scope.title,websiteUrl:$scope.Url};
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


  websiteFetcher.get()
    .then(function (data) {
      $scope.websites = data
    })

}
