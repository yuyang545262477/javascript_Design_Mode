/*一个简单的例子，讲解scope*/
var example_simple = function () {
    'use strict';
//    生命周期
    var func = function () {
        var a = 1;
        console.log(a);
    };
    func();
    console.log(a); // a is not defined;
};
// example_simple();
/*一个复杂的例子，加深对scope的理解*/
var example_complicacy = function () {
    var a = 1;

    var fun1 = function () {
        var b = 2;

        var fun2 = function () {
            var c = 3;
            console.log(b); // 2
            console.log(a); // 1
        };

        fun2();
        console.log(c); // c is not defined


    };
    fun1();

};

example_complicacy();