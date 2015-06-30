var WinJSStorageProvider = function (options) {

}
var members = {
    save: function (key, contentString, callback) {
        WinJS.Application.local.writeText(key, contentString).then(callback);
    },
    fetch: function (key, callback) {
        WinJS.Application.local.readText(key, null).then(function (result) {
            if (result == null) {
                callback('does-not-exist');
            } else {
                callback(null, result);
            }
        });
    },
    list: function (callback) {
        return callback('not-implemented');
    },
    clear: function (callback) {
        return callback('not-implemented');
    },
    exists: function (key, callback) {
        WinJS.Application.local.exists(key).then(function (result) {
            callback(null, result != null);
        });
    }
}

var classDefinition = MetroNode.sdk.helper.class.define(WinJSStorageProvider, members);
MetroNode.sdk.main.overrideComponent("storageProvider", classDefinition);