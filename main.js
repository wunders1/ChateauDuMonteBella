
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


// Contact form validation
let contactFrom = document.getElementById("contactForm");
let fname = document.getElementById("name");
let nameErrorText = document.getElementById("nameError");
let pnumber = document.getElementById("phoneNum");
let pnumtext = document.getElementById("phoneError");
let email = document.getElementById("email");


//Name
function nameValidation() {
  let fname = document.getElementById("name");
  let nameErrorText = document.getElementById("nameError");
  let nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

  if (fname.value.match(nameRegex) && fname.value.length > 0 && fname.value.trim() != "") {
    console.log(`Contact name is: ${fname.value}`);
    fname.classList.remove("error");
    nameErrorText.style.display = "none";
    return true
  } else {
    console.log("name invalid");
    fname.classList.add("error");
    nameErrorText.style.display = "block";
    return false
  }
}

//Phone
function phoneValidation() {
let pnumber = document.getElementById("phoneNum");
let pnumtext = document.getElementById("phoneError");
let phoneregm = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
let phonereg = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if (pnumber.value.match(phonereg) || pnumber.value.match(phoneregm)) {
    console.log(`Contact phone number is: ${pnumber.value}`);
    pnumber.classList.remove("error");
    pnumtext.style.display = "none";
    return true
  } else {
    console.log("phone is not valid");
    pnumber.classList.add("error");
    pnumtext.style.display = "block";
    return false
  }
}

//e-mail
function emailValidation() {
  let email = document.getElementById("email");
  let emailtext = document.getElementById("emailError");
  let emailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email.value.match(emailreg)){
    console.log(`Contact email address is: ${email.value}`);
    email.classList.remove("error");
    emailtext.style.display = "none";
    return true
  } else {
    console.log("email is not valid");
    email.classList.add("error");
    emailtext.style.display = "block";
    return false
  }
}

//Enquiry Reason
function enquiryValidation() {
  let reason = document.getElementById("reason");
  let reasonError = document.getElementById("reasonError");

  if (reason.value != "") {
    console.log(`Enquiry is regarding: ${reason.value}`);
    reason.classList.remove("error");
    reasonError.style.display = "none";
    return true
  } 
  else {
    console.log("reason not given");
    reason.classList.add("error");
    reasonError.style.display = "block";
    return false
  }
}

function formReset() {
  document.getElementById("contactForm").reset();
  hideContact();
}

function formValidation(event) {
  console.log("button clicked");
  nameValidation();
  phoneValidation();
  emailValidation();
  enquiryValidation();

  if (nameValidation() && phoneValidation() && emailValidation() && enquiryValidation()) {
      console.log("form validation success");
      //formReset();
      
  } else {
    
    console.log("form validation failed");
    return false
  }
}
