'use strict';

var app = angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router',
    'ui.load',
    'ui.jq',
    'ng-token-auth',
    'config',
    'pascalprecht.translate'
  ]);

app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
  function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
  }]);
