const navBtn = document.querySelector('.nav-btn');
let navOpen = false;

navBtn.addEventListener('click', () => {
    if (!navOpen){
        navBtn.classList.add('open');
        navOpen = true;
    } else{
        navBtn.classList.remove('open');
        navOpen = false;
    }
});