var LokiCatalogProvider = function (options) {

}
var members = {
    update: function (db, callback) {
        return this._hydrate(db, callback);
    },

    build: function (db, callback) {
        db.addCollection("vehicles");
        db.addCollection("fillups");
        return this._hydrate(db, callback);
    },

    _hydrate: function (db, callback) {
        var that = this;
        /* Don't do anything right now. May nee to know what this did at a later time... ??
        var catalogueProvider = ioc.get("catalogueProvider");
        async.waterfall([
                     function (cb) {
                         catalogueProvider.fetchFeedConfig({}, function (err, resp) {
                             if (err)
                                 return cb(err);

                             resp.events.forEach(function (e) {
                                 var feedSourceKeys = [];

                                 // create event feed sources
                                 e.feeds.forEach(function (f) {
                                     var item = db.getCollection("feedSources").findOne({
                                         key: f
                                     });
                                     if (!item) {
                                         item = db.getCollection("feedSources").insert(new feedSourceModel({
                                             key: f,
                                             address: f
                                         }));
                                     }
                                     feedSourceKeys.push(item.key);
                                 });

                                 // create event record
                                 var eventItem = db.getCollection("events").findOne({
                                     key: e.name
                                 });
                                 if (!eventItem)
                                     eventItem = db.getCollection("events").insert(new eventModel({
                                         key: e.name,
                                         name: e.name,
                                         feedSources: feedSourceKeys
                                     }));
                             });
                             return cb();
                         });
                     }
        ],
                 function (err) {
                     that._hydrating = false;
                     return callback(err);
                 });*/
        return callback();
    }
}

var classDefinition = MetroNode.sdk.helper.class.define(LokiCatalogProvider, members);
MetroNode.sdk.main.overrideComponent("lokiCatalogueProvider", classDefinition);