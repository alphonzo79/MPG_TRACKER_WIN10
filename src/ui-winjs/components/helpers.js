﻿(function () {
    WinJS.Namespace.define("App.UI.WinJS.Helpers", {
        registerBindingMode: function () {
            // Relay Command Binding
            window.Binding = window.Binding || {};
            window.Binding.Mode = window.Binding.Mode || {};
            window.Binding.Mode.Command =
            WinJS.Binding.initializer(function (source, sourceProps, dest, destProps) {
                var eventSource = dest;
                var command = source;
                var sourceItems = destProps.length;
                var destItems = sourceProps.length;
                for (var i = 0; i < sourceItems - 1; i++) {
                    eventSource = eventSource[destProps[i]];
                }
                for (var x = 0; x < destItems; x++) {
                    command = command[sourceProps[x]];
                }

                //Subscribes the event
                eventSource[destProps[sourceItems - 1]] = function () {
                    if (!WinJS.Utilities.hasClass('win-command-disabled')) {
                        command["execute"].call(source, dest);
                    }
                };

                //monitors canExecute
                if (command["canExecute"] && !command["canExecute"].value)
                    command["canExecute"] = WinJS.Binding.as({ value: command["canExecute"] });
                command["canExecute"].bind("value", function (isEnabled) {
                    if (isEnabled) {
                        WinJS.Utilities.removeClass(eventSource, 'win-command-disabled');
                    } else {
                        WinJS.Utilities.addClass(eventSource, 'win-command-disabled');
                    }
                });
            });
        },

        markForProcessing: function (subject) {
            var _self = this;
            for (var _property in subject)
                if (subject.hasOwnProperty(_property)) {
                    if (typeof subject[_property] == "object")
                        _self.markForProcessing(subject[_property]);
                    else
                        if (subject[_property] instanceof Function) {
                            WinJS.Utilities.markSupportedForProcessing(subject[_property]);
                        }
                }
        }
    });
})();
