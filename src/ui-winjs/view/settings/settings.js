(function () {
    "use strict";

    //var vehiclesArray = [
    //            //{ text: "My Vehicles" },
    //            //{ text: "About MPG Tracker" }
    //];

    //WinJS.Namespace.define("Settings.ListView", {
    //    data: new WinJS.Binding.List(vehiclesArray)
    //});

    MetroNode.sdk.view.define("/view/settings/settings.html",
        MetroNode.sdk["view-model"].settings,
    {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        bindingReady: function (element, options) {
            var that = this;

            //WinJS.UI.processAll();
        }
    });
})();
