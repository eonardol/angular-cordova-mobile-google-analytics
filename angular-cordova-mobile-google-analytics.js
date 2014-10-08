angular.module('angular-cordova-mobile-google-analytics', [])
.provider('mobileAnalytics', function() {
    var gaMobileAppTrackerId = null;

    this.startTrackerWithId = function(id) {
      gaMobileAppTrackerId = id;
      if (typeof analytics != "undefined") {
        analytics.startTrackerWithId(id);
        console.log("startTrackerWithId() with id '"+id+"' completed");
      } else {
        console.log("startTrackerWithId() with id '"+id+"' skipped: analytics is undefined");
      }
    };

    this.$get = function() {
      return {
        trackView: function(screenTitle) {
          if (gaMobileAppTrackerId==null) {
            console.log("trackView() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.trackView(screenTitle);
          } else {
            console.log("trackView() skipped: analytics is undefined");
          }
        },
        trackEvent: function(category, action, label, value) {
          if (gaMobileAppTrackerId==null) {
            console.log("trackEvent() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.trackEvent(category, action, label, value);
          } else {
            console.log("trackEvent() skipped: analytics is undefined");
          }
        },
        addTransaction: function(id, affiliation, revenue, tax, shipping, currencyCode) {
          if (gaMobileAppTrackerId==null) {
            console.log("addTransaction() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.addTransaction(id, affiliation, revenue, tax, shipping, currencyCode);
          } else {
            console.log("addTransaction() skipped: analytics is undefined");
          }
        },
        addTransactionItem: function(id, name, sku, category, price, quantity, currencyCode) {
          if (gaMobileAppTrackerId==null) {
            console.log("addTransactionItem() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.addTransactionItem(id, name, sku, category, price, quantity, currencyCode);
          } else {
            console.log("addTransactionItem() skipped: analytics is undefined");
          }
        },
        setUserId: function(userId) {
          if (gaMobileAppTrackerId==null) {
            console.log("setUserId() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.setUserId(userId);
          } else {
            console.log("setUserId() skipped: analytics is undefined");
          }
        },
        debugMode: function() {
          if (gaMobileAppTrackerId==null) {
            console.log("debugMode() skipped: provider not initialized");
            return;
          }
          if (typeof analytics != "undefined") {
            analytics.debugMode();
          } else {
            console.log("debugMode() skipped: analytics is undefined");
          }
        }
      };
    };// $get end

});
