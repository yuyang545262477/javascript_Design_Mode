(function () {
    'use strict';
//    使用代理完成单例模式
    var createDiv = function (html) {
        this.html = html;
        this.init();
    };

    createDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };

    var ProxySingletonCreateDiv = (function () {
        var instance;

        return function (html) {
            if (!instance) {
                instance = new createDiv(html);
            }
            return instance;
        }
    })();

    var a = new ProxySingletonCreateDiv('seven1');

    var b = new ProxySingletonCreateDiv('seven2');

    alert(a === b);
})();