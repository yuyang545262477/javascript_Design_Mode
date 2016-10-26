(function () {
    'use strict';
    // 透明的单例模式
    var createDiv = (function () {
        var instance;

        var createDiv = function (html) {
            if (instance) {
                return instance;
            }
            this.html = html;
            this.init();
            return instance = this;
        };

        createDiv.prototype.init = function () {
            var div = document.createElement('div');
            div.innerHTML = this.html;
            document.body.appendChild(div);
        };
        return createDiv;
    })();

    var a = new createDiv('seven1');
    var b = new createDiv('seven2');

    alert(a === b);


})();