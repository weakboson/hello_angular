var PersonListCtrl = function($scope, $http){
  $http.get('persons.json').success(function(data){
    $scope.persons = $.map(data, function(d) { d.like = 0; return d; });
  });
};
var PersonListItemCtrl = function($scope) {
  $scope.addLike = function(){
    $scope.person.like += 1;
  };
};
