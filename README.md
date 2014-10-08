angular-cordova-mobile-google-analytics
=======================================

An angular wrapper for [Danwilson's google-analytics-plugin](https://github.com/danwilson/google-analytics-plugin) for Cordova / Phonegap


## Installation:

```bash
bower install angular-cordova-mobile-google-analytics
```
Example use:

```javascript
angular.module('yourModule', ['angular-cordova-mobile-google-analytics'])
.controller('yourCtrl', [
  '$scope',
  'mobileAnalytics',
  function($scope, mobileAnalytics) {
    // track a view
    mobileAnalytics.trackView("HomePage");
}]);

/*
To set the google tracker id, you can use the startTrackerWithId method
available on the mobileAnalyticsProvider
*/
angular.module('yourModule', ['angular-cordova-mobile-google-analytics'])
.config(['mobileAnalyticsProvider', function(mobileAnalyticsProvider){
  mobileAnalyticsProvider.startTrackerWithId("UA-12345678-1");
}]);
```
