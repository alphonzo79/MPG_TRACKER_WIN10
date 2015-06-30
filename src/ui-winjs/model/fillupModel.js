WinJS.Namespace.define("Fillups", {
    Fillup: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.carId = payload.carId;
        this.dateLong = payload.date;
        this.milesFloat = payload.miles;
        this.gallonsFloat = payload.gallons;
        this.pricePerGallon = payload.pricePerGallon;
        this.totalCost = payload.totalCost;
        this.displayMileage = this.figureDisplayMileage();
        this.displayDate = this.figureDisplayDate();
    },
        {
            id: null,
            carId: null,
            dateLong: null,
            milesFloat: null,
            gallonsFloat: null,
            pricePerGallon: null,
            totalCost: null,
            displayMileage: null,
            displayDate: null,

            figureDisplayMileage: function () {
                result = 0;

                if (this.milesFloat != null && this.gallonsFloat != null) {
                    result = this.milesFloat / this.gallonsFloat;
                    result = result.toFixed(2)
                }

                return result;
            },

            figureDisplayDate: function () {
                result = "";

                if (this.dateLong != null) {
                    var dateObj = new Date(this.dateLong);
                    var options = {
                        month: "short",
                        day: "numeric"
                    };
                    var locale = Windows.Globalization.ApplicationLanguages.languages[0];
                    result = dateObj.toLocaleDateString(locale, options);
                }

                return result;
            }
        })
});