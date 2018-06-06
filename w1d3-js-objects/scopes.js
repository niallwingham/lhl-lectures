var x = 10
var n = { count: 15 }

function addOne_noParams() {
    x = x + 1;
}

function addOne_withParams(n) {
    n.count = 16
}

function addOne_withParams_butReassign(n) {
    n = { count: 14 }
}
