//get modal
const modal = document.getElementById("myModal");
//get navbar and set into modal
const navbar = document.querySelector(".nav-btn");
//accessing the links
const linking = document.querySelectorAll(".linkage");

//image modal section
const myModal = document.getElementById("myModal2");
const modalImg = document.getElementById("img01");
const caption = document.getElementById("caption");
const linkto = document.getElementById("site-link");
const repo = document.getElementById("repo-link");


//modal is set to default of not open
let navOpen = false;
const openModal = () => {
    if (!navOpen) {
        navbar.classList.add('open');
        navOpen = true;
        modal.style.display = "block"
    } else {
        modal.style.display = "none";
    }
};

//closing modal once link is clicked
for(i=0;i< linking.length;i++){    
    linking[i].onclick = function(){
    modal.style.display = "none";
    navbar.classList.remove('open');
    navOpen = false;
 }
}

navbar.addEventListener('click', openModal);

//closing modal once clicked outside of modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        navbar.classList.remove('open');
        navOpen = false;
        myModal.style.display = "none";
    }
}

//image modal section



//image modal turned off on anything other than mobile view

const mediaQ = window.matchMedia('(max-width: 699px)');
mediaQ.addEventListener('change', screenSize);

function screenSize (e){
if (e.matches){
    const card = document.querySelectorAll('.card');
    card.forEach (function(item) {
        const img = item.querySelector('.myImg').getAttribute('src');
        const cap = item.querySelector('.description').innerText;
        const hidden = item.querySelector('.text3').innerText;
        const hubRepo = item.querySelector('.repos').innerText;
        item.addEventListener('click', function() {
            myModal.style.display = "block";
            modalImg.setAttribute('src', img);
            caption.innerText = cap;
            linkto.innerText = hidden;
            repo.innerText = hubRepo;
        })
    })
}  }
screenSize(mediaQ)
mediaQ.removeEventListener('change', screenSize)

window.onresize = function(){ location.reload(); }

// element to close modal
const span = document.getElementsByClassName("close")[0];
// function to close modal
span.onclick = function (){
    myModal.style.display = "none";
}
