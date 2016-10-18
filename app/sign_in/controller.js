app.controller('SignInCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state) {

  $scope.login = function(){
    $auth.submitLogin({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function (resp) {
      $state.go('home')
    }).catch(function (resp) {
      $scope.authError = resp.errors[0]
    });
  };

  $auth.validateUser()
    .then(function(resp){
      $state.go('home')
    });
}]);
