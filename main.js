'use strict;'

function generateRandomNumber() {
    var times = document.getElementById("1").value;
    if (isNaN(times || null)) {
        returnThing = 'Error ' + times + ' is not a number';
    }else {
        if (times > 100) {
            times = 10;
        }
    
        var returnThing = "";
    
        for (let index = 0; index < times; index++) {
            var x = 0;
            var array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            x = array[0] + "";
            returnThing += Number(x.slice(-1));
        }
    }


    document.getElementById("1").value = returnThing;
    document.getElementById("type").value = typeof (returnThing);
}

function coordinates(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "(" + x + "," + y + ")";
    document.getElementById("type").value = coor;
}