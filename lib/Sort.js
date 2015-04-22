(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _isNodeOrNodeWebKit = !!global.global;
//var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
//var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
//var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
//var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

// --- class / interfaces ----------------------------------
var Sort = {
    "nat":          Sort_nat,       // Sort.nat(source:StringArray, ignoreCase:Boolean = false):StringArray
    "number":       Sort_number,    // Sort.number(source:NumberArray):NumberArray
    "random":       Sort_random,    // Sort.random(source:Array):Array
//{@dev
    "repository":   "https://github.com/uupaa/Sort.js",
//}@dev
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

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if (typeof module !== "undefined") {
    module["exports"] = Sort;
}
global["Sort" in global ? "Sort_" : "Sort"] = Sort; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

