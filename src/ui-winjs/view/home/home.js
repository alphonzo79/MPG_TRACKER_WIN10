(function () {
    "use strict";
    require(["../../model/fillupModel.js"]);
    require(["../../model/vehicleModel.js"]);

    MetroNode.sdk.view.define("/view/home/home.html",
        MetroNode.sdk["view-model"].home,
        {
            bindingReady: function () {
                var that = this;
                var dataService = MetroNode.sdk.helper.ioc.get("dataService");
                dataService.load(function (err) {
                    if (err) {
                        WinJS.log(err);
                    } else {
                        var vehicles = dataService.vehiclesCollection;
                        var fillups = dataService.fillupsCollection;
                        if (vehicles != null && vehicles.data.length > 0) {
                            if (fillups != null && fillups.data.length > 0) {
                                homepageNoData.style.display = "none";
                                homepageNoData.style.visibility = "hidden";
                                homepageLatest.style.visibility = "visible";
                            } else {
                                homepageNoData.style.visibility = "visible";
                                homepageLatest.style.visibility = "hidden";
                                homepageLatest.style.display = "none";
                                noDataHeader.innerText = WinJS.Resources.getString("no_data_dashboard_header").value;
                                noDataMessage.innerText = WinJS.Resources.getString("no_data_dashboard_text").value;
                                //todo
                            }
                        } else {
                            homepageNoData.style.visibility = "visible";
                            homepageLatest.style.display = "none";
                            homepageLatest.style.visibility = "hidden";
                            noDataHeader.innerText = WinJS.Resources.getString("no_nehicles_header").value;
                            noDataMessage.innerText = WinJS.Resources.getString("no_nehicles_message").value;
                        }
                    }
                });
                /*
                var fillupsCollection = db.addCollection('fillups');
                fillupsCollection.insert({
                    carId: 1234,
                    date: 123456789,
                    miles: 1834.98,
                    gallons: 43.6,
                    pricePerGallon: 2.99,
                    totalCost: 124.56
                }); */
                //todo get real data. This is just placeholder for now
                //var fillup = new Fillups.Fillup(fillupsCollection.find({carId: 1234}));
                //WinJS.Binding.processAll(mpgDisplay, fillup);
                //WinJS.Binding.processAll(dateLabel, fillup);

                var vehicle = new Vehicles.Vehicle({
                    id: 1234,
                    year: 2000,
                    make: "Toyota",
                    model: "Sienna",
                    trim: "",
                    trimId: 1234,
                    isCustom: false
                });
                WinJS.Binding.processAll(vehicleName, vehicle);
            },

            myClickHandler: function () {

            }
        });
})();
