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

// let projectContent = document.querySelector('.project-card');
// projectContent.addEventListener('click', function () {
//     console.log(projectContent.innerHTML.img);
// })

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const imgTag = this.querySelector('img');
 
        let one = document.getElementById('project-img');
        let x = one.setAttribute("src", imgTag.src);
        console.log(x);
    });
});
