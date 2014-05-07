// @name: Sort.js
// @require: none
// @cutoff: @assert @node

(function(global) {
"use strict";

// --- variable --------------------------------------------
var _inNode = "process" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Sort() { // @help: Sort
}

Sort["repository"] = "https://github.com/uupaa/Sort.js";

Sort["nat"]    = Sort_nat;    // Sort.nat(source:StringArray, ignoreCase:Boolean = false):StringArray
Sort["random"] = Sort_random; // Sort.random(source:Array):Array

// --- implement -------------------------------------------
function Sort_nat(source,       // @arg StringArray: source. ["abc100", "abc1", "abc10"]
                  ignoreCase) { // @arg Boolean(= false): true is case-insensitive
                                // @ret StringArray: sorted array. ["abc1", "abc10", "abc100"]
                                // @help: Sort.nat
                                // @desc: nat sort
//{@assert
    _if(!Array.isArray(source), Sort.nat, "source");
    _if(ignoreCase !== undefined &&
        typeof ignoreCase !== "boolean", Sort.nat, "ignoreCase");
//}@assert

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

function Sort_random(source) { // @arg Array: source.
                               // @ret Array: sorted array.
                               // @help: Sort.random
                               // @desc: random sort

//{@assert
    _if(!Array.isArray(source), Sort.random, "source");
//}@assert

    return source.sort(function() {
        return Math.round( Math.random() ) - 0.5;
    });
}

//{@assert
function _if(value, fn, hint) {
    if (value) {
        var msg = fn.name + " " + hint;

        // console.error(Valid.stack(msg));
        // if (global["Help"]) {
        //     global["Help"](fn, hint);
        // }
        throw new Error(msg);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = Sort;
}
//}@node
if (global["Sort"]) {
    global["Sort_"] = Sort; // secondary
} else {
    global["Sort"]  = Sort; // primary
}

})((this || 0).self || global);

