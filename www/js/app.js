// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'tabsCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'contactCtrl'
      }
    }
  })
  .state('tab.esencia', {
      url: "/inicio/esencia",
      views: {
        'tab-inicio': {
          templateUrl: "templates/inicio/esencia.html"
        }
      }
    })
  .state('tab.tradicion', {
      url: "/inicio/tradicion",
      views: {
        'tab-inicio': {
          templateUrl: "templates/inicio/tradicion.html"
        }
      }
    })
  .state('tab.historia', {
      url: "/inicio/historia",
      views: {
        'tab-inicio': {
          templateUrl: "templates/inicio/historia.html"
        }
      }
    })
  .state('tab.manufactura', {
      url: "/inicio/manufactura",
      views: {
        'tab-inicio': {
          templateUrl: "templates/inicio/manufactura.html"
        }
      }
    })
  .state('tab.comercio', {
      url: "/inicio/comercio",
      views: {
        'tab-inicio': {
          templateUrl: "templates/inicio/comercio.html"
        }
      }
    })

  .state('tab.store', {
      url: '/store',
      views: {
        'tab-store': {
          templateUrl: 'templates/tab-store.html',
          controller: 'storeCtrl'
        }
      }
    })
    .state('tab.catalog', {
      url: '/store/:cat',
      views: {
        'tab-store': {
          templateUrl: 'templates/catalog.html',
          controller: 'catCtrl'
        }
      }
    })
    .state('tab.product', {
      url: '/store/product/:id',
      views: {
        'tab-store': {
          templateUrl: 'templates/product.html',
          controller: 'productCtrl'
        }
      }
    })

  .state('tab.contact', {
    url: '/contact',
    views: {
      'tab-contact': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('tab.map', {
    url: '/contact/map',
    views: {
      'tab-contact': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/tab-user.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/user/profile',
    views: {
      'tab-user': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tab.favs', {
    url: '/user/favs',
    views: {
      'tab-user': {
        templateUrl: 'templates/favs.html',
        controller: 'favsCtrl'
      }
    }
  })

  .state('tab.fav', {
      url: '/user/fav/:id',
      views: {
        'tab-user': {
          templateUrl: 'templates/fav.html',
          controller: 'productCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/store');

});
