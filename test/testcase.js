var ModuleTestSort = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("Sort", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        testSort_NatSort1,
        testSort_NatSort2,
        testSort_NumberSort1,
        testSort_NumberSort2,
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        // browser and node-webkit test
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testSort_NatSort1(test, pass, miss) {
    var answer = ["a0", "a1", "a1a", "a1b", "a2", "a10", "a20", "111a222"];
    var random = WebModule.Sort.random(answer.slice());
    var sorted = WebModule.Sort.nat(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testSort_NatSort2(test, pass, miss) {
    var answer = [
        "1-2",
        "1-02",
        "1-20",
        "10-20",
        "fred",
        "jane",
        "pic01",
        "pic2",
        "pic02",
        "pic02a",
        "pic3",
        "pic4",
        "pic05",
        "pic 4 else",
        "pic 5",
        "pic 5 ",
        "pic 5 something",
        "pic 6",
        "pic   7",
        "pic100",
        "pic100a",
        "pic120",
        "pic121",
        "pic02000",
        "tom",
        "x2-g8",
        "x2-y7",
        "x2-y08",
        "x8-y8"
    ];
    var random = WebModule.Sort.random(answer.slice());
    var sorted = WebModule.Sort.nat(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testSort_NumberSort1(test, pass, miss) {
    var answer = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    var random = WebModule.Sort.random(answer.slice());
    var sorted = WebModule.Sort.number(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testSort_NumberSort2(test, pass, miss) {
    var answer = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 ];

    var random = WebModule.Sort.random(answer.slice());
    var sorted = WebModule.Sort.number(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

return test.run();

})(GLOBAL);

