(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
//  This code block will be removed in `$ npm run build-release`. http://git.io/Minify
//var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev

// --- local variable --------------------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Sort() {
}

Sort["repository"] = "https://github.com/uupaa/Sort.js";

Sort["nat"]    = Sort_nat;    // Sort.nat(source:StringArray, ignoreCase:Boolean = false):StringArray
Sort["random"] = Sort_random; // Sort.random(source:Array):Array

// --- implement -------------------------------------------
function Sort_nat(source,       // @arg StringArray     - source. ["abc100", "abc1", "abc10"]
                  ignoreCase) { // @arg Boolean = false - true is case-insensitive
                                // @ret StringArray     - sorted array. ["abc1", "abc10", "abc100"]
                                // @desc nat sort
//{@dev
    _if(!Array.isArray(source), Sort_nat, "source");
    _if(ignoreCase !== undefined &&
        typeof ignoreCase !== "boolean", Sort_nat, "ignoreCase");
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

function Sort_random(source) { // @arg Array - source.
                               // @ret Array - sorted array.
                               // @desc random sort

//{@dev
    _if(!Array.isArray(source), Sort_random, "source");
//}@dev

    return source.sort(function() {
        return Math.round( Math.random() ) - 0.5;
    });
}

//{@dev
function _if(value, fn, hint) {
    if (value) {
        throw new Error(fn.name + " " + hint);
    }
}
//}@dev

// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = Sort;
}
global["Sort" in global ? "Sort_" : "Sort"] = Sort; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

