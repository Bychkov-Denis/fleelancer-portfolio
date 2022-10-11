const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}

for(const link of navLinks) {
    link.addEventListener("click", () => {
        clearActiveClasses();
        link.classList.add("active");
    })
}

function clearActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove("active");
    })
}


AOS.init();
