(function () {
    'use strict';
//    one simple closure example

    /*    var one_simple_closure = function () {
     var Type = {};
     for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
     (function (type) {
     Type['is' + type] = function (obj) {
     return Object.prototype.toString.call(obj) === '[object' + type + ']';
     }
     })(type);
     }

     Type.isArray([]);
     Type.isString('str');
     };
     one_simple_closure();*/

//    闭包的作用 --> 封装变量
    /*计算✖️级*/
    var example_one = function () {
        var mult = function () {
            var a = 1;
            for (var i = 0, l = arguments.length; i < l; i++) {
                a = a * arguments[i];
            }
            return a;
        }
    };
    /*每次都会进行计算，所以进行缓存优化*/
    var example_two = function () {
        var cache = {};

        var mult = function () {
            var args = Array.prototype.join.call(arguments, ',');
            if (cache[args]) {
                return cache[args];
            }

            var a = 1;
            for (var i = 0; i < arguments.length; i++) {
                a = arguments[i];
            }

            return cache[args] = a;
        };

        console.log(mult(1, 2, 3));
        console.log(mult(4, 5, 6));
    };
    /*对缓存进行优化，避免全局作用域*/
    var example_three = function () {
        var mult = (function () {

            var cache = {};
            return function () {
                var args = Array.prototype.join.call(arguments, ',');
                if (cache[args]) return cache[args];

                var a = 1;
                for (var i = 0; i < arguments.length; i++) {
                    a = a * arguments[i];
                }
                return cache[args] = a;
            }

        })();
        console.log(mult(1, 4, 3));
    };
    /*提炼函数，进行代码重构*/
    var example_four = function () {
        var mult = (function () {
            var cache = {};
            var calculate = function () {
                var a = 1;
                for (var i = 0; i < arguments.length; i++) {
                    a = a * arguments[i];
                }
                return a;
            };
            return function () {
                var args = Array.prototype.join.call(arguments, ',');
                if (cache[args]) return cache[args];
                return cache[args] = calculate.apply(null, arguments);
            }
        })();
        console.log(mult(1, 2, 3, 4, 5));
        console.log(mult(1, 2, 3, 4, 5));
        console.log(mult(1, 2, 3, 4, 5));
        console.log(mult(1, 2, 3, 4, 5));
    };
    example_four();

})();