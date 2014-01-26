// @name: Sort.js

(function(global) {

// --- variable --------------------------------------------
var _inNode = "process" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Sort() { // @help: Sort
}

Sort["name"] = "Sort";
Sort["repository"] = "https://github.com/uupaa/Sort.js";

Sort["nat"]    = natSort;      // Sort.nat(source:StringArray, ignoreCase:Boolean = false):StringArray
Sort["random"] = randomSort;   // Sort.random(source:Array):Array

// --- implement -------------------------------------------
function natSort(source,       // @arg StringArray: source. ["abc100", "abc1", "abc10"]
                 ignoreCase) { // @arg Boolean(= false): true is case-insensitive
                               // @ret StringArray: sorted array. ["abc1", "abc10", "abc100"]
                               // @help: Sort.nat
                               // @desc: nat sort
//{@assert
    _if(!Array.isArray(source), "invalid Sort.nat(source)");
    if (ignoreCase !== undefined) {
        _if(typeof ignoreCase !== "boolean", "invalid Sort.nat(,ignoreCase)");
    }
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

function randomSort(source) { // @arg Array: source.
                              // @ret Array: sorted array.
                              // @help: Sort.random
                              // @desc: random sort

//{@assert
    _if(!Array.isArray(source), "invalid Sort.random(source)");
//}@assert

    return source.sort(function(a, b) {
        return Math.round( Math.random() ) - 0.5;
    });
}

//{@assert
function _if(booleanValue, errorMessageString) {
    if (booleanValue) {
        throw new Error(errorMessageString);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = Sort;
}
//}@node
global["Sort"] ? (global["Sort_"] = Sort) // already exsists
               : (global["Sort"]  = Sort);

})(this.self || global);

