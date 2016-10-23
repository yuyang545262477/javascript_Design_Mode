var example_one = function () {
// 如何让一个对象，调用不属于自己的方法
// 答案：apply ,call 

    var obj1 = {
        name: 'even'
    };

    var object2 = {
        getName: function () {
            return this.name;
        }
    };

    console.log(object2.getName.call(obj1));
};

// example_one();

var example_two = function () {
    (function () {
        Array.prototype.push.call(arguments, 5);
        console.log(arguments);
    })(1, 2, 3, 4);
};

// example_two();

var example_three = function () {
//   将泛化的this 提取出来的过程
    Function.prototype.uncurring = function () {
        var self = this;

        return function () {
            var obj = Array.prototype.shift.call(arguments);
            return self.apply(obj, arguments);
        }
    };

    // var push = Array.prototype.push.uncurring();
    //
    // (function () {
    //     push(arguments, 4);
    //     console.log(arguments);
    // })(1, 2, 3);

    for (var i = 0, fn, ary = ['push', 'shift', 'forEach']; fn = ary[i++];) {
        Array[fn] = Array.prototype[fn].uncurring();
    }

    var obj = {
        'length': 3,
        '0': 1,
        '1': 2,
        '2': 3
    };

    Array.push(obj, 4);
    console.log(obj.length);

    var first = Array.shift(obj);
    console.log(first);

    Array.forEach(obj, function (i, n) {
        console.log('n', n);
    })


};
example_three();
