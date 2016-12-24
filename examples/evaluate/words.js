"use strict";

var botnana = require('../../index');

function test_botnana() {
    botnana.on("ready", function() {
        // Real-time script API
        var script = "words";
        botnana.motion.evaluate(script);
    });
    botnana.start("ws://192.168.7.2:3012");
 }

setTimeout(test_botnana, 500);