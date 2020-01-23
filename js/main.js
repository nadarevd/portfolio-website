    b1 = document.getElementById('b1');
    b2 = document.getElementById('b2');
    b3 = document.getElementById('b3');

    let menu_bar = document.getElementById('myLinks');


    b1.onclick = function() {
        document.getElementById('winhacks').style.display = 'block';
        document.getElementById('b1').style.textDecoration = 'underline';
        document.getElementById('b2').style.textDecoration = 'none';
        document.getElementById('b3').style.textDecoration = 'none';
        document.getElementById('organization').style.display = 'none';
        document.getElementById('organization2').style.display = 'none';
        document.getElementById("work-tag").style.top = "0px";
    }

    b2.onclick = function() {
        document.getElementById('winhacks').style.display = 'none';
        document.getElementById('b1').style.textDecoration = 'none';
        document.getElementById('b2').style.textDecoration = 'underline';
        document.getElementById('b3').style.textDecoration = 'none';
        document.getElementById('organization').style.display = 'block';
        document.getElementById('organization2').style.display = 'none';
        document.getElementById("work-tag").style.top = "42px";
    }

    b3.onclick = function() {
        document.getElementById('winhacks').style.display = 'none';
        document.getElementById('b1').style.textDecoration = 'none';
        document.getElementById('b2').style.textDecoration = 'none';
        document.getElementById('b3').style.textDecoration = 'underline';
        document.getElementById('organization').style.display = 'none';
        document.getElementById('organization2').style.display = 'block';
        document.getElementById("work-tag").style.top = "84px";
    }

    function hover_project(x) {
        x.style.top = "-10 px";
    }

    function hover_project_out(x) {
        x.style.top = "0 px";
    }

    function menu() {
        alert("hi");
        if (menu_bar.style.display === "block") {
            menu_bar.style.display = "none";
        } else {
            menu_bar.style.display = "block";
        }
    }