var baseViewModel = require('./base.node'),
      relayCommand = require('../command/relay.node'),
      main = require("../main.node"),
      classHelper = require('../helper/class.node');

// Constructor
function addVehicleViewModel(options) {
}

var instanceMembers = {
    onDataSet: function () {
        baseViewModel.prototype.onDataSet.call(this, arguments);

        this.dispatchEvent('loaded');
    },
    navigateToAboutCommand: {
        get: function () {
            var that = this;
            return new relayCommand(function () {
                var messageService = main.getComponent("messageService");
                messageService.send("NavigateToMessage", {
                    viewKey: "about"
                });
            });
        }
    }
};

module.exports = classHelper.derive(baseViewModel,
    addVehicleViewModel, instanceMembers);