(function () {
    'use strict';

//    单例实现方式二
    var SingleTon = function (name) {
        this.name = name;
    };
    SingleTon.prototype.getName = function () {
        alert(this.name);
    };

    SingleTon.getInstance = (function () {
        var instance = null;

        return function (name) {
            if (!instance) {
                instance = new SingleTon(name);
            }
            return instance;
        };
    })();

    var a = SingleTon.getInstance('yu');
    var b = SingleTon.getInstance('yang');

    alert(a === b);


})();