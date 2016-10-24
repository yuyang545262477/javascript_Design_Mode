(function () {
    'use strict';

    var example_one = function () {
        //    通常情况
        var ary = [];

        for (var i = 0; i <= 1000; i++) {
            ary.push(i);
        }

        var renderFriendsList = function (data) {
            for (var i = 0, l = data.length; i < l; i++) {
                var div = document.createElement('div');
                div.innerHTML = i;
                document.body.appendChild(div);
            }

        };
        renderFriendsList(ary);

    };

    var example_two = function () {
        var timeChunk = function (ary, fn, count) {

            var obj, t;

            var length = ary.length;

            var start = function () {
                for (var i = 0; i < Math.min(count || 1, length); i++) {
                    obj = ary.shift();
                    fn(obj);
                }
            };

            return function () {
                t = setInterval(function () {
                    if (ary.length === 0) {
                        return clearInterval(t);
                    }
                    start();
                }, 200);
            }
        };

        var ary = [];
        for (var i = 0; i <= 1000; i++) {
            ary.push(i);
        }

        var renderFriendsList = timeChunk(ary, function (n) {
            var div = document.createElement('div');
            div.innerHTML = n;
            document.body.appendChild(div);
        }, 8);

        renderFriendsList();

    };
    example_two();
    // example_one()


})();