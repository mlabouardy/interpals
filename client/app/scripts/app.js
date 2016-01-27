'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-md5',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'ForgotPasswordCtrl'
      })
      .when('/mailbox', {
        templateUrl: 'views/mailbox.html',
        controller: 'MailboxCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/rooms', {
        templateUrl: 'views/rooms.html',
        controller: 'RoomsCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/send-msg/:id', {
        templateUrl: 'views/send-msg.html',
        controller: 'SendMsgCtrl',
        controllerAs: 'sendMsg'
      })
      .when('/msg-friend/:id', {
        templateUrl: 'views/msg-friend.html',
        controller: 'MsgFriendCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/about-me', {
        templateUrl: 'views/about-me.html',
        controller: 'AboutMeCtrl',
        controllerAs: 'aboutMe'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
