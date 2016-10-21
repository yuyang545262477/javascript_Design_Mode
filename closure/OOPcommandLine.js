// 面向对象的方式，来描写命令模式
(function () {
    'use strict';

    var TV = {
        open: function () {
            console.log('打开电视');
        },
        close: function () {
            console.log('关上电视');
        }
    };

    var OpenTvCommand = function (receiver) {
        this.receiver = receiver;
    };

    OpenTvCommand.prototype.execute = function () {
        this.receiver.open();
    };
    OpenTvCommand.prototype.undo = function () {
        this.receiver.close();
    };

    var setCommand = function (command) {
        document.getElementById('execute').onclick = function () {
            command.execute();
        };
        document.getElementById('undo').onclick = function () {
            command.undo();
        }
    };

    setCommand(new OpenTvCommand(TV));


})();