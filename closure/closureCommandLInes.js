//使用闭包，来描写命令模式

(function () {
    'use strict';

    var TV = {
        open: function () {
            console.log('打开电视');
        },
        close: function () {
            console.log('关闭电视');
        }
    };

    var createCommand = function (receiver) {
        var execute = function () {
            receiver.open();
        };
        var undo = function () {
            receiver.close();
        };
        return {
            execute: execute,
            undo: undo
        }
    };

    var setCommand = function (command) {
        document.getElementById('execute').onclick = function () {
            command.execute();
        };
        document.getElementById('undo').onclick = function () {
            command.undo();
        }
    };

    setCommand(createCommand(TV));

})();