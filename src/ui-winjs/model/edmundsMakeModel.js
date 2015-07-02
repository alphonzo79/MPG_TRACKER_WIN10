require("./edmundsModelModel.js");

WinJS.Namespace.define("EdmundsMake", {
    Make: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.name = payload.name;
        this.niceName = payload.niceName;
        for (var index in payload.models) {
            this.models.push(new EdmundsModel.Model(payload.models[index]));
        }
    },
    {
        id: null,
        name: null,
        niceName: null,
        models: []
    })
});