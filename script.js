// slider produk
const modal1 = document.querySelector(".modal1");
const trigger1 = document.querySelector(".trigger1");
const closeButton1 = document.querySelector(".close-button1");

function toggleModal1() {
    modal1.classList.toggle("show-modal");
}

function windowOnClick1(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
}
trigger1.addEventListener("click", toggleModal1);
closeButton1.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);
// =====================================================

const modal2 = document.querySelector(".modal2");
const trigger2 = document.querySelector(".trigger2");
const closeButton2 = document.querySelector(".close-button2");

function toggleModal2() {
  modal2.classList.toggle("show-modal");
}

function windowOnClick2(event) {
  if (event.target === modal2) {
        toggleModal2();
      }
    }
trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);
// ================================================

const modal3 = document.querySelector(".modal3");
const trigger3 = document.querySelector(".trigger3");
const closeButton3 = document.querySelector(".close-button3");

function toggleModal3() {
  modal3.classList.toggle("show-modal");
}

function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
      }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);
// =================================================

const modal4 = document.querySelector(".modal4");
const trigger4 = document.querySelector(".trigger4");
const closeButton4 = document.querySelector(".close-button4");

function toggleModal4() {
  modal4.classList.toggle("show-modal");
}

function windowOnClick4(event) {
  if (event.target === modal4) {
    toggleModal4();
  }
}
  
trigger4.addEventListener("click", toggleModal4);
closeButton4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);
  // =====================================================
  
  // slider Data
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "block";
}
// ========================================================================

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slide2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}
// ==================================================================

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("slide3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3-1].style.display = "block";
}
// =========================================================

const acc = document.getElementsByClassName('accordion');
for(i = 0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
      this.classList.toggle('active');
    });
}

// ===========================================

const COUNT_URL = "https://api.countapi.xyz";
const NAMESPACE = "plan-your-protection.netlify.app";
const KEY = "ef3afdec-6ba5-11ec-90d6-0242ac120003";

const counter = document.querySelectorAll('.counters');

const getCount = async () => {
  const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

const incrementCount = async () => {
  const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

const setValue = (num) => {
  var str = num.toString().padStart(6, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

if (localStorage.getItem("hasVisited") == null) {
  incrementCount()
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}