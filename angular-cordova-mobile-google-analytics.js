angular.module('angular-cordova-mobile-google-analytics', [])
.provider('mobileAnalytics', function() {
    var gaMobileAppTrackerId = null;

    this.startTrackerWithId = function(id) {
      gaMobileAppTrackerId = id;
      if (typeof window.analytics != "undefined") {
        window.analytics.startTrackerWithId(id);
        console.log("startTrackerWithId() with id '"+id+"' completed");
      } else {
        console.log("startTrackerWithId() with id '"+id+"' skipped: window.analytics is undefined");
      }
    };

    this.$get = function() {
      return {
        trackView: function(screenTitle) {
          if (gaMobileAppTrackerId==null) {
            console.log("trackView() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.trackView(screenTitle);
          } else {
            console.log("trackView() skipped: window.analytics is undefined");
          }
        },
        trackEvent: function(category, action, label, value) {
          if (gaMobileAppTrackerId==null) {
            console.log("trackEvent() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.trackEvent(category, action, label, value);
          } else {
            console.log("trackEvent() skipped: window.analytics is undefined");
          }
        },
        trackException: function(description, fatal) {
          if (gaMobileAppTrackerId==null) {
            console.log("trackException() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.trackException(description, fatal);
          } else {
            console.log("trackException() skipped: window.analytics is undefined");
          }
        },
        addTransaction: function(id, affiliation, revenue, tax, shipping, currencyCode) {
          if (gaMobileAppTrackerId==null) {
            console.log("addTransaction() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.addTransaction(id, affiliation, revenue, tax, shipping, currencyCode);
          } else {
            console.log("addTransaction() skipped: window.analytics is undefined");
          }
        },
        addTransactionItem: function(id, name, sku, category, price, quantity, currencyCode) {
          if (gaMobileAppTrackerId==null) {
            console.log("addTransactionItem() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.addTransactionItem(id, name, sku, category, price, quantity, currencyCode);
          } else {
            console.log("addTransactionItem() skipped: window.analytics is undefined");
          }
        },
        addCustomDimension: function(key, value, onSuccess, onError) {
        	if (gaMobileAppTrackerId==null) {
                console.log("addCustomDimension() skipped: provider not initialized");
                return;
              }
              if (typeof window.analytics != "undefined") {
                window.analytics.addCustomDimension(key, value, onSuccess, onError);
              } else {
                console.log("addCustomDimension() skipped: window.analytics is undefined");
              }
        },
        setUserId: function(userId) {
          if (gaMobileAppTrackerId==null) {
            console.log("setUserId() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.setUserId(userId);
          } else {
            console.log("setUserId() skipped: window.analytics is undefined");
          }
        },
        debugMode: function() {
          if (gaMobileAppTrackerId==null) {
            console.log("debugMode() skipped: provider not initialized");
            return;
          }
          if (typeof window.analytics != "undefined") {
            window.analytics.debugMode();
          } else {
            console.log("debugMode() skipped: window.analytics is undefined");
          }
        }
      };
    };// $get end

});
