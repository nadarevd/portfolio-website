    b1 = document.getElementById('b1');
    b2 = document.getElementById('b2');
    b3 = document.getElementById('b3');


    b1.onclick = function() {
        console.log("lol");
        document.getElementById('winhacks').style.display = 'block';
        document.getElementById('organization').style.display = 'none';
        document.getElementById('organization2').style.display = 'none';
        document.getElementById("work-tag").style.top = "0px";
    }

    b2.onclick = function() {
        document.getElementById('winhacks').style.display = 'none';
        document.getElementById('organization').style.display = 'block';
        document.getElementById('organization2').style.display = 'none';
        document.getElementById("work-tag").style.top = "42px";
    }

    b3.onclick = function() {
        document.getElementById('winhacks').style.display = 'none';
        document.getElementById('organization').style.display = 'none';
        document.getElementById('organization2').style.display = 'block';
        document.getElementById("work-tag").style.top = "84px";
    }




    // if (b1.clicked == true) {

    // }
    // if (b2.clicked == true) {
    //     document.getElementById('winhacks').style.display = 'none';
    //     document.getElementById('organization').style.display = 'block';
    //     b3.style.display = 'none';
    // }