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
    btns[i].addEventListener("mouseover", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const imgTag = this.querySelector('img');

        let one = document.getElementById('project-img');
        let x = one.setAttribute("src", imgTag.src);
        console.log(x);
    });
});


// ------------------------------------------------
let projectRow = document.getElementById('projectRow');
let filterButtons = document.querySelectorAll('.filter-btn');

let projectItem = [
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-1.jpeg',
    },
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-2.jpeg',
    },
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-3.jpeg',
    },
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-4.jpeg',
    },
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-5.jpeg',
    },
    {
        name: 'kitchen',
        image: 'images/project/kitchen-contractor-6.png',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-1.jpg',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-2.jpg',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-3.jpg',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-4.jpg',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-5.jpg',
    },
    {
        name: 'bathroom',
        image: 'images/project/bathroom-contractor-6.jpg',
    },
    {
        name: 'bricks',
        image: 'images/project/bricks&paves-1.jpg',
    },
    {
        name: 'bricks',
        image: 'images/project/bricks&paves-2.jpg',
    },
    {
        name: 'bricks',
        image: 'images/project/bricks&paves-3.jpg',
    },
    {
        name: 'bricks',
        image: 'images/project/bricks&paves-4.jpg',
    },
    {
        name: 'bricks',
        image: 'images/project/bricks&paves-5.jpg',
    },
    {
        name: 'painting',
        image: 'images/project/painting-1.jpg',
    },
    {
        name: 'painting',
        image: 'images/project/painting-2.jpg',
    },
    {
        name: 'painting',
        image: 'images/project/painting-3.jpg',
    },
    {
        name: 'painting',
        image: 'images/project/painting-4.jpg',
    },
    {
        name: 'roofing',
        image: 'images/project/roofing-1.jpg',
    },
    {
        name: 'roofing',
        image: 'images/project/roofing-2.jpg',
    },
    {
        name: 'flooring',
        image: 'images/project/flooring-1.jpg',
    },
    {
        name: 'flooring',
        image: 'images/project/flooring-2.jpg',
    },
    {
        name: 'flooring',
        image: 'images/project/flooring-3.jpeg',
    },
    {
        name: 'flooring',
        image: 'images/project/flooring-4.jpeg',
    },
    {
        name: 'flooring',
        image: 'images/project/flooring-5.jpg',
    },
    {
        name: 'renovation',
        image: 'images/project/renovation-1.jpg',
    },
    {
        name: 'renovation',
        image: 'images/project/renovation-2.jpg',
    },
    {
        name: 'renovation',
        image: 'images/project/renovation-3.jpg',
    },
    {
        name: 'renovation',
        image: 'images/project/renovation-4.jpg',
    },
]
function displayProjectItem(projectItem) {
    let html = '';
    for (let i = 0; i < projectItem.length; i++) {
        html += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="renovation-img w-100 overflow-hidden">
                        <img src="${projectItem[i].image}" alt="${projectItem[i].name}" class="img-fluid">
                    </div>
                </div>
        `;
        projectRow.innerHTML = html;
    };
}

displayProjectItem(projectItem);

filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        
        var current = document.getElementsByClassName("activeProduct");
        current[0].className = current[0].className.replace(" activeProduct", "");
        this.className += " activeProduct";

        let filter = this.getAttribute('data-filter');
        if (filter == 'all') {
            displayProjectItem(projectItem);
        }
        else {
            let filteredProjectItem = projectItem.filter(item => item.name === filter);
            displayProjectItem(filteredProjectItem);
        }
    })
})
