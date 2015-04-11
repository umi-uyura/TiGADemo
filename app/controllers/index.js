function doClick(e) {
  alert($.label.text);
  tracker.trackEvent({
    category: 'Home',
    action: 'click',
    label: 'label1',
    value: 1
  });
}

$.index.open();

var GA = require('analytics.google');

GA.trackUncaughtExceptions = true;
GA.optOut = false;
GA.dryRun = false;
GA.dispatchInterval = 15;

Ti.API.info('USING TRACKING ID: ' + Alloy.CFG.trackingId);
var tracker = GA.getTracker(Alloy.CFG.trackingId);

tracker.trackScreen({
  screenName: 'Home Screen'
});
