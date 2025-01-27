
const navLink = document.querySelectorAll('a');
navLink.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const startingY = window.scrollY;
  const targetY = targetElement.offsetTop;
  const distance = targetY - startingY;

  let startTime = null;

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    // Adjust the timing function and duration for speed control
    const ease = elapsedTime / 8000; // Linear timing

    // Calculate newY considering both upward and downward scrolling
    const newY = startingY + ease * distance;

    window.scrollTo(0, newY);

    // Continue animation until targetY is reached
    if ((distance > 0 && newY < targetY) || (distance < 0 && newY > targetY)) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}


function toggleMenu() {
  menuHide();
}


function menuHide() {
  var x = document.getElementById("navMenu");
  var y = document.getElementById("navigation-section")
  var z = document.getElementById("nav-menu-button");

  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.backgroundColor = "#438e96";
    z.style.display = "inline-block";
  } else {
    x.style.display = "flex";
    y.style.backgroundColor = "#000000";
    z.style.display = "none";
  }
}

// Gallery Modal

// Open modal
function openModal() {
  document.getElementById("myModal").style.display = "block"
}

// Close Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

// Display Image  
var slideIndex = 1;
showSlides(slideIndex);


// Next/Previous Slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery-slide");
  var images = document.getElementsByClassName("slide-image");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(" active", "");
  }
  // Set image to display
  console.log("slide index = " + slideIndex);
  console.log("slides length = " + slides.length);
  slides[slideIndex - 1].style.display = "block"
  captionText.innerHTML = images[slideIndex - 1].alt;

}

function toggleImageSize(id) {
  var elementID = id;
  const j = document.getElementById(elementID);

  j.classList.toggle("enlarge");
  enlargeImageView();
}

function enlargeImageView() {
  const k = document.getElementById("prev-button");
  const l = document.getElementById("next-button");
  const m = document.getElementById("closeButton");
  const n = document.getElementById("caption");

  k.classList.toggle("hide");
  l.classList.toggle("hide");
  m.classList.toggle("hide");
  n.classList.toggle("hide");
}


function showContact() {
  const contact = document.getElementById("contactModal");
  contact.style.display = "flex";
}

function hideContact() {
  const contact = document.getElementById("contactModal");
  contact.style.display = "none";
  document.getElementById("contactForm").reset();
}


