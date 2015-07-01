(function () {
    "use strict";

    var yearsList = [];
    (function populateYearsArray() {
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1990; i--) {
            yearsList.push({ id: i, description: i });
        };
        yearsList.push({ id: 0, description: "Select A Year" });
    })();

    WinJS.Namespace.define("Years", {
        items: new WinJS.Binding.List(yearsList)
    });

    MetroNode.sdk.view.define("/view/addVehicle/addVehicle.html",
        MetroNode.sdk["view-model"].addVehicle,
    {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        bindingReady: function (element, options) {
            var that = this;
            WinJS.UI.processAll();
        }
    });
})();
