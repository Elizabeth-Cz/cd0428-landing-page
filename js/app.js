/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navEl = document.querySelector(".navbar__menu");
const navListEl = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("[data-nav]");
const form = document.querySelector("form");
let user = {};
const infoDiv = document.querySelector(".info");

// build the nav
let navListAnchor;

// function to create navbar item
const createItem = (section) => {
  const navListItem = document.createElement("li");
  navListAnchor = document.createElement("a");
  navListAnchor.classList.add("menu__link");
  navListAnchor.textContent = section.dataset.nav;
  navListAnchor.href = `#${section.id}`;
  navListItem.append(navListAnchor);
  navListEl.appendChild(navListItem);
};

sections.forEach((section) => {
  createItem(section);
});

for (let i = 0; i < navListEl.length; i++) {
  console.log(navListEl[i]);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //apply active state on current section and corresponding Nav link
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("selected");
      document.querySelector(`[href="#${section.id}"]`).classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("selected");
      document
        .querySelector(`[href="#${section.id}"]`)
        .classList.remove("active");
    }
  }
}
document.addEventListener("scroll", function () {
  makeActive();
});

// get a node list of all anchors
const anchorList = document.querySelectorAll("a");
// add an event listener for each anchor for smooth scrolling
for (const anchor of anchorList) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const box = document
      .querySelector(e.target.getAttribute("href"))
      .getBoundingClientRect();
    scrollBy({
      top: box.top - 150,
      behavior: "smooth",
    });
  });
}

//form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  user = {
    name,
    email,
  };
  infoDiv.style.visibility = "visible";
  infoDiv.innerHTML = `<p>your full name is ${user.name}</p>
  <p>your email is ${user.email}</p>
  <p>Thank you!</p>`;
});
