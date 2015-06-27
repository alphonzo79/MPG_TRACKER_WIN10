(function () {
    "use strict";
    require(["../../model/fillupModel.js"]);

    MetroNode.sdk.view.define("/view/home/home.html",
        MetroNode.sdk["view-model"].home,
        {
            bindingReady: function () {
                var that = this;
                var mpgDisplay = document.getElementById("mpgDisplay");
                var fillup = new Fillup.Fillup();
                WinJS.Binding.processAll(mpgDisplay, fillup);
            },

            myClickHandler: function () {

            }
        });
})();
