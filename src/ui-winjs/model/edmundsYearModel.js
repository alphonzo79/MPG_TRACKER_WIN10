require("./edmundsMakeModel.js");

WinJS.Namespace.define("EdmundsYear", {
    Year: WinJS.Class.define(function (payload) {
        for (var index in payload.makes) {
            this.makes.push(new EdmundsMake.Make(payload.makes[index]));
        }
        this.makesCount = payload.makesCount;
    },
    {
        makes: [],
        makesCount: null
    })
});