new Test().add([
        testNatSort1,
        testNatSort2,
    ]).run().worker(function(err, test) {
        if (!err && typeof Sort_ !== "undefined") {
            Sort = Sort_;
            new Test(test).run().worker();
        }
    });

function testNatSort1(taskRunner) {
    var answer = ["a0", "a1", "a1a", "a1b", "a2", "a10", "a20", "111a222"];
    var random = Sort.random(answer.slice());
    var sorted = Sort.nat(random.slice());

    if ( answer + "" === sorted + "" ) {
        console.log("testNatSort1 ok");
        taskRunner && taskRunner.pass();
    } else {
        console.error("testNatSort1 ng");
        taskRunner && taskRunner.miss();
    }
}
function testNatSort2(taskRunner) {
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
        console.log("testNatSort2 ok");
        taskRunner && taskRunner.pass();
    } else {
        console.error("testNatSort2 ng");
        taskRunner && taskRunner.miss();
    }
}


