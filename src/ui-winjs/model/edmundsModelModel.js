require("./edmundsModelYearModel.js");

WinJS.Namespace.define("EdmundsModel", {
    Model: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.name = payload.name;
        this.niceName = payload.niceName;
        for (var index in payload.years) {
            this.years.push(new EdmundsModelYear.ModelYear(payload.years[index]));
        }
    },
    {
        id: null,
        name: null,
        niceName: null,
        years: []
    })
});