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
    
})();