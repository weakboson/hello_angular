function ColorListCtrl($scope, $http) {
  $http.get('colors.json').success(function(data) {
    $scope.colors = data;
  });
}
