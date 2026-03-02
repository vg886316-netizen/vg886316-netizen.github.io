// Toggle menu to change icon

const  toggle = document.getElementById("menu-toggle");
const  navbar = document.getElementById("navbar");
const  icon = toggle.querySelector("i");

toggle.addEventListener("click", function(){
    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Automatic text write and remove 

const text = "'m Vinod Gautam";

    let index = 0;
    let isDeleting = false;
    const speed = 140;
    function typeEffect(){
        const element = document.getElementById("typing");
        if (!isDeleting){
            element.innerHTML = text.substring(0, index++);
            if(index > text.length){
                isDeleting = true;
                setTimeout(typeEffect, 1000);
                return; 
            }
        }
        else{
            element.innerHTML = text.substring(0, index--);
            if(index === 0){
                isDeleting = false;
            }
        }
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }    
    window.onload = typeEffect;

const scrollBtn = document.getElementById("scrollTopBtn");

// Show button after 100vh scroll (Home section height)
window.addEventListener("scroll", function() {
  if (window.scrollY >= window.innerHeight) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});


// About section animation

const aboutSection = document.querySelector(".about-section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("show");
        }
        else {
            aboutSection.classList.remove("show"); 
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);

// In certificate password applying code
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

// set password
let correctPassword = "886316";

function openModal(src){

    let userPassword = prompt("Enter password to view certificate:");

    if(userPassword === correctPassword){
        modal.style.display="flex";
        modalImg.src = src;
    }
    else if(userPassword === null){
        return;
    }
    else{
        alert("Wrong Password! Access denied.")
    }
}
function closeModal(){
    modal.style.display="none";
}

// Certificate section animation
const cardsSection2 = document.querySelector(".cards-container");
// Alag observer banalo
const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cardsSection2.classList.add("show");
        } else {
            cardsSection2.classList.remove("show");
        }
    });
}, { threshold: 0.3 });
// Observe karo
cardsObserver.observe(cardsSection2);


// Sab project cards select karo
const projectCards = document.querySelectorAll(".project-card");
// Observer
const projectobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { 
    threshold: 0.3 
});
// Har card observe karo
projectCards.forEach(card => {
    projectobserver.observe(card);
});


// Sab skill cards select karo
const skillCards = document.querySelectorAll(".skill-card");
// Observer
const skillobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { 
    threshold: 0.3 
});
// Har card observe karo
skillCards.forEach(card => {
    skillobserver.observe(card);
});

// contact us animations
function copyText(id){
    const element = document.getElementById(id);
    if(!element) return;

    const clipboardText = element.innerText;

    if(navigator.clipboard){
        navigator.clipboard.writeText(clipboardText).then(showToast);
    }
}

function showToast(){
    const toastEl = document.getElementById("toast");
    toastEl.classList.add("show");
    setTimeout(()=>{ toastEl.classList.remove("show"); }, 3000);
}

function clickEffect(btn){
    btn.style.transform="scale(0.9)";
    setTimeout(()=>{ btn.style.transform="scale(1)"; },150);
}

const cardElements = document.querySelectorAll(".card");

const scrollObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
},{ threshold:0.2 });

cardElements.forEach(card => scrollObserver.observe(card));

// footer section
document.getElementById("year").innerText =
new Date().getFullYear();

setTimeout(function(){
    document.getElementById("loaders").style.display="none";
    document.getElementById("mainContent").style.display="block";
}, 3000);