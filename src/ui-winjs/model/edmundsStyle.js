require("./edmundsSubmodelModel.js");

WinJS.Namespace.define("EdmundsStyle", {
    Style: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.name = payload.name;
        this.submodel = new EdmundsSubmodel.Submodel(payload.submodel);
        this.trim = payload.trim;
    },
    {
        id: null,
        name: null,
        submodel: null,
        trim: null
    })
});