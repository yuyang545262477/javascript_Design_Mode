/*普通写法*/
(function () {
    // 'use strict';
    //写一个计算每月开销的函数
    var normal_example = function () {
        var monthlyCost = 0;

        var cost = function (money) {
            monthlyCost += money;
            console.log(monthlyCost);
        };
        cost(100);
        cost(200);
        cost(300);
        cost(400);
    };
    //   similar curring 的写法
    var similar_curring = function () {
        var cost = (function () {
            var args = [];

            return function () {
                if (arguments.length === 0) {
                    var money = 0;
                    for (var i = 0; i < args.length; i++) {
                        money += args[i];
                    }
                    console.log(money);
                    return money;

                } else {
                    Array.prototype.push.apply(args, arguments);
                }
            }


        })();
        cost(20);
        cost(30);
        cost();
    };
    // similar_curring();

    var true_curring = function () {
        var curring = function (fun) {
            var args = [];

            return function () {
                if (arguments.length === 0) {
                    return fun.apply(this, args);
                } else {
                    [].push.apply(args, arguments);
                    //noinspection JSAnnotator
                    return arguments.callee;
                }
            }
        };

        var cost = (function () {
            var money = 0;
            return function () {
                for (var i = 0, l = arguments.length; i < l; i++) {
                    money += arguments[i];
                }
                console.log(money);
                return money;
            }
        })();

        var Cost = curring(cost);
        Cost(100);
        Cost(100);
        Cost(100);
        Cost(100);
        Cost();
    };
    true_curring();


})();
