let headSection = document.querySelector('#headSection');

var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav-links");

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) { // Adjust this value based on when you want the color to change
        headSection.classList.add('scrolled');
    } else {
        headSection.classList.remove('scrolled');
    }
});


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}