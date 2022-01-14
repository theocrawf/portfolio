const navBtn = document.querySelector('.nav-btn');
let navOpen = false;
const modal = document.getElementById("myModal");

navBtn.addEventListener('click', () => {
    if (!navOpen){
        navBtn.classList.add('open');
        modal.style.display = "block";
        navOpen = true;
    } else{
        navBtn.classList.remove('open');
        navOpen = false;
        modal.style.display = "none";
    }
});

// const modal = document.getElementById("myModal");

// Get the button that opens the modal
// const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// btnHours.onclick = function () {
//   modalHours.style.display = "block";
// }

// This works but need to figure out how to make it appear where the div is, rather than the top of the page
// btnContactHours.onclick = function () {
//   modalHours2.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// Need to figure out why the (x) is not closing out

// function closing () {
//     modal.style.display = "none";
//     modalHours.style.display = "none";
//     modalHours2.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}