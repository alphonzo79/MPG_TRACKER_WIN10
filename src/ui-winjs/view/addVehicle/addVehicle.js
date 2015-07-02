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

    var makesList = [];
    WinJS.Namespace.define("MakesForYear", {
        makes: null
    });

    var modelsList = [];
    WinJS.Namespace.define("ModelsForMake", {
        models: null
    });

    var trimsList = [];
    WinJS.Namespace.define("TrimsForModel", {
        trims: null
    });

    MetroNode.sdk.view.define("/view/addVehicle/addVehicle.html",
        MetroNode.sdk["view-model"].addVehicle,
    {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var that = this;

            yearSelect.addEventListener("change", this.setUpMakesForYear, false);

            WinJS.UI.processAll();
        },

        setUpMakesForYear: function (eventInfo) {
            //Clear out dependents in case they have previously been populated or chosen
            ModelsForMake.models = null;
            TrimsForModel.trims = null;

            //todo: get the makes for this year 
            var networkProvider = MetroNode.sdk.helper.ioc.get("networkProvider");
            var getMakesUrl = "";
            networkProvider.get(getMakesUrl, function (error, result) {
                console.log("Error: " + error);
                console.log("Result: " + result);
            });
            //todo
        }
    });
})();
