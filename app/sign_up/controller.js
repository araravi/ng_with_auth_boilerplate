app.controller('SignUpCtrl', ['$scope', '$auth', '$state', function ($scope, $auth, $state) {

  $scope.signup = function(){
    $auth.submitRegistration({
      name: $scope.user.name,
      email: $scope.user.email,
      password: $scope.user.password,
      role: 'evaluator'
    }).then(function (resp) {
        $state.go('home');
      })
      .catch(function (resp) {
        console.log(resp);
        $scope.authError = resp.data.errors.full_messages[0];
        console.log($scope.authError)
      });
  };

  $auth.validateUser()
    .then(function(resp){
      $state.go('home');
    });

}]);
