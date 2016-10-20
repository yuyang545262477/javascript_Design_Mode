/*生命周期案例*/
(function () {
    'use strict';
    var example_simple = function () {
        var a = 1;
        console.log(a);
    };
    // example_simple(); // 此函数执行完成后，变量a及被垃圾回收

    var example_complicacy = function () {
        var a = 1;
        return function () {
            a++;
            console.log(a);
        }
    };

    var f = example_complicacy();
    f();
    f();
    f();
    f();
    f();

})();    

