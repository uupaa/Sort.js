var ModuleTestSort = (function(global) {

var _isNodeOrNodeWebKit = !!global.global;
var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

var test = new Test("Sort", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
    }).add([
        testNatSort1,
        testNatSort2,
        testNumberSort1,
        testNumberSort2,
    ]);

function testNatSort1(test, pass, miss) {
    var answer = ["a0", "a1", "a1a", "a1b", "a2", "a10", "a20", "111a222"];
    var random = Sort.random(answer.slice());
    var sorted = Sort.nat(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testNatSort2(test, pass, miss) {
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
    var random = Sort.random(answer.slice());
    var sorted = Sort.nat(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testNumberSort1(test, pass, miss) {
    var answer = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    var random = Sort.random(answer.slice());
    var sorted = Sort.number(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testNumberSort2(test, pass, miss) {
    var answer = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 ];

    var random = Sort.random(answer.slice());
    var sorted = Sort.number(random.slice());

    if ( answer + "" === sorted + "" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

return test.run().clone();

})((this || 0).self || global);

