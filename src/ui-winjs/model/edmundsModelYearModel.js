require("./edmundsStyle.js");

WinJS.Namespace.define("EdmundsModelYear", {
    ModelYear: WinJS.Class.define(function (payload) {
        this.id = payload.id;
        this.year = payload.year;
        for (var index in payload.styles) {
            this.styles.push(new EdmundsStyle.Style(payload.styles[index]));
        }
    },
    {
        id: null,
        year: null,
        styles: []
    })
});