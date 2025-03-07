function main() {
  const title = "lodomo.dev";
  const sections = ["Home", "About", "Previous Work", "Projects", "Contact"];

  document.title = title;
  renderHeader(sections, title);
  renderMain(sections);
  renderFooter();
}

/* HEADER */
function renderHeader(sections, title) {
  const header = document.getElementById("header");
  renderNavbar(header, title, sections);
};

function renderNavbar(header, title_text, sections) {
  const branding_w_logo = "assets/branding-w-logo.png";
  const navbar = addElement(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "fixed-top",
    "navbar-dark",
    "bg-dark",
    "p-3",
  ]);

  const navbarSubContainer = addElement(navbar, "div", ["container"]);

  const brand = addElement(navbarSubContainer, "a", ["navbar-brand"]);
  brand.href = "#";
  addImage(brand, branding_w_logo, title_text, 37, 160);

  const toggler = addElement(navbarSubContainer, "button", ["navbar-toggler"]);
  toggler.dataset.bsToggle = "collapse";
  toggler.dataset.bsTarget = "#navbarSupportedContent";
  toggler.alt = "Toggle Navigation";
  toggler.ariaLabel = "Toggle Navigation";

  // Toggler Icon
  addElement(toggler, "span", ["navbar-toggler-icon"]);

  const collapse = addElement(navbarSubContainer, "div", [
    "collapse",
    "navbar-collapse",
  ]);
  collapse.id = "navbarSupportedContent";

  const list = addElement(collapse, "ul", ["navbar-nav", "mr-auto"]);

  sections.forEach((item) => {
    const listItem = addTextElement(list, "li", ["nav-item"], item);
    listItem.id = item.toLowerCase() + "-nav";
    const link = addElement(listItem, "a", ["nav-link"], item);
    let href = item.toLowerCase();
    href = href.replace(/\s+/g, "-"); // Fixes the issue with "Previous Work"
    link.href = "#" + href;
  });
};

/* MAIN */

const renderMain = (sections) => {
  const main = document.getElementById("main");
  main.classList.add("container-fluid");
  renderHome(main);
};

const renderHome = (main) => {
  const homeContainer = addElement(main, "div", ["row"]);
  const home = addElement(homeContainer, "div", [
    "jumbotron",
    "jumbotron-fluid",
    "vh-100",
    "home",
    "black",
  ]);

  const h1 = addElement(home, "h1", [], "Welcome to Lodomo.Dev");
};

/* FOOTER */

const renderFooter = () => {
  const footer = document.getElementById("footer");
};

/* Helper Functions */
/*
 * Adds an element to the parent element with the specified type, classes, and text.
 * @param {HTMLElement} parent - The parent element.
 * @param {string} type - The type of element to create.
 * @param {string[]} classes - The classes to add to the element. (Optional)
 * @param {string} id - The id to add to the element. (Optional)
 *
 * @returns {HTMLElement} The newly created element.
 */
function createElement(parent, type, id="")
{
}
function addElement(parent, type, classes = [], id = "") {
  const element = document.createElement(type);
  parent.appendChild(element);
  if (id) element.id = id;
  if (classes.length) element.classList.add(...classes);
  return element;
}

/*
 * Adds a text element to the parent element with the specified type, classes, and text.
 * @param {HTMLElement} parent - The parent element.
 * @param {string} type - The type of element to create.
 * @param {string[]} classes - The classes to add to the element. (Optional)
 * @param {string} text - The text to add to the element. (Optional)
 */
function addTextElement(parent, type, classes = [], text) {
  const acceptedTypes = ["a", "li", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
  if (!acceptedTypes.includes(type)) {
    console.log("Are you sure you want to add a text element?");
    console.log("Accepted types: ", acceptedTypes);
  }

  const element = addElement(parent, type, classes);
  element.textContent = text;
  return element;
}

function addImage(parent, src, alt, height, width, classes = []) {
  const image = addElement(parent, "img", classes);
  image.src = src;
  image.alt = alt;
  image.height = height;
  image.width = width;
  return image;
}

main();

