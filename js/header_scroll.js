var previousScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (previousScrollPos > currentScrollPos) {
        document.getElementById("top-header").style.top = "0";
    } else {
        document.getElementById("top-header").style.top = "-100px";
    }
    previousScrollPos = currentScrollPos;
};