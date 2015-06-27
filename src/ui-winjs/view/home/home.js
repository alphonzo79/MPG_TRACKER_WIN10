(function () {
    "use strict";
    require(["../../model/fillupModel.js"]);

    MetroNode.sdk.view.define("/view/home/home.html",
        MetroNode.sdk["view-model"].home,
        {
            bindingReady: function () {
                var that = this;
                var mpgDisplay = document.getElementById("mpgDisplay");
                var fillup = new Fillup.Fillup({
                    carId: 1234,
                    date: 123456789,
                    miles: 1834.98,
                    gallons: 43.6,
                    pricePerGallon: 2.99,
                    totalCost: 124.56
                });
                WinJS.Binding.processAll(homepageLatest, fillup);
            },

            myClickHandler: function () {

            }
        });
})();
