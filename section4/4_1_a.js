(function () {
    'use strict';
    //    传统单例实现方式一
    var singTon = function (name) {
        this.name = name;
        this.instance = null;
    };

    singTon.prototype.getName = function () {
        alert(this.name);
    };

    singTon.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new singTon(name);
        }
        return this.instance;
    };


    var a = singTon.getInstance('yu');
    var b = singTon.getInstance('yang');

    alert(a === b);

})();