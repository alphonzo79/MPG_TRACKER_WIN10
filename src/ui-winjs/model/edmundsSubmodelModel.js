WinJS.Namespace.define("EdmundsSubmodel", {
    Submodel: WinJS.Class.define(function (payload) {
        this.body = payload.body;
        this.modelName = payload.modelName;
        this.niceName = payload.niceName;
    },
    {
        body: null,
        modelName: null,
        niceName: null
    })
});