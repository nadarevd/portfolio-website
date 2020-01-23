window.onload = function() {
    var popup = document.getElementById("signup-popup");
    var myButton = document.getElementById("myButton");
    var span = document.getElementsByClassName("exit")[0];


    myButton.onclick = function() {
        popup.style.display = "block";

    }
    span.onclick = function() {
        popup.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";

        }

    }



}