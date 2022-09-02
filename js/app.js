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

// build the nav
let navListAnchor;

sections.forEach((section) => {
  // create list item for each section
  const navListItem = document.createElement("li");
  // create anchor to append to list item
  navListAnchor = document.createElement("a");
  navListAnchor.classList.add("menu__link");
  // set the content of the anchor to the data-nav attribute
  navListAnchor.textContent = section.dataset.nav;
  //set the href of the anchor to the id of each section
  navListAnchor.href = `#${section.id}`;
  navListItem.append(navListAnchor);
  navListEl.appendChild(navListItem);
});

for (let i = 0; i < navListEl.length; i++) {
  console.log(navListEl[i]);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      // console.log(section);
      section.classList.add("selected");
      // console.log(document.querySelector(`[href="#${section.id}"]`));
      document.querySelector(`[href="#${section.id}"]`).classList.add("active");
      console.log();
      //apply active state on current section and corresponding Nav link
    } else {
      section.classList.remove("selected");
      document
        .querySelector(`[href="#${section.id}"]`)
        .classList.remove("active");
      //Remove active state from other section and corresponding Nav link
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
    // document
    //   .querySelector(e.target.getAttribute("href"))
    //   .scrollIntoView({ behavior: "smooth" });
    const box = document
      .querySelector(e.target.getAttribute("href"))
      .getBoundingClientRect();
    scrollBy({
      top: box.top - 150,
      behavior: "smooth",
    });
  });
}
