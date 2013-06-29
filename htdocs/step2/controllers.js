function ColorListCtrl($scope, $http) {
  $http.get('colors.json').success(function(data) {
    for(var i=0;i<data.length;i++){data[i].like=0;}
    $scope.colors = data;
  });
}
function ColorListItemCtrl($scope){
  $scope.increment=function(){
    $scope.color.like++;
  }
}
