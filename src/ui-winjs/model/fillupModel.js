WinJS.Namespace.define("Fillup", {
    Fillup: WinJS.Class.define(function () { },
        {carId: null,
        dateLong: null,
        milesFloat: null,
        gallonsFloat: null,
        pricePerGallon: null,
        totalCost: null,

        displayMileage: function () {
                result = 0;

                if (this.milesFloat != null && this.gallonsFloat != null) {
                    result = this.milesFloat / this.gallonsFloat;
                }

                return result;
            }
        })
});