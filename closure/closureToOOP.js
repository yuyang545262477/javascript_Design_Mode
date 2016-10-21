/*用闭包来实现面向对象*/



// closure的写法
(function () {
    'use strict';
    var Extent = function () {
        var value = 0;
        return {
            call: function () {
                value++;
                console.log(value);
            }
        }
    };
    var extent = Extent();
    //
    // extent.call();
    // extent.call();
    // extent.call();
    // extent.call();
})();


//面向对象写法 一
(function () {
    'use strict';

    var extent = {
        value: 0,
        call: function () {
            this.value++;
            console.log(this.value);
        }
    };
    // extent.call();
})();

//面向对象的写法 二
(function () {
    'use strict';

    var Extent = function () {
        this.value = 0;
    };

    Extent.prototype.call = function () {
        this.value++;
        console.log(this.value);
    };

    var _extent = new Extent();

    _extent.call()
})();



