(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("Sort", function moduleClosure(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var Sort = {
    "nat":          Sort_nat,       // Sort.nat(source:StringArray, ignoreCase:Boolean = false):StringArray
    "number":       Sort_number,    // Sort.number(source:NumberArray):NumberArray
    "random":       Sort_random,    // Sort.random(source:Array):Array
    "repository":   "https://github.com/uupaa/Sort.js",
};

// --- implements ------------------------------------------
function Sort_nat(source,       // @arg StringArray     - source. ["abc100", "abc1", "abc10"]
                  ignoreCase) { // @arg Boolean = false - true is case-insensitive
                                // @ret StringArray     - sorted array. ["abc1", "abc10", "abc100"]
                                // @desc nat sort
//{@dev
    if (!global["BENCHMARK"]) {
        $valid($type(source,     "StringArray"),  Sort_nat, "source");
        $valid($type(ignoreCase, "Boolean|omit"), Sort_nat, "ignoreCase");
    }
//}@dev

    function toNumberArray(str) {
        return str.split(/(\d+)/).reduce(function(prev, next) {
                    if (next !== "") {
                        if (isNaN(next)) {
                            next.split("").forEach(function(v) {
                                prev.push( v.charCodeAt(0) );
                            });
                        } else {
                            prev.push(+next);
                        }
                    }
                    return prev;
                }, []);
    }

    var cache = {}; // { keyword: [number, ...], ... }

    return source.sort(function(a, b) {
        var aa, bb;

        if (a in cache) {
            aa = cache[a];
        } else {
            cache[a] = aa = toNumberArray( ignoreCase ? a.toLowerCase() : a );
        }
        if (b in cache) {
            bb = cache[b];
        } else {
            cache[b] = bb = toNumberArray( ignoreCase ? b.toLowerCase() : b );
        }
        var x = 0, y = 0, i = 0, iz = aa.length;

        for (; i < iz; ++i) {
            x = aa[i] || 0;
            y = bb[i] || 0;
            if (x !== y) {
                return x - y;
            }
        }
        return a.length - b.length;
    });
}

function Sort_random(source) { // @arg Array - [1, 2, 3]
                               // @ret Array - [?, ?, ?]
                               // @desc random sort

//{@dev
    if (!global["BENCHMARK"]) {
        $valid($type(source, "Array"), Sort_random, "source");
    }
//}@dev

    return source.sort(function() {
        //return Math.round( Math.random() ) - 0.5;
        return (Math.random() * 2) & 1;
    });
}

function Sort_number(source) { // @arg NumberArray - [3, 2, 1]
                               // @ret NumberArray - [1, 2, 3]
                               // @desc to sort in ascending order.
//{@dev
    if (!global["BENCHMARK"]) {
        $valid($type(source, "NumberArray"), Sort_number, "source");
    }
//}@dev

    return source.sort(function(a, b) {
        return a - b;
    });
}

return Sort; // return entity

});

