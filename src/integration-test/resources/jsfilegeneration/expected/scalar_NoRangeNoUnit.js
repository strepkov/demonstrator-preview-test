var Module = {
    'print': function (text) {
        console.log('stdout: ' + text)
    },
    'printErr': function (text) {
        console.log('stderr: ' + text)
    },
    onRuntimeInitialized: function () {
        Module.init();
    }
};

function execute() {
    Module.execute();
}

function getOutNoRangeNoUnit() {
    return math.format(Module.getOutNoRangeNoUnit(), {notation: 'fixed'});
}

function setInNoRangeNoUnit(_inNoRangeNoUnit) {
    var value = math.eval(_inNoRangeNoUnit);

    if (value === undefined) {
        throw "Could not evaluate input for _inNoRangeNoUnit";
    }

    //check unit
    var value_num = value.toSI().toNumber();
    //check range
    Module.setInNoRangeNoUnit(value_num);
}