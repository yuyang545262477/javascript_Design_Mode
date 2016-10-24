(function () {
    'use strict';
    // 利用js 来处理浏览器事件差异
    var example_one = function () {
        //普通写法
        // 缺点：每次执行，都会重复判断，损耗性能
        var addEvent = function (elem, type, handler) {
            if (window.addEventListener) {
                return elem.addEventListener(type, handler, false);
            }
            if (window.attachEvent) {
                return elem.attachEvent('on' + type, handler);
            }
        };
        addEvent()
    };
    var example_two = function () {
        //第二种写法
        // 如果函数不调用，还是会执行一次。
        var addEvent = (function () {
            'use strict';
            if (window.addEventListener) {
                return function (elem, type, handler) {
                    elem.addEventListener(type, handler, false);
                }
            }
            if (window.attachEvent) {
                return function (elem, type, handler) {
                    elem.attachEvent('on' + type, handler);
                }
            }
        })();

        addEvent();
    };

    var example_three = function () {

        var addEvent = function (elem, type, handler) {
            if (window.addEventListener) {
                addEvent = function (elem, type, handler) {
                    elem.addEventListener(type, handler, false);
                }
            } else if (window.attachEvent) {
                addEvent = function (elem, type, handler) {
                    elem.attachEvent('on' + type, handler);
                }
            }

            addEvent(elem, type, handler);
        };

        var div = document.getElementById('div1');
        var div2 = document.getElementById('div2');

        addEvent(div, 'click', function () {
            console.log(1);
        });
        addEvent(div2, 'click', function () {
            console.log(2);
        })


    };
    example_three();


})();