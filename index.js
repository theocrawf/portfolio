
// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }


//get modal
const modal = document.getElementById("myModal");
//get navbar and set into modal
const navbar = document.querySelector(".nav-btn");
//accessing the links
const linking = document.querySelectorAll(".linkage");

//image modal section
const myModal = document.getElementById("myModal2");
// const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");
// const caption = document.getElementById("caption");
// const cap = document.getElementsByClassName("caption");
// const card = document.getElementsByClassName("card");


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
const card = document.getElementsByClassName("card");


for(i=0;i< card.length;i++){    
    card[i].onclick = function(){
    const img = document.querySelector('.card img');
    const cap = document.querySelector('.card div .caption');
    myModal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = cap.innerHTML;
 }
}
// for(i=0; i< card.length; i++){
//     card[i].addEventListener('click', function(clickEvent){
//         if(clickEvent.target === card){
//             const img = card.querySelector(".myImg");
//             myModal.style.display = "block";
//             modalImg.src = img.src;
//         }
//     })
// }


// element to close modal
const span = document.getElementsByClassName("close")[0];
// function to close modal
span.onclick = function (){
    myModal.style.display = "none";
}
