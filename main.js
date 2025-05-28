// DOM Elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const settingContainer = document.getElementById("setting-container");
const visualModeToggle = document.getElementById("visualmodetogglebuttoncontainer");
const soundToggle = document.getElementById("soundtogglebuttoncontainer");
const soundSwitch = document.getElementById("switchforsound");
const emptyArea = document.getElementById("emptyarea");
const mobileToggleMenu = document.getElementById("mobiletogglemenu");
const backToTopButton = document.getElementById("backtotopbutton");

// Toggle Settings Panel
function settingToggle() {
  settingContainer.classList.toggle("settingactivate");
  visualModeToggle.classList.toggle("visualmodeshow");
  soundToggle.classList.toggle("soundmodeshow");
}

// Play / Pause Audio
function playPause() {
  soundSwitch.checked ? audio.play() : audio.pause();
}

// Toggle Visual Mode
function visualMode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(el => {
    el.classList.toggle("invertapplied");
  });
}

// Preloader and Initial Popup
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// Hamburger Menu Toggle
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  mobileToggleMenu.classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide Menu When Clicking a List Item
function hideMenuByLi() {
  document.body.classList.toggle("stopscrolling");
  mobileToggleMenu.classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Scroll Section Highlight
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobileNavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  mobileNavLi.forEach(li => {
    li.classList.remove("activeThismobiletab");
    if (li.dataset.section === currentSection) {
      li.classList.add("activeThismobiletab");
    }
  });

  navLi.forEach(li => {
    li.classList.remove("activeThistab");
    if (li.dataset.section === currentSection) {
      li.classList.add("activeThistab");
    }
  });
});

// Back to Top Button
function toggleBackToTop() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = toggleBackToTop;

// Disable Right-Click on Images
document.addEventListener("contextmenu", e => {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

// Pupil Movement with Mouse
const pupils = Array.from(document.getElementsByClassName("footer-pupil"));
let pupilStart = -10;
let rangeX = 20;
let rangeY = 15;
let mouseXStart = 0;
let mouseXEnd = window.innerWidth;
let mouseYEnd = window.innerHeight;

const onMouseMove = e => {
  const fracX = (e.clientX - mouseXStart) / (mouseXEnd - mouseXStart);
  const fracY = e.clientY / mouseYEnd;
  const x = pupilStart + fracX * rangeX;
  const y = pupilStart + fracY * rangeY;

  pupils.forEach(pupil => {
    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
};

const onWindowResize = () => {
  mouseXEnd = window.innerWidth;
  mouseYEnd = window.innerHeight;
};

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("resize", onWindowResize);

// Dev Credit
console.log(
  "%c Designed and Developed by Vinod Jangid ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);
