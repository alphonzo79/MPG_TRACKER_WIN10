WinJS.Namespace.define("Vehicles", {
    Vehicle: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.year = payload.year;
        this.make = payload.make;
        this.model = payload.model;
        this.trim = payload.trim;
        this.trimId = payload.trimId;
        this.isCustom = payload.isCustom;
        this.displayName = this.createDisplayName();
    },
        {
            id: null,
            year: null,
            make: null,
            model: null,
            trim: null,
            trimId: null,
            isCustom: false,
            displayName: null,

            createDisplayName: function () {
                var result = "";

                if (this.year) {
                    result = result + this.year;
                }
                if (this.make) {
                    if (result.length > 0) {
                        result = result + " ";
                    }
                    result = result + this.make;
                }
                if (this.model) {
                    if (result.length > 0) {
                        result = result + " ";
                    }
                    result = result + this.model;
                }

                return result;
            }
        })
});