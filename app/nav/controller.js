app.controller('NavCtrl', ['$scope', '$auth', '$state', function ($scope, $auth, $state) {
  $scope.logout = function () {
    $auth.signOut()
      .then(function (resp) {
        $state.go('sign_in');
      })
      .catch(function (resp) {
        if (resp.status == 404) {
          $state.go('sign_in');
        }
      });
  };

  var clearState = function(){
    $('#home').removeClass('active');
    $('#search').removeClass('active');
  };

  clearState();
  switch($state.current.name){
    case 'home':
      $('#home').addClass('active');
      break;
    case 'search':
      $('#search').addClass('active');
  }

  $scope.changeState = function (state) {
    switch (state) {
      case 'home':
        $state.go('home');
        break;
      case 'search':
        $state.go('search');
        break;
      default:
    }
  };

}]);
