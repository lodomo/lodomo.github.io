/*
 * Render the content of the website
 * return {void}
 */
function main() {
  const title = "lodomo.dev";
  const sections = ["Home", "About", "Previous Work", "Projects", "Contact"];
  document.title = title;
  renderHeader(sections, title);
  renderMain(sections, title);
  renderFooter(title);
}

/*
 * Render the header of the website.
 * Currently only renders the navbar.
 * There may be more content in the future.
 * return {void}
 */
function renderHeader(sections, title) {
  const header = document.getElementById("header");
  renderNavbar(header, title, sections);
}

/*
 * Renders each section of the website.
 * return {void}
 */
function renderMain(sections, title) {
  const main = document.getElementById("main");
  main.classList.add("container-fluid");
  renderHome(main, title);
  renderAbout(main);
  renderPreviousWork(main);
  renderProjects(main);
  renderContact(main);
}

/*
 * Renders the footer of the website.
 * return {void}
 */
function renderFooter(title) { }

/*
 * Renders the navbar of the website.
 * The navbar is a fixed-top navbar with a logo and a list of sections.
 *
 * @param {HTMLElement} header - The header element to append the navbar to.
 * @param {String} title - The title of the website.
 * @param {Array} sections - An array of sections to render in the navbar.
 *
 * return {void}
 */
function renderNavbar(header, title, sections) {
  const branding_w_logo = "assets/branding-w-logo.png";
  const navbar = addElement(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "fixed-top",
    "navbar-dark",
    "bg-dark",
    "pr-3",
    "pl-3",
    "pt-0",
    "pb-0",
  ]);

  const navbarSubContainer = addElement(navbar, "div", ["container"]);
  const brand = addElement(navbarSubContainer, "a", ["navbar-brand"]);
  brand.href = "#";

  const brandImage = addElement(brand, "img", ["branding-w-logo"]);
  brandImage.src = branding_w_logo;
  brandImage.alt = title;
  brandImage.height = 37;
  brandImage.width = 160;

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
    const listItem = addElement(list, "li", "", ["nav-item"]);
    listItem.id = item.toLowerCase() + "-nav";
    const link = addElement(listItem, "a", ["nav-link", "h-100"], item);
    let href = item.toLowerCase();
    link.textContent = item;
    href = href.replace(/\s+/g, "-"); // Fixes the issue with "Previous Work"
    link.href = "#" + href;
  });
}

/*
 * Renders the home section of the website.
 * return {void}
 */
function renderHome(main, title) {
  const homeRow = addElement(main, "div", ["row", "relative"]);
  homeRow.id = "home";
  const home = addElement(homeRow, "div", [
    "jumbotron",
    "jumbotron-fluid",
    "vh-100",
    "home",
    "black",
  ]);

  const h1 = addElement(home, "h1", []);
  h1.ariaLabel = "Welcome to " + title;

  const logoContainer = addElement(home, "div", ["logo-container"]);
  const verticalLogo = addElement(logoContainer, "img", [
    "floating-logo",
    "vertical-logo",
  ]);
  verticalLogo.src = "assets/logo-vertical.png";
  verticalLogo.alt = "Pixel art logo that says 'Lodomo.Dev'";

  const horizontalLogo = addElement(logoContainer, "img", [
    "floating-logo",
    "horizontal-logo",
  ]);
  horizontalLogo.src = "assets/logo-horizontal.png";
  horizontalLogo.alt = "Pixel art logo that says 'Lodomo.Dev'";

  const portrait = addElement(home, "img", ["portrait", "pixel-art"]);
  portrait.src = "assets/pixel_portrait.png";
  portrait.alt =
    "A pixel art portrait of Lorenzo. He has glasses, a big red nose, red ears, white hair  gfand a white beard";
}

function renderAbout(main) {
  const aboutRow = addElement(main, "div", ["row", "bg-dark"]);
  aboutRow.id = "about";
  const about = addElement(aboutRow, "div", []);

  const h1 = addElement(about, "h2", []);
  h1.textContent = "About";

  const p = addElement(about, "p", []);
  p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function renderPreviousWork(main) {
  const previousWorkRow = addElement(main, "div", ["row", "bg-light"]);
  previousWorkRow.id = "previous-work";
  const previousWork = addElement(previousWorkRow, "div", []);

  const h1 = addElement(previousWork, "h2", []);
  h1.textContent = "Previous Work";

  const p = addElement(previousWork, "p", []);
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function renderProjects(main) {
  const projectsRow = addElement(main, "div", ["row", "bg-dark"]);
  projectsRow.id = "projects";
  const projects = addElement(projectsRow, "div", []);

  const h1 = addElement(projects, "h2", []);
  h1.textContent = "Projects";

  const p = addElement(projects, "p", []);
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function renderContact(main) {
  const contactRow = addElement(main, "div", ["row", "bg-light"]);
  contactRow.id = "contact";
  const contact = addElement(contactRow, "div", []);

  const h1 = addElement(contact, "h2", []);
  h1.textContent = "Contact";

  const p = addElement(contact, "p", []);
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

/* Helper Functions */
function addElement(parent, tag, classes = []) {
  const element = document.createElement(tag);
  if (classes) element.classList.add(...classes);
  parent.appendChild(element);
  return element;
}

main();
