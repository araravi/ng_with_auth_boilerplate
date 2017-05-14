angular.module('apollo')
  .config(['$authProvider', 'ENV',
    function($authProvider, ENV){
      $authProvider.configure({
        apiUrl: ENV.apiEndpoint,
        tokenValidationPath:     '/sessions/validate_token',
        signOutUrl:              '/sessions/sign_out',
        emailRegistrationPath:   '/sessions',
        accountUpdatePath:       '/sessions',
        accountDeletePath :       '/sessions',
        passwordResetPath:       '/sessions/password',
        passwordUpdatePath:      '/sessions/password',
        emailSignInPath:         '/sessions/sign_in'
      });
    }]);
