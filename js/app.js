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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let navListAnchor;

sections.forEach((section) => {
  const navListItem = document.createElement("li");
  navListAnchor = document.createElement("a");
  navListAnchor.classList.add("menu__link");
  navListAnchor.textContent = section.dataset.nav;
  navListAnchor.href = `#${section.id}`;
  navListItem.append(navListAnchor);
  navListEl.appendChild(navListItem);
  console.log(section);
});

// try for of/for in loop for navigation

// get attribute data-nav
// sections.dataSet.nav

// Add class 'active' to section when near top of viewport
function setActive() {
  for (const item of navListEl) {
    console.log(item);
  }
}
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
